import React from "react";
import SignInAndRegisterLogo from "../images/SignInAndRegisterLogo.PNG";
import { Link } from "react-router-dom";
import { useState } from "react";

// document.addEventListener("DOMContentLoaded", function (event) {
//     function OTPInput() {
//       const inputs = document.querySelectorAll("#otp > *[id]");
//       for (let i = 0; i < inputs.length; i++) {
//         inputs[i].addEventListener("keydown", function (event) {
//           if (event.key === "Backspace") {
//             inputs[i].value = "";
//             if (i !== 0) inputs[i - 1].focus();
//           } else {
//             if (i === inputs.length - 1 && inputs[i].value !== "") {
//               return true;
//             } else if (event.keyCode > 47 && event.keyCode < 58) {
//               inputs[i].value = event.key;
//               if (i !== inputs.length - 1) inputs[i + 1].focus();
//               event.preventDefault();
//             } else if (event.keyCode > 64 && event.keyCode < 91) {
//               inputs[i].value = String.fromCharCode(event.keyCode);
//               if (i !== inputs.length - 1) inputs[i + 1].focus();
//               event.preventDefault();
//             }
//           }
//         });
//       }
//     }
//     OTPInput();
//   });



const EmailCode = () => {

    const [Otp, setOtp] = useState("")
    const [OtpConcat, setOtpConcat] = useState("")

    const handleInput=(e)=>{
        setOtp({...Otp,[e.target.name]:e.target.value})
           
    }
    const handleVerify =()=>{
      
      const {otp1,otp2,otp3,otp4,otp5,otp6}=Otp
      const result = otp1+otp2+otp3+otp4+otp5+otp6
      setOtpConcat(result)
    }
    console.log(OtpConcat)
    
  return (
    <div>
      <div className=" min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover ">
        <div className="absolute bg-black opacity-80 inset-0 "></div>
        <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          <div className="">
            <div className="text-center p-5 flex-auto justify-center">
              <img
                src={SignInAndRegisterLogo}
                alt="SignInAndRegisterLogo"
                className="mx-auto"
              />
              <h2 className="text-xl font-bold py-4 text-[#5E98C5]">
                Check Your Mail and Type Your OTP Code{" "}
              </h2>
            </div>
            <div className="relative justify-center flex">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" id="otp"></div>

              <input
                className="w-8 bg-blue-400 m-2"
                type="text"
                id="first"
                maxLength="1"
                name="otp1"
                onChange={handleInput}
                
              />

              <input
                className="w-8 bg-blue-400 m-2"
                type="text"
                id="second"
                maxLength="1"
                name="otp2"
                onChange={handleInput}
              />

              <input
                className="w-8 bg-blue-400 m-2"
                type="text"
                id="third"
                maxLength="1"
                name="otp3"
                onChange={handleInput}
              />
              <input
                className="w-8 bg-blue-400 m-2"
                type="text"
                id="fourth"
                maxLength="1"
                name="otp4"
                onChange={handleInput}
              />
              <input
                className="w-8 bg-blue-400 m-2"
                type="text"
                id="fifth"
                maxLength="1"
                name="otp5"
                onChange={handleInput}
              />
              <input
                className="w-8 bg-blue-400 m-2"
                type="text"
                id="sixth"
                maxLength="1"
                name="otp6"
                onChange={handleInput}
              />
            </div>
            <div className="p-3  mt-2 text-center space-x-4 md:block">
              <Link to={"/sure"}>
                <button
                  className="mb-2 md:mb-0  px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 bg-[#76C0FA] hover:border-red-600 hover:text-red-600"
                  //   onClick={handleGoBack}
                >
                  Go Back
                </button>
              </Link>
              {/* <Link to={"/verified"}> */}
                <button className="mb-2 md:mb-0 border px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-white bg-[#1F2937] hover:text-green-600 hover:font-medium hover:border-green-600"
                onClick={handleVerify}
                >
                  Verify
                </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailCode;
