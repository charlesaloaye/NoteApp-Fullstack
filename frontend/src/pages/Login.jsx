import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../context/AuthContextProvider";
import { Helmet } from "react-helmet";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { login, user, token } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingUser = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        existingUser
      );

      if (response.data.success) {
        login(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/");
        toast.success(response.data.message);
      }
    } catch (error) {
      setError(true);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {error && <ToastContainer />}

      {!user ? (
        <>
          <Helmet>
            <title>Login | {process.env.APP_NAME}</title>
          </Helmet>
          <div className='font-[sans-serif]'>
            <div className='min-h-screen flex fle-col items-center justify-center py-6 px-4'>
              <div className='grid md:grid-cols-2 items-center gap-6 max-w-6xl w-full'>
                <div className='border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto'>
                  <form className='space-y-4' onSubmit={handleSubmit}>
                    <div className='mb-8'>
                      <h3 className='text-gray-800 text-3xl font-bold'>
                        Sign in
                      </h3>
                      <p className='text-gray-500 text-sm mt-4 leading-relaxed'>
                        Sign in to your account and start creating notes.
                      </p>
                    </div>

                    <div>
                      <label className='text-gray-800 text-sm mb-2 block'>
                        Email
                      </label>
                      <div className='relative flex items-center'>
                        <input
                          type='text'
                          required
                          className='w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600'
                          placeholder='Enter email'
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className='text-gray-800 text-sm mb-2 block'>
                        Password
                      </label>
                      <div className='relative flex items-center'>
                        <input
                          type='password'
                          required
                          className='w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600'
                          placeholder='Enter password'
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className='flex flex-wrap items-center justify-between gap-4'>
                      <div className='flex items-center'>
                        <input
                          id='remember-me'
                          type='checkbox'
                          className='h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                        />
                        <label
                          htmlFor='remember-me'
                          className='ml-3 block text-sm text-gray-800'
                        >
                          Remember me
                        </label>
                      </div>

                      <div className='text-sm'>
                        <Link
                          to='/reset'
                          className='text-blue-600 hover:underline font-semibold'
                        >
                          Forgot your password?
                        </Link>
                      </div>
                    </div>

                    <div className='!mt-8'>
                      <button className='w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none'>
                        Sign in
                      </button>
                    </div>

                    <p className='text-sm !mt-8 text-center text-gray-500'>
                      Don't have an account
                      <Link
                        to='/register'
                        className='text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap'
                      >
                        Register here
                      </Link>
                    </p>
                  </form>
                </div>
                <div className='max-md:mt-8 hidden md:block'>
                  <img
                    src='https://readymadeui.com/login-image.webp'
                    className='w-full aspect-[71/50] max-md:w-4/5 mx-auto block object-cover'
                    alt='Dining Experience'
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Navigate to='/' />
      )}
    </>
  );
};

export default Login;
