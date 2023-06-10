import flex from "@/assets/styles/flex";
import Head from "@/components/UI/Head";
import Layout from "@/components/UI/Layout";
import Button from "@/context/Button";
import Input from "@/context/Input";
import { TierListDTO } from "@/data/DTO";
import { db, storage } from "@/data/firebase";
import { FONT_SIZE } from "@/data/str";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components";
import { v1 as uuid } from "uuid";

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

  const onClickHandler = async () => {
    const dbCollection = collection(db, `tierLists`);
    const currentDate = new Date();
    currentDate.setUTCHours(currentDate.getUTCHours() - 4);
    const data: TierListDTO = {
      id: `${gameName}-${gameTitle}-${uuid()}`,
      downloadCount: 0,
      enterCount: 0,
      gameTitle: gameTitle,
      title: gameName,
      imgs: [],
      titleImg: "",
      CreatedAt: currentDate,
    };

    if (file1 && file2) {
      for (let i = 0; i < file1.length; i++) {
        const fileArr = file1[i];
        const storageRef = ref(storage, `tierImg/${gameName}/${file1[i].name}`);
        try {
          await uploadBytes(storageRef, fileArr);
          const fileUrl = await getDownloadURL(storageRef);
          data.imgs.push(fileUrl);
        } catch (error) {
          console.error("파일1 업로드 오류:", error);
        }
      }
      const storageRef = ref(storage, `tierImg/${gameName}/${file2.name}`);
      try {
        await uploadBytes(storageRef, file2);
        const fileUrl = await getDownloadURL(storageRef);
        data.titleImg = fileUrl;
        await setDoc(
          doc(dbCollection, `${gameName}-${gameTitle}-${uuid()}`),
          data
        );
      } catch (error) {
        console.error("파일2 업로드 오류:", error);
      }
      alert("done");
    } else {
      console.log("file missing");
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
