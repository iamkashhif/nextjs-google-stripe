import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDMshXDB0XMmWw5AWMGALhlNfFlkN2tql0",
  authDomain: "notification-313.firebaseapp.com",
  projectId: "notification-313",
  storageBucket: "notification-313.appspot.com",
  messagingSenderId: "413685101546",
  appId: "1:413685101546:web:98cf0921ff884b838af893",
  measurementId: "G-HYH1Z6WTLZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
