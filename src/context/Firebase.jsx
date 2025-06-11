import { createContext, useContext } from 'react'
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, set, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBCyCyxqp1-SRfPGHzu_BMkpT36mBUJkls",
  authDomain: "learningfirebase-5dbe8.firebaseapp.com",
  projectId: "learningfirebase-5dbe8",
  storageBucket: "learningfirebase-5dbe8.firebasestorage.app",
  messagingSenderId: "1000304388525",
  appId: "1:1000304388525:web:b0f11cdf3424c498441924",
  databaseURL: "https://learningfirebase-5dbe8-default-rtdb.firebaseio.com/"
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp);

const database = getDatabase(firebaseApp);

const FirebaseContext = createContext(null); 

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props)=> {
  const signUpUserWithEmailAndPassword = (email, password)=> {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)

  }
  const putData = (key, data)=>set(ref(database,key), data); 
  

  return (
    <FirebaseContext.Provider value={{signUpUserWithEmailAndPassword, putData}}>
      {props.children}
    </FirebaseContext.Provider>
  )
}