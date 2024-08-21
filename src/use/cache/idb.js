import moment from 'moment';
import directories from '@/config/directoryTables';

const databaseName = 'idb-pm';
const updatesTable = 'cache-updates';

const tables = [ ...directories.tables.filter(table => !!table.cache).map(table => table.cache), { table: updatesTable } ];
const dbVersion = directories.version;

export default class Idb {

  constructor() {
    if ( !Idb.instanse ) {

      this.db = null;

      if ( !Idb.connectionPromise ) {
        Idb.connectionPromise = this.init();
      }

      Idb.instanse = this;
    }

    return Idb.instanse;
  }

  init() {
    if ( Idb.connectionPromise ) {
      return Idb.connectionPromise;
    }

    return new Promise((resolve, reject) => {

      if ( this.db ) {
        resolve(this.db);
      }

      if ( !window.indexedDB ) {
        console.warn('Unsupported indexedDB');
        reject(new Error('Unsupported indexedDB'));
      }
      let request = window.indexedDB.open(databaseName, dbVersion);

      request.onsuccess = (e) => {
        // console.log('success');
        this.db = request.result;
        resolve(request.result);
      };

      request.onupgradeneeded = (e) => {

        this.checkDBExists().then(async (isExists) => {
          if ( isExists ) {
            await this.deleteDB();
          }
        });

        this.db = e.target.result;

        tables.forEach(table => {
          this.deleteTable(table.table).then(() => {
            // console.log('create table', table.table);
            this.db.createObjectStore(table.table, table.key ? {
              keyPath: table.key, autoIncrement: false,
            } : undefined);
          });
        });


        this.db.oncomplete = (e) => {
          resolve(request.result);
        };

      };

      request.onerror = (e) => {
        console.warn(new Error('idb init error:' + e.target.error));
        reject(new Error('idb init error:' + e.target.error));
      };
    });

  }

  async checkDBExists() {
    return (await window.indexedDB.databases()).map(db => db.name).includes(databaseName);
  }

  async deleteDB() {
    if ( window.indexedDB ) {
      await window.indexedDB.deleteDatabase(databaseName);
    }
  }

  deleteTable(tableName) {
    return new Promise((resolve, reject) => {
      if ( this.db ) {
        if ( this.db.objectStoreNames.contains(tableName) ) {

          this.db.deleteObjectStore(tableName);
          this.db.oncomplete = function(e) {
            resolve(e.target.result);
          };

          this.db.onabort = function(e) {
            console.warn(new Error('idb deleteTable aborted:' + e.target.error));
            reject(new Error('idb deleteTable aborted:' + e.target.error));
          };

          this.db.error = function(e) {
            console.warn(new Error('idb deleteTable error:' + e.target.error));
            reject(new Error('idb deleteTable error:' + e.target.error));
          };

        } else {
          resolve(true);
        }
      } else {
        console.warn(new Error('No connection'));
        reject(new Error('No connection'));
      }
    });
  }

  set(tableName, key, value) {
    return new Promise((resolve, reject) => {

      if ( this.db && value && key ) {
        const tx = this.db.transaction(tableName, 'readwrite');
        const store = tx.objectStore(tableName);
        const req = store.put(value, key);

        req.onsuccess = function(evt) {
          resolve(evt.target.result);
        };

        req.onerror = function(e) {
          console.warn(new Error('idb get error:' + e.target.error));
          reject(new Error('idb get error:' + e.target.error));
        };

      } else {
        console.warn(new Error('No connection or key-value'));
        reject(new Error('No connection or key-value'));
      }
    });

  }

  async putAll(tableName, rows) {
    const tx = this.db.transaction(tableName, 'readwrite');

    const store = tx.objectStore(tableName);

    return Promise.all([ ...rows.map(row => store.put(row)), tx.done, this.setUpDate(tableName) ]).then(result => result)
      .catch(error => {
        console.warn(error);
      });
  }

