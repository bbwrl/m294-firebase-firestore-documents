
import './App.css'
import {useEffect, useState} from "react";
import { doc, getDoc } from "firebase/firestore";
import {db} from "./firebaseConfig";

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
    const messageRef = doc(db, "myCollection", "messages");
    getDoc(messageRef)
      .then( (docSnap) => {
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setMessage(docSnap.data().welcomeMsg )
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
