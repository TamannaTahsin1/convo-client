import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByWjyDzf2WXlAyOQb5tnj_P9m9222HBmU",
  authDomain: "convo-client-bd6ed.firebaseapp.com",
  projectId: "convo-client-bd6ed",
  storageBucket: "convo-client-bd6ed.appspot.com",
  messagingSenderId: "84780411523",
  appId: "1:84780411523:web:39fefcbd6bed7d6c7809b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
