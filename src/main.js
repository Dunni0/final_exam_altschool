import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBWoyCvl-bkK-UuRkYk2rYdwFtBlvlSpE",
  authDomain: "final-exam-72d28.firebaseapp.com",
  projectId: "final-exam-72d28",
  storageBucket: "final-exam-72d28.appspot.com",
  messagingSenderId: "187143911445",
  appId: "1:187143911445:web:cdfc3881dac96be278b61c",
  measurementId: "G-HTM4DEZZ9J"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = createApp(App)

app.use(router)

app.mount("#app")