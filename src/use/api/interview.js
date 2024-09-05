import useApi from '@/use/api';

const {get$} = useApi();
export default function useApiInterview() {

  const getInterviews = async () => {
    const fetchedData = await get$({url: 'api/interviews'});
    if (!fetchedData.isError) {
      const formatted = fetchedData.data.map((data) => {
        return {
          id: data.id,
          image: data.path_to_image,
          title: data.title,
          text: data.content,
          link: '/interview/'+data.id,
          subject: data.regions_and_peoples.fio_or_name_region,
          created: data.status.created_at,
          updated: data.status.updated_at,
        }
      });
      return formatted;
    }
    return null;
  };

  const getInterviewById = async (id) => {
    const fetchedData = await get$({url: `api/interview/${id}`});
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
            image: fetchedData.data.regions_and_peoples.path_to_image
          }
        }
    }
    return null;
  };

  const getInterviewTopFour = async () => {
    const fetchedData = await get$({url: 'api/interviewsTopFour'});
    if (!fetchedData.isError) {
      const formatted = fetchedData.data.map((data) => {
        return {
          id: data.id,
          image: data.path_to_image,
          title: data.title,
          text: data.content,
          link: '/interview/'+data.id
        }
      });
      return formatted;
    }
    return null;
  };


  return {getInterviews, getInterviewById, getInterviewTopFour};
}