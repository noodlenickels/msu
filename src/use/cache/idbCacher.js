import Idb from '@/use/cache/idb';
import moment from 'moment';

export default async function useIdbCacher(table, ttl = 7) {
  const idb = new Idb();
  await idb.init();

  const getAll = async () => {
    const all = await idb.getAll(table);
    return all;
  };

  const has = async () => {
    const hasCache = await idb.hasCache(table);
    // console.log('hasCache for table ' + table + ' =' + hasCache);
    if ( hasCache ) {
      const cacheDate = await idb.getUpDate(table);
      // console.log('cacheDate for table ' + table + ' =' + cacheDate);
      if ( cacheDate ) {
        const cachedMoment = moment(cacheDate);
        return cachedMoment.add(ttl, 'days') > (new moment());
      }
    }
    return false;
  };

  const setAll = async (data) => {
    return idb.putAll(table, data);
  };

  const replace = async (data) => {
    return idb.rewrite(table, data);
  };

  return { getAll, has, setAll, replace };
}