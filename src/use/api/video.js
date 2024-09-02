import useApi from '@/use/api';

const {get$} = useApi();
export default function useApiVideo() {

  const getVideos = async () => {
    const fetchedData = await get$({url: 'api/videos'});
    if (!fetchedData.isError) {
      const formatted = fetchedData.data.map((data) => {
        return {
          id: data.id,
          image: data.path_to_image,
          title: data.title,
          text: data.content,
          link: '/video/'+data.id
        }
      });
      return formatted;
    }
    return null;
  };

  const getVideoById = async (id) => {
    const fetchedData = await get$({url: `api/video/${id}`});
    if (!fetchedData.isError) {
      const formatted = fetchedData.data.map((data) => {
        return {
          id: data.id,
          image: data.path_to_image,
          title: data.title,
          text: data.content,
          link: '/video/'+data.id
        }
      });
      return formatted;
    }
    return null;
  };

  const getVideoTopFour = async () => {
    const fetchedData = await get$({url: 'api/videosTopFour'});
    if (!fetchedData.isError) {
      const formatted = fetchedData.data.map((data) => {
        return {
          id: data.id,
          image: data.path_to_image,
          title: data.title,
          text: data.content,
          link: '/video/'+data.id
        }
      });
      return formatted;
    }
    return null;
  };


  return {getVideos, getVideoById, getVideoTopFour};
}