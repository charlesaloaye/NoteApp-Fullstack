import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/register",
        newUser
      );

      if (response.data.success) {
        toast.success(response.data.message);

        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      setError(true);

      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {error && <ToastContainer />}

      <Helmet>
        <title>Register | {process.env.APP_NAME}</title>
      </Helmet>
      <div className='font-[sans-serif]'>
        <div className='min-h-screen flex fle-col items-center justify-center py-6 px-4'>
          <div className='grid md:grid-cols-2 items-center gap-6 max-w-6xl w-full'>
            <div className='border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto'>
              <form className='space-y-4' onSubmit={handleSubmit}>
                <div className='mb-8'>
                  <h3 className='text-gray-800 text-3xl font-bold'>
                    Register{" "}
                  </h3>
                  <p className='text-gray-500 text-sm mt-4 leading-relaxed'>
                    Sign up today and start managingyour notes.
                  </p>
                </div>

                <div>
                  <label className='text-gray-800 text-sm mb-2 block'>
                    Name
                  </label>
                  <div className='relative flex items-center'>
                    <input
                      type='text'
                      required
                      className='w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600'
                      placeholder='Enter full name'
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className='text-gray-800 text-sm mb-2 block'>
                    Email
                  </label>
                  <div className='relative flex items-center'>
                    <input
                      type='email'
                      required
                      className='w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600'
                      placeholder='Enter Email'
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
                      name='password'
                      type='password'
                      required
                      className='w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600'
                      placeholder='Enter password'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div className='!mt-8'>
                  <button
                    type='submit'
                    className='w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none'
                  >
                    Sign up
                  </button>
                </div>

                <p className='text-sm !mt-8 text-center text-gray-500'>
                  Already have an account
                  <Link
                    to='/login'
                    className='text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap'
                  >
                    Sign in here
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
  );
};

export default Register;
