import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <div className='font-[sans-serif]'>
      <div className='min-h-screen flex fle-col items-center justify-center py-6 px-4'>
        <div className='grid md:grid-cols-2 items-center gap-6 max-w-6xl w-full'>
          <div className='border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto'>
            <form className='space-y-4'>
              <div className='mb-8'>
                <h3 className='text-gray-800 text-3xl font-bold'>
                  Reset account
                </h3>
                <p className='text-gray-500 text-sm mt-4 leading-relaxed'>
                  Kindly enter your email to reset your account.
                </p>
              </div>

              <div>
                <label className='text-gray-800 text-sm mb-2 block'>
                  Email address
                </label>
                <div className='relative flex items-center'>
                  <input
                    name='email'
                    type='email'
                    required
                    className='w-full text-sm text-gray-800 border border-gray-300 pl-4 pr-10 py-3 rounded-lg outline-blue-600'
                    placeholder='Enter email'
                  />
                </div>
              </div>

              <div className='!mt-8'>
                <button
                  type='button'
                  className='w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none'
                >
                  Send a link
                </button>
              </div>

              <p className='text-sm !mt-8 text-center text-gray-500'>
                Have an account
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
  );
};

export default Reset;
