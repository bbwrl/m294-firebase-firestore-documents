# Firebase / Firestore Example

## Configuration
firebaseconfig.js
-----------------
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
apiKey: "*****",
authDomain: "*****",
projectId: "*****",
storageBucket: "*****",
messagingSenderId: "*****",
appId: "*****"
}
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


## Available Scripts
In the project directory, you can run:

### `npm install`
Installs the dependencies of the project

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


