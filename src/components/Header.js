import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, logo } from "../utils/constant";
import { toogleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = ()=> {
    dispatch(toogleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute z-10 px-8 py-2 object-contain bg-gradient-to-b from-black w-screen flex justify-between">
      <img className="w-22" src={logo} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && <select name="" id="" className="p-2 bg-gray-900 text-white m-2" onChange={handleLanguageChange} >
            {SUPPORTED_LANGUAGES.map(lang => <option key = {lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
          <button className="py-2 px-4 m-2 bg-purple-700 text-white rounded-md"
            onClick={handleGptSearchClick}
          >{showGptSearch ? "Home" : "GPT"}</button>
          <img className="h-12 w-12 p-2" src={user?.photoURL} alt="user" />
          <button className="font-bold text-white" onClick={handleSignout}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
