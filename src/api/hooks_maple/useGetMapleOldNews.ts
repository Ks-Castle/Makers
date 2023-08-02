import { useQuery } from "react-query";
import { mapleAPI } from "../modules/maple";
import { KEY } from "@/data/config/keys";
import { CACHE } from "@/data/str";

const useGetMapleOldNews = () => {
  const fetcher = async () => {
    try {
      const { data } = await mapleAPI.getMapleOldNews();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return useQuery(KEY.MAPLE_OLD_NEWS, fetcher, {
    staleTime: CACHE.STALENORMAL,
    cacheTime: CACHE.CACHENORMAL,
  });
};

export default useGetMapleOldNews;
