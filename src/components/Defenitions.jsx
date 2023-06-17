import React from 'react';

function Defenitions({ data, isLoading, isDataFetched, error }) {
  return (
    <div className="sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <div className=' mt-10 rounded-lg p-4'>
      <p className="text-center my-5 text-2xl font-bold">{data[0]?.word}</p>
      <p className="text-center text-lg">{data[0]?.phonetic}</p>
      {isLoading ? (
        <div className="text-center mt-4">Loading...</div>
      ) : error ? (
        <div className="text-center mt-4">Error: {error.message}</div>
      ) : !isDataFetched ? null : data.length > 0 &&
        data[0]?.meanings[0]?.definitions.length > 0 ? (
          <div className="mt-4">
            <div className="text-center">
              <h2 className="text-lg font-bold">Definitions:</h2>
              {data[0]?.meanings[0]?.definitions.length > 0 ? (
                data[0].meanings[0].definitions.map((definition, index) => (
                  <div key={index} className="text-left ml-4">
                    <span className="font-bold">- Definition:</span> {definition.definition}
                    {definition.example && (
                      <div>
                        <span className="font-bold">- Example:</span> {definition.example}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                  <div className="text-red-500">No definitions found.</div>
                )}
            </div>
          </div>
        ) : (
          <div className="text-center mt-4">No definitions found.</div>
        )}
      </div>
    </div>
  );
}

export default Defenitions;
