import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:4000/" });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = "Bearer token";

  const onSuccess = (res) => res;
  const onError = (error) => {
    // optionally catch errors and add additional logging here
    // si puo' anche reindirizzare alla pagina 401
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
