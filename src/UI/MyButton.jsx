import React from 'react';

function MyButton({ text, onClick }) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto" onClick={onClick}>
      {text}
    </button>
  );
}

export default MyButton;
