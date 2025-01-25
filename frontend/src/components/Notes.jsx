import { FaTrash, FaEdit } from "react-icons/fa";
const Notes = (note) => {
  return (
    <div className='bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4'>
      <div className='p-6'>
        <h3 className='text-lg font-semibold'>{note.title}</h3>
        <p className='mt-2 text-sm text-gray-500 leading-relaxed'>
          {note.body}
        </p>
        <div className='flex flex-col-1'>
          <button
            type='button'
            className='mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 mr-3'
          >
            Edit
            <FaEdit className='inline ml-1' />
          </button>

          <button
            type='button'
            className='mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-red-600 hover:bg-red-700'
          >
            Delete
            <FaTrash className='inline ml-1' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