  get(tableName, key) {
    return new Promise((resolve, reject) => {

      if ( this.db ) {
        const tx = this.db.transaction(tableName, 'readonly');

        const store = tx.objectStore(tableName);
        const req = store.get(key);

        req.onsuccess = function(evt) {
          resolve(evt.target.result);
        };

        req.onerror = function(e) {
          console.warn(new Error('idb get error:' + e.target.error));
          reject(new Error('idb get error:' + e.target.error));
        };

      } else {
        console.warn(new Error('No connection'));
        reject(new Error('No connection'));
      }
    });

  }

  getAll(tableName) {

    return new Promise((resolve, reject) => {
      if ( this.db ) {
        const tx = this.db.transaction(tableName, 'readonly');

        const store = tx.objectStore(tableName);
        const req = store.openCursor(null, IDBCursor.NEXT);

        const rows = [];

        req.onsuccess = function(evt) {
          const cursor = evt?.target?.result;

          if ( cursor ) {
            rows.push(cursor.value);
            cursor.continue();
          } else {
            resolve(rows);
          }

        };

        req.onerror = function(e) {
          console.warn(new Error('idb getAll error:' + e.target.error));
          reject(new Error('idb getAll error:' + e.target.error));
        };
      }
    });

  }

  remove(tableName, key) {
    return new Promise((resolve, reject) => {
      if ( this.db ) {
        const tx = this.db.transaction(tableName, 'readwrite');

        tx.onabort = function(e) {
          console.warn(new Error('idb remove transaction aborted:' + e.target.error));
          reject(new Error('idb remove transaction aborted:' + e.target.error));
        };

        tx.error = function(e) {
          console.warn(new Error('idb remove transaction error:' + e.target.error));
          reject(new Error('idb remove transaction error:' + e.target.error));
        };

        const store = tx.objectStore(tableName);
        const req = store.delete();

        req.onsuccess = function(evt) {
          resolve(evt.target.result);
        };

        req.onerror = function(e) {
          console.warn(new Error('idb remove error:' + e.target.error));
          reject(new Error('idb remove error:' + e.target.error));
        };

      }
    });
  }

  clear(tableName) {
    return new Promise((resolve, reject) => {
      if ( this.db ) {
        const tx = this.db.transaction(tableName, 'readwrite');

        tx.onabort = function(e) {
          console.warn(new Error('idb clear transaction aborted:' + e.target.error));
          reject(new Error('idb clear transaction aborted:' + e.target.error));
        };

        tx.error = function(e) {
          console.warn(new Error('idb clear transaction error:' + e.target.error));
          reject(new Error('idb clear transaction error:' + e.target.error));
        };

        const store = tx.objectStore(tableName);
        const req = store.clear();

        req.onsuccess = function(evt) {
          if ( tableName === updatesTable ) {
            resolve(evt.target.result);
          }

          this.setUpDate(tableName).then(() => {
            resolve(evt.target.result);
          });
        };

        req.onerror = function(e) {
          console.warn(new Error('idb clear error:' + e.target.error));
          reject(new Error('idb clear error:' + e.target.error));
        };

      }
    });
  }

  count(tableName) {
    return new Promise((resolve, reject) => {
      if ( this.db ) {
        const tx = this.db.transaction(tableName, 'readonly');

        tx.onupgradeneeded = function(e) {
          console.log('tx.onerror', e);
        };
        tx.onerror = function(e) {
          console.log('tx.onerror', e);
        };
        tx.onabort = function(e) {
          console.log('tx.onabort', e);
        };

        const store = tx.objectStore(tableName);
        const req = store.count();

        req.onsuccess = function(evt) {
          resolve(evt.target.result);
        };

      } else {
        console.warn(new Error('No connection'));
        reject(new Error('No connection'));
      }
    });
  }

  async hasCache(tableName) {
    return await this.count(tableName);
  }

  async setUpDate(tableName) {
    const date = (new moment()).format('YYYY-MM-DD');

    return await this.set(updatesTable, tableName, date);
  }

  async getUpDate(tableName) {
    return await this.get(updatesTable, tableName);
  }

  async clearUpDate(tableName) {
    return await this.remove(updatesTable, tableName);
  }
}