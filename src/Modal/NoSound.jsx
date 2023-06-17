import React from 'react';

function NoSound({ onClick }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
      <div className="bg-white p-4 rounded shadow z-10 w-64 sm:w-96">
        <h3 className="text-lg font-bold mb-2 text-center">No audio available</h3>
        <p className="text-center">Sorry, there is no audio available for this word.</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
          onClick={onClick}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default NoSound;
