import useApi from '@/use/api';

const {get$} = useApi();
export default function useApiOpinion() {

    const getOpinions = async () => {
        const fetchedData = await get$({url: 'api/opinions'});
        if (!fetchedData.isError) {

            const formatted = fetchedData.data.map((data) => {
                return {
                    id: data.id,
                    image: data.path_to_image,
                    date: data.publication_date,
                    title: data.title,
                    text: data.content,
                    link: '/opinion/'+data.id,
                    source: data.source,
                    subject: data.regions_and_peoples.fio_or_name_region,
                    created: data.status.created_at,
                    updated: data.status.updated_at,
                }
            });
            return formatted;
        }
        return null;
    };

    const getOpinionById = async (id) => {
        const fetchedData = await get$({url: `api/opinion/${id}`});
        if (!fetchedData.isError) {
                return {
                    id: fetchedData.data.id,
                    image: fetchedData.data.path_to_image,
                    title: fetchedData.data.title,
                    text: fetchedData.data.content,
                    person: {
                        id: fetchedData.data.regions_and_peoples.id,
                        title: fetchedData.data.regions_and_peoples.fio_or_name_region,
                        text: fetchedData.data.regions_and_peoples.content,
                        image: fetchedData.data.regions_and_peoples.path_to_image,
                        type: fetchedData.data.regions_and_peoples.type
                    }
                }
        }
        return null;
    };

    const getOpinionTopFour = async () => {
        const fetchedData = await get$({url: 'api/opinionsTopFour'});
        if (!fetchedData.isError) {
            const formatted = fetchedData.data.map((data) => {
                return {
                    id: data.id,
                    image: data.path_to_image,
                    title: data.title,
                    text: data.content,
                    link: '/opinion/'+data.id
                }
            });
            return formatted;
        }
        return null;
    };


    return {getOpinions, getOpinionById, getOpinionTopFour};
}