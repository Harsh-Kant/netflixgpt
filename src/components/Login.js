import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div>
        <img
          class="w-screen h-screen object-cover object-center absolute"
          //   src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9c363af5-4750-4f14-87d1-8125f5276db0/web/AU-en-20251027-TRIFECTA-perspective_06edc6f4-0177-4fc5-9b5b-3e7d25383ecb_large.jpg"
          alt=""
        />
      </div>
      <form className="absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-sm bg-opacity-80">
        <h1 className="text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-2 w-full bg-gray-600 rounded-sm" />}
        <input type="text" placeholder="Email" className="p-2 my-2 w-full bg-gray-600 rounded-sm" />
        <input type="password" placeholder="Password" className="p-2 my-2 w-full bg-gray-600 rounded-sm" />
        <button className="p-3 my-4 bg-[#e50914] w-full rounded-sm">{isSignInForm ? "Sign-In" : "Sign-Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm} >{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a user? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
