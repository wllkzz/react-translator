import React from 'react'

function MyButtonGreen({onClick}) {
  return (
    <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={onClick}
      >
        🔊
      </button>
  )
}

export default MyButtonGreen