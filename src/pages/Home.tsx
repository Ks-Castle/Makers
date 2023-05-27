import flex from "@/assets/styles/flex";
import HomeMenu from "@/components/UI/HomeMenu";
import Layout from "@/components/UI/Layout";
import styled from "styled-components";
import { IMAGES, RESOLUTION } from "@/data/str";
import { getImage } from "@/utils/getImage";
import { useEffect, useState } from "react";
import navigation from "@/data/navigation.json";

const Home = () => {
  const [imgs, setImgs] = useState<string[]>([]);
  const links: string[] = [
    navigation.TierList.path,
    navigation.StatCardGenerate.path,
    navigation.Gallery.path,
    navigation.Home.path,
  ];
  useEffect(() => {
    async function fetchImage() {
      try {
        const promisedImages = await Promise.all([
          getImage({ path: IMAGES.HOME_TIER }),
          getImage({ path: IMAGES.HOME_STAT }),
          getImage({ path: IMAGES.HOME_GALLERY }),
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
  width: 100%;
  @media (max-width: ${RESOLUTION.TABLET}px) {
    grid-template-columns: repeat(2, 150px);
  }
  @media (max-width: ${RESOLUTION.MOBILE}px) {
    grid-template-columns: repeat(2, 100px);
  }
`;
