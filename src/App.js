import React, { useState } from 'react';
import axios from 'axios';
import MyButton from './UI/MyButton';
import MyInput from './UI/MyInput';
import NoSound from './Modal/NoSound';
import Defenitions from './components/Defenitions';
import MyButtonGreen from './UI/MyButtonGreen';

function App() {
  const [word, setWord] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isDataFetched, setIsDataFetched] = useState(false); 

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const responseData = response.data;
      setData(responseData);
      setIsDataFetched(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setData([]);
      setIsDataFetched(true);
    }
  };

  const handleChangeInput = (e) => {
    setWord(e.target.value);
  };

  const handleClickButton = () => {
    setIsDataFetched(false);
    fetchData();
  };

  const handleClickPlay = () => {
    if (
      data.length > 0 &&
      data[0].phonetics.length > 0 &&
      data[0].phonetics[0].audio
    ) {
      const audioUrl = data[0].phonetics[0].audio;
      const audio = new Audio(audioUrl);
      audio.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    } else {
      setShowModal(true); 
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <MyInput text="Enter a word" onChange={handleChangeInput} />
      <MyButton text="Meaning" onClick={handleClickButton} />

      <MyButtonGreen onClick={handleClickPlay}/>

      <Defenitions data={data} isLoading={isLoading} isDataFetched={isDataFetched} error={error} />


    
      {showModal && (
        <NoSound onClick={closeModal}/>
      )}

    </div>
  );
}

export default App;
