import useApi from '@/use/api';

const { get$ } = useApi();
export default function useSAIApiContracts() {

  const getContractById = async () => {
    const fetchedData = await get$({ url: 'api/news'});
    console.log(fetchedData);
    if ( !fetchedData.isError ) {
      return fetchedData.data;
    }
    return null;
  };


  return { getContractById };
}