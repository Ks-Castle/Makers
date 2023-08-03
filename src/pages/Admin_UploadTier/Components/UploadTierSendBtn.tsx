import { Button } from "@/context";
import { db, storage } from "@/data/config/firebase";
import { TierListDTO } from "@/pages/Menu_Tier/DTO/index";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { collection, setDoc, doc } from "firebase/firestore";
import { v1 as uuid } from "uuid";

interface IPropsType {
  gameName: string;
  gameTitle: string;
  file1: File[] | null;
  file2: File | null;
}

const UploadTierSendBtn = (props: IPropsType) => {
  const onClickHandler = async () => {
    const dbCollection = collection(db, `tierLists`);
    const currentDate = new Date();
    currentDate.setUTCHours(currentDate.getUTCHours() - 4);
    const data: TierListDTO = {
      id: `${props.gameName}-${props.gameTitle}-${uuid()}`,
      downloadCount: 0,
      enterCount: 0,
      gameTitle: props.gameTitle,
      title: props.gameName,
      imgs: [],
      titleImg: "",
      CreatedAt: currentDate,
    };

    if (props.file1 && props.file2) {
      for (let i = 0; i < props.file1.length; i++) {
        const fileArr = props.file1[i];
        const storageRef = ref(
          storage,
          `tierImg/${props.gameName}/${props.file1[i].name}`
        );
        try {
          await uploadBytes(storageRef, fileArr);
          const fileUrl = await getDownloadURL(storageRef);
          data.imgs.push(fileUrl);
        } catch (error) {
          console.error("파일1 업로드 오류:", error);
        }
      }
      const storageRef = ref(
        storage,
        `tierImg/${props.gameName}/${props.file2.name}`
      );
      try {
        await uploadBytes(storageRef, props.file2);
        const fileUrl = await getDownloadURL(storageRef);
        data.titleImg = fileUrl;
        await setDoc(
          doc(dbCollection, `${props.gameName}-${props.gameTitle}-${uuid()}`),
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
    <Button width="250" height="50" onClick={onClickHandler}>
      보내기
    </Button>
  );
};

export default UploadTierSendBtn;
