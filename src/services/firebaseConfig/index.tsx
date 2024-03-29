import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_APIKEY,
  authDomain: process.env.EXPO_PUBLIC_API_AUTHDOMAIN,
  databaseURL: process.env.EXPO_PUBLIC_API_DATABASEURL,
  projectId: process.env.EXPO_PUBLIC_API_PROJECTID,
  storageBucket: process.env.EXPO_PUBLIC_API_STORAGEBUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_API_MESSAGINGSENDERID,
  appId: process.env.EXPO_PUBLIC_API_APPID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
