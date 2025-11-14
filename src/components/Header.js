import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store=>store.user)
  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
  return (
    <div className="absolute z-10 px-8 py-2 object-contain bg-gradient-to-b from-black w-screen flex justify-between">
        <img className='w-22' src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2023.ico" alt="logo" />
        {user && (<div className='flex p-2'>
          <img className='h-12 w-12 p-2' src={user?.photoURL} alt="user" />
          <button className='font-bold text-white' onClick={handleSignout}>Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header