import React from "react";
import SignInAndRegisterLogo from "../images/SignInAndRegisterLogo.PNG"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Link} from "react-router-dom";

const schema = yup
  .object({
    // First_Name: yup.string().required(),
    // Last_Name: yup.string().required(),
    // User_Name: yup.string().required(),
    email: yup.string().required(),
    // Password: yup.string().required(),
  })
  .required();
export default function Register() {
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    // axios.post("http://localhost:5000/signup", data).then((res) => {
    //   if (res.data.mxg) {
    //     toast.success(" successfull", {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
        // setTimeout(() => {
        //   navigate("/login");
        // }, 3000);
    //   } else {
    //     toast.error(" sign up failed email is already in use", {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //     });
    //   }
    // });
  };
  return (
    <div>
      {/* <ToastContainer /> */}
      <div className="h-full flex justify-center mt-20">
        <div className="flex-1 flex flex-col  py-12   px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24  ">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src={SignInAndRegisterLogo}
                alt="SignInAndRegisterLogo"
              />
              <h2 className="mt-6  text-3xl font-extrabold text-[#5E98C5]">
                Register your account
              </h2>
            </div>

            <div className="mt-8">
              <div className="mt-6 ">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  
                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700">
                      User Name
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("User_Name")}
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <p className="text-red-600">
                        {errors.User_Name && <span>Enter your name</span>}
                      </p>
                    </div>
                  </div> */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        autoComplete="email"
                        {...register("email")}
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <p className="text-red-600">
                        {errors.email && <span>Enter your email</span>}
                      </p>
                    </div>
                  </div>

                  {/* <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        type="password"
                        autoComplete="current-password"
                        {...register("Password")}
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <p className="text-red-600">
                        {errors.Password && <span>Enter the password</span>}
                      </p>
                    </div>
                  </div> */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {/* <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      /> */}
                      <label className="ml-2 text-sm">
                        Already have a account?{" "}
                        <Link
                          to="/login"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Sign in
                        </Link>
                      </label>
                    </div>

                    {/* <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot your password?
                      </a>
                    </div> */}
                  </div>
                  <div>
                    {/* <Link to={"/emailCode"}> */}
                    <button
                      type="submit"
                      className="w-full flex justify-center mt-7 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign Up
                    </button>
                    {/* </Link> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}