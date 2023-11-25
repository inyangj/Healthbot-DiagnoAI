import React, { useState } from "react";
import sms from "../assets/svg/sms.svg";
import key from "../assets/svg/key.svg";
import eye from "../assets/svg/eye.svg";
import eyeclose from "../assets/svg/eyeclose.svg";
import axios from "axios"; 
import {useNavigate} from "react-router-dom"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SigninForm = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        "https://diagnoai-w1tw.onrender.com/api/v1/users/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        toast.success("Log in successful!");
        localStorage.setItem("userData", JSON.stringify(response.data));
        navigate("/chat");
      } else {
        setError(response.data.message || "Login failed.");
      }
    } catch (error) {
      setError("An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <form onSubmit={handleSignIn}>
      <label className="text-[0.875rem]" htmlFor="email">
        Email Address
      </label>
      <div
        className={`flex p-[0.75rem] border ${
          emailFocus ? " border-secondary" : error ? "border-red-500" : "border-gray_4"
        } rounded-[0.27rem] items-center gap-2 mb-5`}
      >
        <img src={sms} alt="input-icon" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          className="w-full bg-transparent pl-1 outline-none"
          name="email"
          placeholder="ex. danny@email.com"
          id="email"
        />
      </div>

      <label className="text-[0.875rem]" htmlFor="password">
        Enter Password
      </label>
      <div
        className={`flex p-[0.75rem] border ${
          passwordFocus ? " border-secondary" : error ? "border-red-500" : "border-gray_4"
        } rounded-[0.27rem] items-center gap-2 mb-8`}
      >
        <img src={key} alt="input-icon" />
        <input
          type={passwordVisible ? "password" : "text"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
          className="w-full appearance-none border-none outline-none focus:ring-0 bg-transparent pl-1"
          name="password"
          placeholder="ex. abc1234"
          id="password"
        />
        <img
          src={passwordVisible ? eyeclose : eye}
          onClick={togglePasswordVisibility}
          alt="input-icon"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-secondary text-white font-Nohemi_Bold text-[0.875rem] py-2 rounded-[0.27rem] font-bold"
      >
        { loading ? 'logging in...' : 'log in'}
      </button>
    </form>
  );
};

export default SigninForm;
