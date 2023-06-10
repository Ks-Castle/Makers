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
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile2(file);
    }
  };

  const onClickHandler = async () => {
    if (file1 && file2) {
      for (let i = 0; i < file1.length; i++) {
        const fileArr = file1[i];
        const storageRef = ref(storage, `tierImg/${gameName}/${file1[i].name}`);
        try {
          await uploadBytes(storageRef, fileArr);
          const fileUrl = await getDownloadURL(storageRef);
          console.log(fileUrl);
        } catch (error) {
          console.error("파일1 업로드 오류:", error);
        }
      }
      const storageRef = ref(storage, `tierImg/${gameName}/${file2.name}`);
      try {
        await uploadBytes(storageRef, file2);
        const fileUrl = await getDownloadURL(storageRef);
        console.log(fileUrl);
      } catch (error) {
        console.error("파일2 업로드 오류:", error);
      }
    } else {
      console.log("file missing");
    }
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
