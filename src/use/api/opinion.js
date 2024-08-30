import useApi from '@/use/api';

const {get$} = useApi();
export default function useApiOption() {

    const getOptions = async () => {
        const fetchedData = await get$({url: 'api/options'});
        if (!fetchedData.isError) {
            const formatted = fetchedData.data.map((data) => {
                return {
                    id: data.id,
                    image: data.path_to_image,
                    title: data.title,
                    text: data.content,
                    link: '/option/'+data.id
                }
            });
            return formatted;
        }
        return null;
    };

    const getOptionById = async (id) => {
        const fetchedData = await get$({url: `api/option/${id}`});
        if (!fetchedData.isError) {
            const formatted = fetchedData.data.map((data) => {
                return {
                    id: data.id,
                    image: data.path_to_image,
                    title: data.title,
                    text: data.content,
                    link: '/option/'+data.id
                }
            });
            return formatted;
        }
        return null;
    };

    const getOptionTopFour = async () => {
        const fetchedData = await get$({url: 'api/opinionsTopFour'});
        if (!fetchedData.isError) {
            const formatted = fetchedData.data.map((data) => {
                return {
                    id: data.id,
                    image: data.path_to_image,
                    title: data.title,
                    text: data.content,
                    link: '/option/'+data.id
                }
            });
            return formatted;
        }
        return null;
    };


    return {getOptions, getOptionById, getOptionTopFour};
}