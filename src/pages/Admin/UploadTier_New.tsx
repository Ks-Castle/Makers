import { flex, font } from "@/assets/styles/index.js";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import { Input } from "@/context/Index";

import { useState } from "react";
import styled from "styled-components";
import UploadTierSendBtn from "./Components/UploadTierSendBtn.js";

const UploadTier_New = () => {
  const [gameName, setGameName] = useState<string>("");
  const [gameTitle, setGameTitle] = useState<string>("");
  const [file1, setFile1] = useState<File[] | null>(null);
  const [file2, setFile2] = useState<File | null>(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<any>>
  ) => {
    setState(event.target.value);
  };

  const handleFile1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const selectedFiles = Array.from(files);
      setFile1(selectedFiles);
    }
  };

  const handleFile2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile2(file);
    }
  };

  return (
    <Layout>
      <Head link="Tier Uploader" desc="Upload Tier Cards by Admin" />
      <Box>
        <Input
          onChange={(event) => handleInputChange(event, setGameName)}
          placeholder="Game Name"
          padding="1"
          paddingType="left"
          width="250px"
          borderType="all"
          border="1px solid black"
          borderFocus
        />
        <Input
          onChange={(event) => handleInputChange(event, setGameTitle)}
          placeholder="Game Title"
          padding="1"
          paddingType="left"
          width="250px"
          borderType="all"
          border="1px solid black"
          borderFocus
        />
        <label htmlFor="fileUpload" className="file-uploader">
          Upload Images
        </label>
        <input
          multiple
          type="file"
          accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp"
          id="fileUpload"
          style={{ display: "none" }}
          onChange={handleFile1Change}
        />
        <label htmlFor="fileUpload2" className="file-uploader">
          Uploade Title Image
        </label>
        <input
          type="file"
          accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp"
          id="fileUpload2"
          style={{ display: "none" }}
          onChange={handleFile2Change}
        />
        <UploadTierSendBtn
          gameName={gameName}
          gameTitle={gameTitle}
          file1={file1}
          file2={file2}
        />
      </Box>
    </Layout>
  );
};

export default UploadTier_New;

const Box = styled.div`
  ${flex({ direction: "column", gap: "1rem" })};
  width: 600px;
  height: 100%;
  overflow: scroll;
  input {
    width: 300px;
    height: 50px;
    font-size: 2rem;
    ::placeholder {
      font-size: 1.1rem;
    }
  }
  .file-uploader {
    ${flex({ justify: "flex-start" })};
    ${font({})}
    border: 1px solid var(--dark-100);
    max-width: 250px;
    width: 100%;
    height: 50px;
    background-color: var(--dark-000);
    color: var(--dark-100);
    border-radius: 1rem;
    padding-left: 1rem;
  }
`;
