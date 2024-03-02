import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
import { toggleOnShowGPTSearch } from "../utils/GPTSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constant";
import {onLanguageChange} from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const searchGpt=useSelector((store)=>store.GPT.ShowGPTSearch)


  const handleOnClick = () => {
    dispatch(toggleOnShowGPTSearch());
  };

  const handleOnLanguageChange=(e)=>{
dispatch(onLanguageChange(e.target.value))
  }

  const handleSignOut = () => {
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
    // unsubscribe when unmounting
    return () => unsubscribe();
  }, []);

  return (
    <div className= "sticky top-0 px-8 py-2 md:bg-gradient-to-b from-black flex flex-col md:flex-row md:bg-transparent bg-black    justify-around w-[100vw] z-50 ">
      <img className="w-32 md:w-48 mx-auto md:mx-0" src={LOGO} alt="logo" />

      <div className=" md:m-5  flex justify-center">
        {user && (
          <div className="flex ml-4 ">
            {searchGpt && <select className="bg-red-700 text-white md:text-lg  text-sm font-bold outline-none rounded-lg text-center p-2" 
            onChange={handleOnLanguageChange}>
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option
                  key={lang.identifier}
                  className="bg-white text-red-700 md:text-lg  text-xsm  md:font-bold "
                  value={lang.identifier}
                >
                  {lang.lang}
                </option>
              ))}
            </select>}
            <button
              className="px-[4px] md:p-2 mr-4 rounded-md md:text-lg  text-sm font-bold  bg-white text-red-900 ml-5 hover:bg-gray-200"
              onClick={handleOnClick}
            >
              {searchGpt?"HomePage":"🔍Search"}
            </button>
            <img
              className="w-8 md:w-12 items-center"
              src={user?.photoURL}
              alt="usericon"
            />
            <button
              onClick={handleSignOut}
              className="md:p-2 px-[4px]  rounded-md md:text-lg  text-sm font-bold bg-red-700 text-white ml-5 hover:bg-red-600"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
