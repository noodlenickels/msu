import useApi from '@/use/api';

const {get$} = useApi();
export default function useApiRegion() {

    const getRegionById = async (id) => {
        const fetchedData = await get$({url: `api/region/${id}`});
        if (!fetchedData.isError) {
            const formatted = fetchedData.data.map((data) => {
                return {
                    id: data.id,
                    image: data.path_to_image,
                    title: data.name_region,
                    text: data.content,
                }
            });
            return formatted;
        }
        return null;
    };

    const getRegions = async () => {
        const fetchedData = await get$({url: `api/regions`});
        if (!fetchedData.isError) {
            const formatted = fetchedData.data.map((data) => {
                return {
                    id: data.id,
                    name: data.name_region,
                    link: '/region/'+data.id
                }
            });
            return formatted;
        }
        return null;
    };
    return {getRegions, getRegionById};
}