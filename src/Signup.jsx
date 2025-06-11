import React from 'react'
import { useState } from 'react';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { useFirebase } from './context/Firebase';
function Signup() {
  const [count, setCount] = useState(0);
  const firebase = useFirebase();
  const [email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const auth = getAuth(firebase.auth); 
  const googleProvider = new GoogleAuthProvider;
  const signUpWithGoogle=()=>{
    signInWithPopup(auth, googleProvider);
  }
  return (
    <div className='signup h-full w-full flex flex-col items-center justify-center'>
        <h4 className='mb-10'>Sign Up</h4>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Enter Email' />
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Enter Password' />
        <div className='buttons mt-10'>
          <button className='bg-zinc-100 rounded-[8px] p-1 text-[#4F5D75]' onClick={signUpWithGoogle}>Sign Up with Google</button>
          <button className='ml-5 bg-zinc-100 rounded-[8px] text-[#4F5D75] p-1' onClick={()=>{
            firebase.signUpUserWithEmailAndPassword(email, password);
            firebase.putData('users/' + "test", {email, password});
            }
          }>Sign Up</button>
      </div>
      </div>
  )
}

export default Signup