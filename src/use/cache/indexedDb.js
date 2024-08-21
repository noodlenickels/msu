import { openDB } from 'idb';
import moment from 'moment';
import directories from '@/config/directoryTables';

const databaseName = 'idb-pm';
const updatesTable = 'cache-updates';

export default class IndexedDb {

  constructor() {
    if ( IndexedDb.instance ) {
      return IndexedDb.instance;
    }

    this.db = null;
    this.connectingPromise = null;

    IndexedDb.instance = this;

    return IndexedDb.instance;
  }

  async init(onUpdated = undefined) {
    if ( this.connectingPromise ) {
      await this.connectingPromise;
      return;
    }

    this.connectingPromise = openDB(databaseName, directories.version, {
      upgrade(db) {

        directories.tables.filter(table => !!table.cache).forEach(table => {
          try {
            db.createObjectStore(table.cache.table, { keyPath: table.cache.key, autoIncrement: false });
          }
          catch (e) {
            // console.log('error ibdb creation error', e);
          }

        });
        try {
          db.createObjectStore(updatesTable);
        }
        catch (e) {
          // console.log('error ibdb creation error', e);
        }
      },
      blocked(currentVersion, blockedVersion, event) {
        // console.log('blocked', currentVersion, blockedVersion, event);
      },
      blocking(currentVersion, blockedVersion, event) {
        // console.log('blocking', currentVersion, blockedVersion, event);
        if ( onUpdated ) {
          onUpdated(currentVersion, blockedVersion, event);
        }
      },
      terminated() {
        // console.log('terminated');
      },
    });

    this.db = await this.connectingPromise;
    // console.log('created idb instance');
  }

  async putAll(tableName, rows) {
    const tx = this.db.transaction(tableName, 'readwrite');
    return Promise.all([
      ...rows.map(row => tx.store.put(row)),
      tx.done,
      this.setUpDate(tableName),
    ]).then(result => result)
      .catch(error => console.warn(error));
  }

  async get(tableName, key) {
    const tx = this.db.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    const val = (await store.get(key)) || null;
    await tx.done;
    return val;
  }

  async set(tableName, key, value) {
    const tx = this.db.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    await store.put(value, key);
    return tx.done;
  }

  async delete(tableName, key) {
    const tx = this.db.transaction(tableName, 'readwrite');
    const store = tx.objectStore(tableName);
    await store.delete(key);
    return tx.done;
  }

  async getAll(tableName) {
    return await this.db.getAll(tableName);
  }

  async hasCache(tableName) {
    try {
      return await this.db.count(tableName) || false;
    }
    catch (e) {
      console.log('caacher error', e);
    }
    const hasCache = await this.db.count(tableName) || false;
    return hasCache;
  }

  async clear(tableName) {
    // return await this.db.clear(tableName);
    return Promise.all([
      this.db.clear(tableName),
      this.clearUpDate(tableName),
    ]);
  }

  async rewrite(tableName, newRows) {
    return await Promise.all([
      this.deleteCache(tableName),
      this.putAll(tableName, newRows),
      this.setUpDate(tableName),
    ]);
  }

  async setUpDate(tableName) {
    const date = (new moment()).format('YYYY-MM-DD');
    return this.set(updatesTable, tableName, date);
  }

  async getUpDate(tableName) {
    return await this.get(updatesTable, tableName);
  }

  async clearUpDate(tableName) {
    return await this.delete(updatesTable, tableName);
  }

}
//
// this.db.oncomplete = function(e2) {
//   this.tables.forEach(table => {
//     // if ( this.db.objectStoreNames.contains(table.cache.table) ) {
//     //   this.db.deleteObjectStore(table.cache.table);
//     // }
//
//     this.db.createObjectStore(table.cache.table, table.cache.key ? {
//       keyPath: table.cache.key,
//       autoIncrement: false,
//     } : undefined);
//   });
// };
// deleteTable(tableName) {
//   return new Promise((resolve, reject) => {
//     if ( this.db ) {
//       if ( this.db.objectStoreNames.contains('books') ) {
//
//         this.db.deleteObjectStore(tableName);
//         this.db.oncomplete = function(e) {
//           resolve(e.target.result);
//         };
//
//         this.db.onabort = function(e) {
//           console.warn(new Error('idb deleteTable aborted:' + e.target.error));
//           reject(new Error('idb deleteTable aborted:' + e.target.error));
//         };
//
//         this.db.error = function(e) {
//           console.warn(new Error('idb deleteTable error:' + e.target.error));
//           reject(new Error('idb deleteTable error:' + e.target.error));
//         };
//
//       } else {
//         resolve(true);
//       }
//     } else {
//       console.warn(new Error('No connection'));
//       reject(new Error('No connection'));
//     }
//   });
// }
