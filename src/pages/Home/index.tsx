import Layout from "@/components/UI/Layout";
import styled from "styled-components";

import Head from "@/components/UI/Head";
import { IMAGES, RESOLUTION } from "@/data/str";
import { getImage } from "@/utils/getImage";
import { useEffect, useState } from "react";
import { HoverBox } from "@/context/Index.js";
import { links, titles } from "@/data/homeMenu";

const Home = () => {
  const [imgs, setImgs] = useState<string[]>([]);

  useEffect(() => {
    async function fetchImage() {
      try {
        const promisedImages = await Promise.all([
          getImage({ path: IMAGES.HOME_TIER }),
          getImage({ path: IMAGES.HOME_MAPLE_CRYSTAL }),
          getImage({ path: IMAGES.HOME_MAPLE_NEWS }),
          getImage({ path: IMAGES.HOME_UNDER }),
          getImage({ path: IMAGES.HOME_UNDER }),
          getImage({ path: IMAGES.HOME_UNDER }),
          getImage({ path: IMAGES.HOME_UNDER }),
          getImage({ path: IMAGES.HOME_UNDER }),
          getImage({ path: IMAGES.HOME_UNDER }),
          getImage({ path: IMAGES.HOME_UNDER }),
          getImage({ path: IMAGES.HOME_UNDER }),
          getImage({ path: IMAGES.HOME_UNDER }),
          getImage({ path: IMAGES.HOME_UNDER }),
          getImage({ path: IMAGES.HOME_UNDER }),
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
          return (
            <HoverBox
              img={img}
              link={links[i]}
              key={"home" + i}
              type="b"
              width={`200`}
              height={`200`}
              title={titles[i]}
            />
          );
        })}
      </Wrapper>
    </Layout>
  );
};

export default Home;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-gap: 1rem;
  height: 100%;
  @media (max-width: ${RESOLUTION.PC}px) {
    grid-template-columns: repeat(3, 150px);
    .buttonContext {
      height: 150px;
    }
  }
  @media (max-width: ${RESOLUTION.TABLET}px) {
    grid-template-columns: repeat(2, 150px);
    .buttonContext {
      height: 150px;
    }
  }
  @media (max-width: ${RESOLUTION.MOBILE}px) {
    grid-template-columns: repeat(2, 100px);
    .buttonContext {
      height: 100px;
    }
  }
`;
