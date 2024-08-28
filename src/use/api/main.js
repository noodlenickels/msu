import useApi from '@/use/api';

const {get$} = useApi();
export default function useApiMain() {

    const getNews = async () => {
        const fetchedData = await get$({url: 'api/news'});
        if (!fetchedData.isError) {
            return fetchedData.data;
        }
        return null;
    };

    const getGrandNews = async () => {
        const fetchedData = await get$({url: 'api/grandNews'});
        if (!fetchedData.isError) {
            const formatted = fetchedData.data.map((data) => {
                return {
                    id: data.news.id,
                    image: data.news.path_to_image,
                    title: data.news.title,
                    text: data.news.content
                }
            });
            return formatted;
        }
        return null;
    };

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

    const getPaginatedNews = async (page) => {
        const fetchedData = await get$({url: 'api/grandNews'});
        if (!fetchedData.isError) {
            return fetchedData.data;
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

    const getRandomSection = async () => {
        const fetchedData = await get$({url: 'api/randomSections'});
        if (!fetchedData.isError) {
            const formatted = {
                'opinion': {
                    id: fetchedData.data.opinion.id,
                    image: fetchedData.data.opinion.path_to_image,
                    caption: fetchedData.data.opinion.title,
                    text: fetchedData.data.opinion.content
                },
                'people': {
                    id: fetchedData.data.people.id,
                    image: fetchedData.data.people.path_to_image,
                    caption: fetchedData.data.people.fio,
                    text: fetchedData.data.people.content
                },
                'interview': {
                    id: fetchedData.data.interview.id,
                    image: fetchedData.data.interview.path_to_image,
                    caption: fetchedData.data.interview.title,
                    text: fetchedData.data.interview.content
                },
                'region': {
                    id: fetchedData.data.region.id,
                    image: fetchedData.data.region.path_to_image,
                    caption: fetchedData.data.region.name_region,
                    text: fetchedData.data.region.content
                },
            }
            return formatted;
        }
        return null;
    };


    return {getNews, getGrandNews, getPaginatedNews, getRegions, getInterviews, getOpinions, getRandomSection};
}