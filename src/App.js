import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {userAuthState} from 'react-firebase-hooks/auth';
import {userCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDQTF0BO156AS1udLc-Ltc9sozJG_eDMu8",
  authDomain: "firechat-6ca8d.firebaseapp.com",
  projectId: "firechat-6ca8d",
  storageBucket: "firechat-6ca8d.appspot.com",
  messagingSenderId: "11335683357",
  appId: "1:11335683357:web:d4661b20207c9e982ae5f4",
  measurementId: "G-FEPCFN04VF"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
