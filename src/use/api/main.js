import useApi from '@/use/api';

const {get$} = useApi();
export default function useApiMain() {

    const getInterviews = async () => {
        const fetchedData = await get$({url: 'api/interviews'});
        if (!fetchedData.isError) {
            const formatted = fetchedData.data.map((data) => {
                return {
                    id: data.id,
                    image: data.path_to_image,
                    title: data.title,
                    text: data.content
                }
            });
            return formatted;
        }
        return null;
    };


    const getOpinions = async () => {
        const fetchedData = await get$({url: 'api/opinions'});
        if (!fetchedData.isError) {
            const formatted = fetchedData.data.map((data) => {
                return {
                    id: data.id,
                    image: data.path_to_image,
                    title: data.title,
                    text: data.content
                }
            });
            return formatted;
        }
        return null;
    };

    const getRegions = async () => {
        const fetchedData = await get$({url: 'api/regionsBySearch'});
        if (!fetchedData.isError) {
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


    return {getRegions, getInterviews, getOpinions};
}