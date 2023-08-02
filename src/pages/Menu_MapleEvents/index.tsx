import useGetMapleNews from "@/api/hooks_maple/useGetMapleNews.js";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";

const MapleEvents = () => {
  const mapleNewsAPI = useGetMapleNews();
  console.log(mapleNewsAPI);
  return (
    <Layout>
      <Head link="MapleEvents" desc="Current and Past Events of MapleStory" />
    </Layout>
  );
};

export default MapleEvents;
