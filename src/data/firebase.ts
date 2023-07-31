import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_MEASUREMENTID,
  VITE_APPID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: `${VITE_API_KEY}`,
  authDomain: `${VITE_AUTH_DOMAIN}`,
  projectId: `${VITE_PROJECTID}`,
  storageBucket: `${VITE_STORAGEBUCKET}`,
  messagingSenderId: `${VITE_MESSAGINGSENDERID}`,
  appId: `${VITE_APPID}`,
  measurementId: `${VITE_MEASUREMENTID}`,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();
