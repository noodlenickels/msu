import axios from 'axios';

export default function useApi() {
  const axiosConfig = {
    baseURL: 'https://app.msu-russia.ru/',
    timeout: 1000,
    responseType: 'json',
    responseEncoding: 'utf8',
  };

  const config = (userCfg) => {
    return {
      ...axiosConfig,
      ...userCfg,
    };
  };

  const axiosInstance = (userCfg = {}) => axios.create(config(userCfg));

  const apiRequest = async ({ method, url, data, params = {}, token = null, config = {} }) => {
    const axiosCfg = {
      ...axiosConfig,
      url,
      method,
      data,
      params,
      timeout: 10000,
      headers: {
        post: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
      ...config,
    };
    if ( token ) axiosCfg.headers.Authorization = 'Bearer ' + token;

    try {
      return await axios.request(axiosCfg);
    }
    catch (error) {
      return error;
    }
  };

  const get$ = async ({ url, params = {}, token = null, config = {}, onSuccess, onError }) => {
    const response = await apiRequest({ method: 'get', url, token, params, config });
    return parseResponse(response, onSuccess, onError);
  };

  const post$ = async ({ url, data, token = null, convertToFormData = true, config = {}, onSuccess, onError }) => {
    const response = await apiRequest({
      method: 'post',
      url,
      data: convertToFormData ? toFormData(data) : data,
      token,
      config,
    });
    return parseResponse(response, onSuccess, onError);
  };

  const put$ = async ({
                        url,
                        params,
                        data,
                        token = null,
                        convertToFormData = true,
                        config = {},
                        onSuccess,
                        onError,
                      }) => {
    data.append('_method', 'PUT');
    const response = await apiRequest({
      method: 'post',
      url,
      data: convertToFormData ? toFormData(data) : data,
      params,
      token,
      config,
    });
    return parseResponse(response, onSuccess, onError);
  };

  const patch$ = ({ url, params, data, token = null, convertToFormData = true, config = {}, onSuccess, onError }) => {
    data.append('_method', 'PATCH');
    const response = apiRequest({
      method: 'post',
      url,
      data: convertToFormData ? toFormData(data) : data,
      params,
      token,
      config,
    });
    return parseResponse(response, onSuccess, onError);
  };

  const delete$ = ({ url, params, token = null, config = {}, onSuccess, onError }) => {
    const response = apiRequest({ method: 'delete', url, params, token, config });
    return parseResponse(response, onSuccess, onError);
  };

  const toFormData = (data) => {
    if ( data instanceof FormData ) {
      return data;
    } else {
      const fd = new FormData();
      Object.keys(data).forEach(key => fd.set(key, data[key]));
      return fd;
    }
  };

  const parseResponse = (response, onSuccess, onError) => {
    if ( response?.status === 200 ) {
      if ( onSuccess ) {
        onSuccess(response.data);
      }
      return {
        data: response.data,
        message: null,
        isError: false,
      };
    } else {
      const errorText = response?.data?.data?.message || 'Неизвестная ошибка сервера';
      if ( onError ) {
        onError(errorText);
      }
      return {
        data: null,
        message: errorText,
        isError: true,
      };
    }

  };

  return { axios$: axiosInstance, request$: apiRequest, get$, post$, put$, patch$, delete$ };
}
