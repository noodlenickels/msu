import useApi from '@/use/api';

const {get$} = useApi();
export default function useApiPeople() {

    const getPeopleById = async (id) => {
        const fetchedData = await get$({url: `api/people/${id}`});
        if (!fetchedData.isError) {
            return {
                id: fetchedData.data.id,
                image: fetchedData.data.path_to_image,
                title: fetchedData.data.fio,
                text: fetchedData.data.content,
                role: fetchedData.data.position
            }        }
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
                    role: data.position,
                    link: '/person/'+data.id
                }
            });
            return formatted;
        }
        return null;
    };

    return {getPeople, getPeopleById};
}