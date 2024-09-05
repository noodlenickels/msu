import useApi from '@/use/api';

const {get$} = useApi();
export default function useApiNews() {

  const getNews = async (page, regions, search) => {
    const fetchedData = await get$({
      url: 'api/newsPaginateAndSearch',
      params: {page: page, selected_regions: regions, searchContent: search}
    });

    if (!fetchedData.isError) {
      const formatted = {data: []};
      fetchedData.data.data.map((data) => {
        formatted.data.push({
            id: data.id,
            date: data.publication_date.slice(0, 10),
            image: data.path_to_image_or_video,
            title: data.title,
            text: data.content,
            source: data.source,
            link: '/news/'+data.id,
            subject: data.regions_and_peoples.fio_or_name_region,
            created: data.status.created_at,
            updated: data.status.updated_at,
            region: data.regions_and_peoples.position_or_type_region === 'Республика' || data.regions_and_peoples.position_or_type_region === 'Город федерального значения'? data.regions_and_peoples.position_or_type_region + ' ' + data.regions_and_peoples.fio_or_name_region : data.regions_and_peoples.fio_or_name_region + ' ' + data.regions_and_peoples.position_or_type_region
        })
      });
      formatted.pages = fetchedData.data.last_page;
      return formatted;
    }
    return null;
  };

  const getGrandNews = async () => {
    const fetchedData = await get$({url: 'api/grandNews'});
    if (!fetchedData.isError) {
      const formatted = fetchedData.data.map((data) => {
        return {
          id: data.news.id,
          image: data.news.path_to_image_or_video,
          title: data.news.title,
          text: data.news.content,
          link: '/news/'+data.news.id
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

  const getPagination = async () => {
    const fetchedData = await get$({url: 'api/newsPaginate'});
    if (!fetchedData.isError) {
      return {
        per_page: fetchedData.data.per_page,
        total_news: fetchedData.data.total
      };
    }
    return null;
  };

  const getNewsById = async (id) => {
    const fetchedData = await get$({url: `api/newsOne/${id}`});
    if (!fetchedData.isError) {
      return {
        id: fetchedData.data.id,
        image: fetchedData.data.path_to_image_or_video,
        title: fetchedData.data.title,
        text: fetchedData.data.content
      };
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
          text: fetchedData.data.opinion.content,
          link: '/opinion/' + fetchedData.data.opinion.id
        },
        'people': {
          id: fetchedData.data.people.id,
          image: fetchedData.data.people.path_to_image,
          caption: fetchedData.data.people.fio,
          text: fetchedData.data.people.content,
          link: '/person/' + fetchedData.data.people.id
        },
        'interview': {
          id: fetchedData.data.interview.id,
          image: fetchedData.data.interview.path_to_image,
          caption: fetchedData.data.interview.title,
          text: fetchedData.data.interview.content,
          link: '/interview/' + fetchedData.data.interview.id
        },
        'region': {
          id: fetchedData.data.region.id,
          image: fetchedData.data.region.path_to_image,
          caption: fetchedData.data.region.name_region,
          text: fetchedData.data.region.content,
          link: '/region/' + fetchedData.data.region.id

        },
      }
      return formatted;
    }
    return null;
  };


  return {getNews, getGrandNews, getPaginatedNews, getRandomSection, getPagination, getNewsById};
}