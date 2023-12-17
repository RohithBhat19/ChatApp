
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWK6UsDl06waxt0YSvzRz_6GxZi7DzvOc",
  authDomain: "rgb-chatapp.firebaseapp.com",
  projectId: "rgb-chatapp",
  storageBucket: "rgb-chatapp.appspot.com",
  messagingSenderId: "210105533148",
  appId: "1:210105533148:web:653da365b79046aabd2a19"
};


export const app = initializeApp(firebaseConfig);