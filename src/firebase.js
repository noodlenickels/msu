import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAZA00HrCPcxKhzgWDv8V7Ifo4m4SWjJ2c",
    authDomain: "msu-project-35720.firebaseapp.com",
    projectId: "msu-project-35720",
    storageBucket: "msu-project-35720.appspot.com",
    messagingSenderId: "471560555652",
    appId: "1:471560555652:web:02ce45ab691115cd9fc6d1",
    measurementId: "G-843DPNC0F0"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth, storage };