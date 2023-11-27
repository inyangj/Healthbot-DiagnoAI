import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { FaExclamationCircle } from "react-icons/fa";
import fullnameicon from "../assets/fullnameicon.png";
import { Navigate, useNavigate } from "react-router-dom";
import ConfirmEmailScreen from "../pages/ConfirmEmailScreen";
import sms from "../assets/svg/sms.svg";
import key from "../assets/svg/key.svg";
import eye from "../assets/svg/eye.svg";
import eyeclose from "../assets/svg/eyeclose.svg";
import calender from "../assets/calendar.png";

import axios from "axios";
const FormData = () => {
  const [fullnameFocus, setFullnameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [dateFocus, setDateFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [confirmpasswordFocus, setConfirmPasswordFocus] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const form = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      gender: "",
      date: "",
      password: "",
    },
  });
  // const [userInput, setUserInput] = useState()
  const { register, control, handleSubmit, watch, reset, formState } = form;
  const { errors } = formState;

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("form submitted", data);
    setLoading(true);

    const { fullname, date, gender, email, password } = data;

    const dateObject = new Date(date);

    const formattedDate = dateObject.toISOString();

    const user = {
      fullName: fullname,
      email,
      gender,
      yearOfBirth: formattedDate,
      password,
    };

    console.log(user);

    try {
      const response = await axios.post(
        "https://diagnoai-w1tw.onrender.com/api/v1/users/signup",
        user
      );

      if (response.status === 201) {
        localStorage.setItem("userData", JSON.stringify(response.data));
        console.log("Registration successful!");
        navigate("/confirmemail");
      } else {
        console.error(response.data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("An error occurred while registering.");
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <div className="mt-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="w-full h-auto flex flex-col
         gap-y-4"
      >
        {/* <div className="w-full flex flex-col gap-y-6"> */}
          <div className="w-full h-auto relative space-y-2">
            <label className="text-[0.875rem] text-textgray" htmlFor="name">
              Full Name
            </label>

            <div
              className={`flex p-[0.75rem] border ${
                fullnameFocus ? " border-secondary" : "border-gray_4"
              } rounded-[0.27rem] items-center gap-2 mb-5`}
            >
              <img src={fullnameicon} alt="input-icon" />
              <input
                onFocus={() => setFullnameFocus(true)}
                onBlur={() => setFullnameFocus(false)}
                className="w-full bg-transparent pl-1 outline-none"
                type="text"
                id="fullname"
                placeholder="First Name, Last Name"
                {...register("fullname", {
                  required: {
                    value: true,
                    message: "Full name is required",
                  },
                })}
              />
            </div>
            <div className="absolute inset-y-0 left-0 top-6 pl-2 flex items-center pointer-events-none"></div>

            {errors.fullname?.message && (
              <p
                className="text-red-500 flex 
                        flex-row gap-1 text-sm md:text-md"
              >
                <FaExclamationCircle className="text-red-500 mt-1" />
                {errors.fullname?.message}
              </p>
            )}
          </div>
        {/* </div> */}

        {/* <div className="w-full flex flex-col gap-y-6"> */}
          <div className="w-full h-auto space-y-2">
            <label className="text-[0.875rem] text-textgray" htmlFor="email">
              Email Address
            </label>

            <div
              className={`flex p-[0.75rem] border ${
                emailFocus ? " border-secondary" : "border-gray_4"
              } rounded-[0.27rem] items-center gap-2 mb-5`}
            >
              <img src={sms} alt="input-icon" />

              <input
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                className="w-full bg-transparent pl-1 outline-none"
                name="email"
                type="email"
                id="email"
                placeholder="johndoe@email.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter A Valid Email Address",
                  },
                })}
              />
            </div>

            {errors.email?.message && (
              <p className="text-red-500 flex flex-row gap-1 text-sm md:text-md">
                <FaExclamationCircle className="text-red-500 mt-1" />
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="w-full h-auto space-y-2">
            <label className="text-[0.875rem] text-textgray" htmlFor="date">
              Gender
            </label>

            <div
              className={`flex p-[0.75rem] border ${
                dateFocus ? " border-secondary" : "border-gray_4"
              } rounded-[0.27rem] items-center gap-2 mb-5`}
            >
              <img src={fullnameicon} alt="input-icon" />

              <select
                onFocus={() => setDateFocus(true)}
                onBlur={() => setDateFocus(false)}
                className="w-full bg-transparent pl-1 outline-none"
                {...register("gender", {
                  required: "Please select a gender",
                })}
                id="gender"
                defaultValue="select Gender" // Set the default value here
              >
                <option value="" disabled hidden>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
               
              </select>
            </div>

            {errors.gender && (
              <p className="text-red-500 flex flex-row gap-1 text-sm md:text-md">
                <FaExclamationCircle className="text-red-500 mt-1" />
                {errors.gender.message}
              </p>
            )}
          </div>

          <div className="w-full h-auto space-y-2">
            <label className="text-[0.875rem] text-textgray" htmlFor="date">
              Date Of Birth
            </label>

            <div
              className={`flex p-[0.75rem] border ${
                dateFocus ? " border-secondary" : "border-gray_4"
              } rounded-[0.27rem] items-center gap-2 mb-5`}
            >
              <img src={calender} alt="input-icon" />

              <input
                onFocus={() => setDateFocus(true)}
                onBlur={() => setDateFocus(false)}
                className="w-full bg-transparent pl-1 outline-none"
                {...register("date", {
                  required: "Date of birth is required",
                  validate: (value) => {
                    const isValidDate = !isNaN(Date.parse(value));
                    if (!isValidDate) return "Invalid date";

                    // Compare the entered year with the current year
                    const enteredYear = new Date(value).getFullYear();
                    const currentYear = new Date().getFullYear();

                    return (
                      enteredYear <= currentYear ||
                      "Date cannot be in the future"
                    );
                  },
                })}
                type="date"
                id="date"
                placeholder="dd/mm/yyyy"
              />
            </div>

            {errors.date && (
              <p className="text-red-500 flex flex-row gap-1 text-sm md:text-md">
                <FaExclamationCircle className="text-red-500 mt-1" />
                {errors.date.message}
              </p>
            )}
          </div>
        {/* </div> */}

        {/* <div className="w-full flex flex-col gap-6"> */}
          <div className="w-full h-auto space-y-2">
            <label className="text-[0.875rem] text-textgray">
              Create Password
            </label>

            <div
              className={`flex p-[0.75rem] border ${
                passwordFocus ? " border-secondary" : "border-gray_4"
              } rounded-[0.27rem] items-center gap-2 mb-8`}
            >
              <img src={key} alt="input-icon" />
              <input
                type={passwordVisible ? "password" : "text"}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                className="w-full appearance-none border-none outline-none focus:ring-0 bg-transparent pl-1"
                name="password"
                placeholder="ex. abc1234"
                id="password"
                {...register("password", {
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
                    message: "8-16 characters long, at least one capital/small letter, at least one number",
                  },
                  
                })}
              />
              <img
                src={passwordVisible ? eyeclose : eye}
                onClick={togglePasswordVisibility}
                alt="input-icon"
              />
            </div>
            {errors.password?.message && (
              <p
                className="text-red-500 flex 
                        flex-row gap-1 text-sm md:text-md"
              >
                <FaExclamationCircle className="text-red-500 mt-1" />{" "}
                {errors.password?.message}
              </p>
            )}
          </div>
        {/* </div> */}

        <button
          type="submit"
          className="w-full p-3 mt-6
                      bg-lightgreen text-white
                      rounded-lg"
        >
          {loading ? "Please wait..." : "Create Account"}
        </button>
        {/* {isShown && (
                    <FormModal handleModalDisplay={handleModalDisplay} />
                )} */}
      </form>
      {/* <DevTool control={control}/>    */}
    </div>
  );
};
export default FormData;
