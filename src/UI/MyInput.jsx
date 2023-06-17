import React from 'react';

function MyInput({ text, onChange }) {
  return (
    <input
      className="border border-gray-300 rounded px-4 py-2 mb-4 w-full sm:w-64"
      onChange={onChange}
      placeholder={text}
    />
  );
}

export default MyInput;
