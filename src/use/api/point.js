import useApi from '@/use/api';

const {get$} = useApi();
export default function useApiPoint() {

    const getPointOfView = async () => {
        const fetchedData = await get$({url: 'api/pointViews'});
        if (!fetchedData.isError) {
            const formatted = fetchedData.data.map((data) => {
                return {
                    id: data.id,
                    image: data.regions_and_peoples.path_to_image,
                    title: data.title,
                    text: data.content,
                    source: data.source,
                    link: '/point_of_view/'+data.id,
                    subject: data.regions_and_peoples.fio_or_name_region,
                    created: data.status.created_at,
                    updated: data.status.updated_at,
                }
            });
            return formatted;
        }
        return null;
    };

    const getPointOfViewById = async (id) => {
        const fetchedData = await get$({url: `api/pointView/${id}`});
        if (!fetchedData.isError) {
            const formatted = fetchedData.data.map((data) => {
                return {
                    id: data.id,
                    image: data.regions_and_peoples.path_to_image,
                    title: data.title,
                    text: data.content,
                    person: {
                        id: data.regions_and_peoples.id,
                        title: data.regions_and_peoples.fio_or_name_region,
                        text: data.regions_and_peoples.content,
                        image: data.regions_and_peoples.path_to_image,
                        type: data.regions_and_peoples.type

                    }
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
                    text: data.content,
                    link: '/point_of_view/'+data.id
                }
            });
            return formatted;
        }
        return null;
    };


    return {getPointOfViewTopFour, getPointOfView, getPointOfViewById};
}