import useApi from '@/use/api';

const { get$ } = useApi();
export default function useApiMain() {

  const getNews = async () => {
    const fetchedData = await get$({ url: 'api/news'});
    if ( !fetchedData.isError ) {
      return fetchedData.data;
    }
    return null;
  };

  const getGrandNews = async () => {
    const fetchedData = await get$({ url: 'api/grandNews'});
    console.log(fetchedData);
    if ( !fetchedData.isError ) {
      return fetchedData.data;
    }
    return null;
  };

  const getPaginatedNews = async (page) => {
    const fetchedData = await get$({ url: 'api/grandNews'});
    if ( !fetchedData.isError ) {
      return fetchedData.data;
    }
    return null;
  };

  const getRegions = async () => {
    const fetchedData = await get$({ url: 'api/regionsBySearch'});
    if ( !fetchedData.isError ) {
      const formatted = fetchedData.data.regions.map((data) => {
        return {
          id: data.id,
          image: data.path_to_image,
          name: data.name_region
        }
      });
      return formatted;
    }
    return null;
  };


  return { getNews, getGrandNews, getPaginatedNews, getRegions };
}