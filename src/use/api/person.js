import useApi from '@/use/api';

const {get$} = useApi();
export default function useApiPeople() {

    const getNews = async () => {
        const fetchedData = await get$({url: 'api/news'});
        if (!fetchedData.isError) {
            return fetchedData.data;
        }
        return null;
    };

    const getPeople = async () => {
        const fetchedData = await get$({url: 'api/peoples'});
        if (!fetchedData.isError) {
            const formatted = fetchedData.data.map((data) => {
                return {
                    id: data.id,
                    image: data.path_to_image,
                    title: data.fio,
                    text: data.content,
                    role: data.position
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


    return {getPeople};
}