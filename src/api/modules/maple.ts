import api from "../index";
import * as ENV from "@/data/config/envImport";

export const mapleAPI = {
  getMapleNews: () => api.get(`${ENV.VITE_MAPLE_NEWS_ENDPOINT}`),
  getMapleOldNews: () => api.get(`${ENV.VITE_MAPLE_OLD_NEWS_ENDPOINT}`),
};
