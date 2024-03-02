import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleOnClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const toggleHandler = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute md:-mt-24">
        <img className="h-screen w-screen fixed object-cover"
          src={BG_URL}
          alt="img"
        />
      </div>
      <form
        className="absolute  bg-black w-10/12 md:w-4/12 mx-auto md:my-36 my-32  p-12 flex-col flex justify-center  items-center right-0 left-0 bg-opacity-80 "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2 className="text-white text-2xl md:text-3xl font-semibold ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        <br />
        {!isSignInForm && (
          <input
            ref={name}
            className="text-white bg-neutral-700 text-lg font-medium w-full p-4 m-2 rounded"
            type="text"
            name="name"
            placeholder="ENTER YOUR NAME"
          />
        )}
        <br />
        <input
          ref={email}
          className="text-white bg-neutral-700 text-lg font-medium w-full p-4 m-2 rounded "
          type="text"
          name="email"
          placeholder="ENTER YOUR EMAIL"
        />
        <br />
        <input
          ref={password}
          className="text-white bg-neutral-700 text-lg font-medium w-full p-4 m-2 rounded"
          type="password"
          name="password"
          placeholder="ENTER YOUR PASSWORD"
        />
        <p className="text-white text-xs">
          your password should have capital letter, small letter, special
          characters and number atleast 8 characters
        </p>
        <p className="underline text-orange-500  -mb-6 mt-2 font-semibold  text-xs">
          {errorMessage}
        </p>
        <button
          className="text-white text-lg font-semibold bg-red-700 w-full p-4 mt-8 mb-2 rounded hover:bg-red-600"
          onClick={handleOnClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex mb-5">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <span className="text-white text-sm ml-1 font-light">
            Remember me
          </span>
          <p className="text-white text-sm ml-28 font-light cursor-pointer hover:underline">
            Need Help?
          </p>
        </div>
        <br />
        <br />
        <p className="text-gray-400 mr-40 ">
          {isSignInForm ? "New to Netflix?" : "Already Registered"}{" "}
          <span
            className="text-white cursor-pointer hover:underline"
            onClick={toggleHandler}
          >
            {isSignInForm ? "Sign up now." : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
