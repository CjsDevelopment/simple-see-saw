// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore,collection,addDoc,query,orderBy,limit,getDocs  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeO00_xA50ig1aO9VmDUUgBDnC2iORAK4",
  authDomain: "seesaw-20ab9.firebaseapp.com",
  projectId: "seesaw-20ab9",
  storageBucket: "seesaw-20ab9.firebasestorage.app",
  messagingSenderId: "967082362932",
  appId: "1:967082362932:web:57b1b834926805daa56261",
  measurementId: "G-E2BP56ZRDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

 export async function submitTimer(name, timer) {
  try {
  if (name.length > 3 || name.length == 0){
    return;
  }
  await addDoc(collection(db, "leaderboard"), {
name,
timer
});
console.log("score saved :D")
} catch(error){console.error("error adding score D: - 021",error);}
}
export async function LBsort() {

}




