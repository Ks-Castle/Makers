import { storage } from "@/data/firebase";
import { ref, getDownloadURL } from "firebase/storage";

interface ImageProps {
  path: string;
}

export const getImage = async ({ path }: ImageProps): Promise<string> => {
  const imageRef = ref(storage, path);
  try {
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to download image");
  }
};
