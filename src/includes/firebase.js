import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbwvN0k7YPjlkIw8Axd4y6ULtTSqIiQzU",
  authDomain: "music-728e0.firebaseapp.com",
  projectId: "music-728e0",
  storageBucket: "music-728e0.appspot.com",
  appId: "1:859028165636:web:268910f52f1ac64b7c9151",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
