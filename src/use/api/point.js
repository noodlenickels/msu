import useApi from '@/use/api';

const {get$} = useApi();
export default function useApiPoint() {

    const getNews = async () => {
        const fetchedData = await get$({url: 'api/news'});
        if (!fetchedData.isError) {
            return fetchedData.data;
        }
        return null;
    };

    const getPointOfView = async () => {
        const fetchedData = await get$({url: 'api/pointView'});
        if (!fetchedData.isError) {
            const formatted = fetchedData.data.map((data) => {
                return {
                    id: data.news.id,
                    image: data.regions_and_peoples.path_to_image,
                    title: data.title,
                    text: data.content
                }
            });
            return formatted;
        }
        return null;
    };

    const getPointOfViewTopFour = async () => {
        const fetchedData = await get$({url: 'api/pointViewsTopFour'});
        if (!fetchedData.isError) {
            const formatted = fetchedData.data.map((data) => {
                return {
                    id: data.id,
                    image: data.regions_and_peoples.path_to_image,
                    title: data.title,
                    text: data.content
                }
            });
            return formatted;
        }
        return null;
    };


    return {getPointOfViewTopFour, getPointOfView};
}