import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { logo } from '../utils/constant';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store=>store.user)
  const handleSignout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate('/error')
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
    return ()=>unsubscribe()
  }, []);

  return (
    <div className="absolute z-10 px-8 py-2 object-contain bg-gradient-to-b from-black w-screen flex justify-between">
        <img className='w-22' src={logo} alt="logo" />
        {user && (<div className='flex p-2'>
          <img className='h-12 w-12 p-2' src={user?.photoURL} alt="user" />
          <button className='font-bold text-white' onClick={handleSignout}>Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header