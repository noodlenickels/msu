import useApi from '@/use/api';

const {get$} = useApi();
export default function useApiRegion() {

    const getRegionById = async (id) => {
        const fetchedData = await get$({url: `api/region/${id}`});
        if (!fetchedData.isError) {
            return {
                id: fetchedData.data.id,
                image: fetchedData.data.path_to_image,
                title: fetchedData.data.name_region,
                text: fetchedData.data.content,
            }
        }
        return null;
    };

    const getRegions = async (search) => {
        const fetchedData = await get$({url: `api/regionsBySearch`, params: {search: search}});
        if (!fetchedData.isError) {
            const formatted = fetchedData.data.regions.map((data) => {
                return {
                    id: data.id,
                    name: data.type_region === 'Республика' || data.type_region === 'Город федерального значения'? data.type_region + ' ' + data.name_region : data.name_region + ' ' + data.type_region,
                    link: '/region/'+data.id
                }
            });
            return formatted;
        }
        return null;
    };
    return {getRegions, getRegionById};
}