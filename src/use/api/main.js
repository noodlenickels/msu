import axios from 'axios';
import useApi from '@/use/api';

const {get$} = useApi('photo');
export default function useApiMain() {

    const getPhotoUrl = async (link) => {
        const fetchedData = await get$({url: 'resources', token: 'y0_AgAAAAB4PRfUAAxZXgAAAAEPY4JYAAAg089K8jZK0bN8Uu2xUYfC_w1MdA', params: {path: `/root_Files${link}`}});
        if (!fetchedData.isError) {
            return fetchedData.data.file;
        }
        return null;
    };

    const getPhoto = async (url) => {
        axios.get(url)
          .then(function (response) {
              // handle success
              console.log(response.data)
              return response.data;
          })
          .catch(function (error) {
              // handle error
              console.log(error);
          })
          .finally(function () {
              // always executed
          });

    };

    return {getPhoto, getPhotoUrl};
}