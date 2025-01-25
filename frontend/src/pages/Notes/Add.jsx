import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import { useAuth } from "../../context/AuthContextProvider";
import Navbar from "../../components/Navbar";
import { FaPlus } from "react-icons/fa";

const Add = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(false);
  const { login, user, token } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = {
      title,
      body,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/note/add",
        note,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
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
      <Navbar />
      <ToastContainer />

      {user && (
        <>
          <Helmet>
            <title>Add Note | {process.env.APP_NAME}</title>
          </Helmet>
          <div className='font-[sans-serif]'>
            <div className='min-h-screen  items-center justify-center py-6 px-4'>
              <div className='grid md:grid-cols-1 items-center w-full'>
                <div className='border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto'>
                  <form className='space-y-4' onSubmit={handleSubmit}>
                    <div className='mb-8'>
                      <h3 className='text-gray-800 text-3xl font-bold'>
                        Add Note
                      </h3>
                      <p className='text-gray-500 text-sm mt-4 leading-relaxed'>
                        Add new note
                      </p>
                    </div>

                    <div>
                      <label className='text-gray-800 text-sm mb-2 block'>
                        Title
                      </label>
                      <div className='relative flex items-center'>
                        <input
                          type='text'
                          required
                          className='w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600'
                          placeholder='Enter Note Title'
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className='text-gray-800 text-sm mb-2 block'>
                        Body
                      </label>
                      <div className='relative flex items-center'>
                        <textarea
                          required
                          className='w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600'
                          placeholder='Enter Note Content'
                          onChange={(e) => setBody(e.target.value)}
                          rows={5}
                          style={{ resize: "none" }}
                        />
                      </div>
                    </div>

                    <div className='!mt-8'>
                      <button className='w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none'>
                        Add New Note <FaPlus className='ml-1 inline' />
                      </button>
                    </div>

                    <p className='text-sm !mt-8 text-center text-gray-500'>
                      <Link
                        to='/'
                        className='text-red-600 font-semibold hover:underline ml-1 whitespace-nowrap'
                      >
                        Cancel
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Add;
