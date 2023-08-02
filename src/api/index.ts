import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import * as ENV from "@/data/config/envImport";

const api = axios.create({
  baseURL: ENV.VITE_GIT_SERVER,
});

const currentURL = window.location.href;
const urlObject = new URL(currentURL);
const hostAndPort = urlObject.origin;

const onRequest = (
  data: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const { method, url, headers } = data;
  if (hostAndPort === ENV.VITE_LOCAL_SERVER) {
    console.log(`🛫 [API - REQUEST] ${method?.toUpperCase()} ${url}`);
  }
  //   const token = cookie.get("Authorization");
  //   headers.Authorization = token;
  return data;
};

const onResponse = (res: AxiosResponse): AxiosResponse => {
  const { method, url } = res.config;
  if (hostAndPort === ENV.VITE_LOCAL_SERVER) {
    console.log(
      `[API - RESPONSE] ${method?.toUpperCase()} ${url} | ${res.status}`
    );
  }
  return res;
};

const onError = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { method, url } = error.config as InternalAxiosRequestConfig;
    if (error.response) {
      const { statusCode, message } = error.response.data;
      if (hostAndPort === ENV.VITE_LOCAL_SERVER) {
        console.log(
          `[API - ERROR] ${method?.toUpperCase()} ${url} | ${statusCode} : ${message}`
        );
      }
    }
  } else {
    if (hostAndPort === ENV.VITE_LOCAL_SERVER) {
      console.log(`[API] | Error ${error.message}`);
    }
  }
  return Promise.reject(error);
};

api.interceptors.request.use((data) => onRequest(data));

api.interceptors.response.use(onResponse, onError);

export default api;
