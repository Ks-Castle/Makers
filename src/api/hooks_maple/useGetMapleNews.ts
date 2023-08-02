import { useQuery } from "react-query";
import { mapleAPI } from "../modules/maple";
import { KEY } from "@/data/config/keys";
import { CACHE } from "@/data/str";

const useGetMapleNews = () => {
  const fetcher = async () => {
    try {
      const { data } = await mapleAPI.getMapleNews();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return useQuery(KEY.MAPLE_NEWS, fetcher, {
    staleTime: CACHE.STALENORMAL,
    cacheTime: CACHE.CACHENORMAL,
  });
};

export default useGetMapleNews;
