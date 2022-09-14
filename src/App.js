
import './App.css'
import {useEffect, useState} from "react";
import { doc, getDoc } from "firebase/firestore";
import {db} from "./firestoreConfig";

function App() {
  return (
    <div>
      <h1>Firestore Documents</h1>

      <HelloWorld />

    </div>
  )
}

function HelloWorld() {
  const [message, setMessage] = useState("")
  useEffect(() => {
    const asdfRef = doc(db, "messages", "hello");
    getDoc(asdfRef)
      .then(docSnap => {
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data().hello);
          setMessage(docSnap.data().hello)
        } else {
          console.log("No such document!");
        }
      })
      .catch(error => console.log(error))
  },[])

  return (
    <div>
      <h2>Firestore Documents</h2>
      { message }
    </div>
  )
}

export default App;
