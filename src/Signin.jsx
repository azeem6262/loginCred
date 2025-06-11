import React, { useState } from 'react';
import { useFirebase } from './context/Firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const firebase = useFirebase();
    const auth = getAuth(firebase.auth);

    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((value) => console.log('Sign In Successful.'))
            .catch((err) => console.log(err));
    };

  return (
    <div className='signinpage h-full w-full flex flex-col items-center justify-center text-[#4F5D75]'>
        <h4 className='mb-10'>Sign In</h4>
        <label className='text-[#4F5D75]text-bolder '></label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email' value={email} />
        <label className='text-bolder text-[#4F5D75]'></label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Password' value={password} />
        <button className='mt-10 p-1 bg-[#4F5D75] rounded-[8px] text-white' onClick={signInUser}>Sign In</button>
    </div>
  )
}

export default Signin