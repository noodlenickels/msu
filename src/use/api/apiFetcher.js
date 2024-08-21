import useApi from "@/use/api";


export default function useApiFetcher( url, dataIndex) {
  const { get$ } = useApi();

  const fetch = async () => {
    const result = await get$({ url });
    if (!result.isError) {
      const data = result.data?.[dataIndex];
      if (data) {
        return data;
      }
    }
    return null;
  }

  return { fetch }
}