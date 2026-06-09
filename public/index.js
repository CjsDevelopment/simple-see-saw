// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore,collection,addDoc,query,orderBy,limit,getDocs  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


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




