import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import { TierListDTO } from "@/data/DTO";
import { tierListArrayState } from "@/data/recoil";
import { useRecoilValue } from "recoil";

const TierMaking = () => {
  const data = useRecoilValue(tierListArrayState);
  return (
    <Layout>
      <Head link="Tier Maker" />
      {data.map((v: TierListDTO, i: number) => {
        return <div>{v.imgs[0]}</div>;
      })}
    </Layout>
  );
};

export default TierMaking;
