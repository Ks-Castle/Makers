import flex from "@/assets/styles/flex";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import Button from "@/context/Button";
import Input from "@/context/Input";
import { db, storage } from "@/data/firebase";
import { FONT_SIZE } from "@/data/str";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components";

const UploadTier_New = () => {
  const [gameName, setGameName] = useState<string>("");
  const [gameTitle, setGameTitle] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [downloadCount, setDownloadCount] = useState<number>(0);
  const [enterCount, setEnterCount] = useState<number>(0);
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
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setFile2(fileList[0]);
    }
  };

  const onClickHandler = () => {
    console.log("게임 데이터 및 파일 전송:", {
      gameName,
      gameTitle,
      id,
      downloadCount,
      enterCount,
      file1,
      file2,
    });
  };

  return (
    <Layout>
      <Head link="Tier Uploader" desc="Upload Tier Cards by Admin" />
      <Box>
        <Input
          onChange={(event) => handleInputChange(event, setId)}
          placeholder="id - gameName-gameTitle-uuid"
          padding="1"
          paddingType="left"
          width="250px"
          borderType="all"
          border="1px solid black"
          borderFocus
        />
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
        <Input
          onChange={(event) => handleInputChange(event, setDownloadCount)}
          placeholder="downloadCount - 0"
          padding="1"
          paddingType="left"
          width="250px"
          borderType="all"
          border="1px solid black"
          borderFocus
        />
        <Input
          onChange={(event) => handleInputChange(event, setEnterCount)}
          placeholder="enterCount - 0"
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
          id="fileUpload"
          style={{ display: "none" }}
          onChange={handleFile1Change}
        />
        <label htmlFor="fileUpload" className="file-uploader">
          Uploade Title Image
        </label>
        <input
          type="file"
          id="fileUpload"
          style={{ display: "none" }}
          onChange={handleFile2Change}
        />
        <Button width="250" height="50" onClick={onClickHandler}>
          보내기
        </Button>
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
    font-size: 1.6rem;
    border: 1px solid var(--dark-100);
    max-width: 250px;
    width: 100%;
    height: 50px;
    background-color: var(--dark-000);
    color: var(--dark-100);
    border-radius: 1rem;
    padding-left: 1rem;
    font-size: ${FONT_SIZE[12]};
  }
`;
