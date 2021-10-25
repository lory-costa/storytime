// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore/lite";
import { StoryType } from "../types/StoryType";

const firebaseConfig = {
  apiKey: "AIzaSyB4OSpUarfIWVRIxDWIe57PaYdgSorCMHk",
  authDomain: "storytime-nz.firebaseapp.com",
  projectId: "storytime-nz",
  storageBucket: "storytime-nz.appspot.com",
  messagingSenderId: "438319750600",
  appId: "1:438319750600:web:d8fef01dc8413d8b0d74fd",
  measurementId: "G-5EWLGGBGMW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const db = getFirestore(app);

// Get a list of stories from the database
export async function getStories() {
  const storiesCol = collection(db, "stories");
  const storiesSnapshot = await getDocs(storiesCol);
  const storiesList = storiesSnapshot.docs.map((doc) => doc.data());

  return storiesList;
}

// Add a new story to the stories collection
export async function addStory(story: StoryType) {
  const docRef = await addDoc(collection(db, "stories"), {
    // author: "userId",
    content: story,
    createdAt: serverTimestamp(),
  });

  return docRef;
}
