import { db } from "./index.js";
import { collection,addDoc,query,orderBy,limit,getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
let scores = [
  { name: "A", score: 10 },
  { name: "B", score: 50 },
  { name: "C", score: 30 }
];
//dummy scores
onValue(ref(db, "scores"), (snapshot) => {
let data = snapshot.val();
console.log(data);
});
//log objects to console
let scoreArray = Object.values(data)
//save objects to array
scoresArray.sort((a,b) => b.score - a.score);
//sort from highest to lowest
//display in p5
let topScores = scoresArray.slice(0,10);
//display all scores
for (let i = 0; i < topScores.length; i++) {
  text(topScores[i].name + ": " + topScores[i].score, 50, 50 + i * 20);
}

