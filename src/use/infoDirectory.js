export default function useInfoDirectory(fetcher, cacher = null) {
  const getData = async () => {
    if ( cacher ) {
      if ( await cacher.has() ) {
        const cachedData = await cacher.getAll();
        // console.log('data from cache', cachedData);
        return cachedData;
      }
    }

    const dbData = await fetcher.fetch();

    if ( dbData ) {
      if ( cacher ) {
        const cacheResult = await cacher.setAll(dbData);
        // console.log('save data to cache', dbData, cacheResult);
      }
      return dbData;
    }

    return [];
  };

  return { getData };
}