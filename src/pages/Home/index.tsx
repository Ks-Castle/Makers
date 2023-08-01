import flex from "@/assets/styles/flex";
import HomeMenu from "@/pages/Home/Components/HomeMenu";
import Layout from "@/components/UI/Layout";
import styled from "styled-components";
import menu from "@/data/navigation/menu.json";
import main from "@/data/navigation/main.json";
import Head from "@/components/UI/Head";
import { IMAGES, RESOLUTION } from "@/data/str";
import { getImage } from "@/utils/getImage";
import { useEffect, useState } from "react";

const links: string[] = [
  menu.TierList.path,
  menu.MapleCrystalCalculator.path,
  main.Home.path,
  main.Home.path,
];

const Home = () => {
  const [imgs, setImgs] = useState<string[]>([]);

  useEffect(() => {
    async function fetchImage() {
      try {
        const promisedImages = await Promise.all([
          getImage({ path: IMAGES.HOME_TIER }),
          getImage({ path: IMAGES.HOME_MAPLE }),
          getImage({ path: IMAGES.HOME_UNDER }),
          getImage({ path: IMAGES.HOME_UNDER }),
        ]);
        setImgs(promisedImages);
      } catch (error) {
        console.error(error);
      }
    }
    fetchImage();
  }, []);

  return (
    <Layout>
      <Head
        link="Home"
        desc="Welcome to Makers. Feel Free to Generate Your Own Tier Table or Stat Cards."
      />
      <Wrapper>
        {imgs.map((img: string, i: number) => {
          return <HomeMenu url={img} link={links[i]} key={"home" + i} />;
        })}
      </Wrapper>
    </Layout>
  );
};

export default Home;

const Wrapper = styled.div`
  ${flex({})}
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-gap: 1rem;
  @media (max-width: ${RESOLUTION.TABLET}px) {
    grid-template-columns: repeat(2, 150px);
  }
  @media (max-width: ${RESOLUTION.MOBILE}px) {
    grid-template-columns: repeat(2, 100px);
  }
`;
