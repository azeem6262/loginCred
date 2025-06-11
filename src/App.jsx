import React from "react";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Signup from "./Signup";
import { useFirebase } from './context/Firebase';
import Signin from "./Signin";

function App() {

  const [user, setUser] = useState(null);
  const firebase = useFirebase();
  const auth = getAuth(firebase.auth);
  useEffect(()=>{
    onAuthStateChanged(auth, user=> {
      if(user){
        //Yes you are logged in
        setUser(user);
      }
      else{
        //user is logged out
        setUser(null);
      }
    })
  }, [])
  if(user===null){
    return (
      <>
      <div  className="text-white w-screen h-screen flex flex-col items-center justify-center bg-[#4F5D75]">
        <div className="signup w-full h-1/2">
          <Signup />
        </div>
        <div className="signin w-full h-1/2 bg-zinc-100 rounded-tl-3xl rounded-tr-3xl">
          <Signin />
        </div>
      </div>
      </>
      
    );
  }
  return (
    <div className="h-screen w-full">
        <div className="h-1/2 w-full bg-zinc-100 flex items-center justify-center">
          <h1>Hello {user.email}</h1>
        </div>
        <div className="flex items-center justify-center h-1/2 w-full rounded-tl-3xl rounded-tr-3xl bg-[#4F5D75]">
          <button className=' bg-zinc-100 rounded-[8px] p-1' onClick={()=>{signOut(auth)}}>Log out</button>
        </div>
      </div>
    
  
  );
}

export default App;
