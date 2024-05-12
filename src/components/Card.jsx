import React from 'react'

const Card = ({ movie: {imdbId, Title, Type, Year, Poster } }) => {
  return (
    <>
      <div key={imdbId}  className="w-[20rem] h-[28rem] border-2 border-cyan-300 rounded-md flex justify-center flex-col items-center p-3 text-white hover:shadow-cyan-300 shadow-md hover:bg-gray-600 hover:rotate-[1deg] transition-all transition-500 hover:scale-[1.05]">
        <h3 className="text-xl mb-3">Heading{Title}</h3>
        <img
          src={
            Poster != "N/A"
              ? Poster
              : "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
          }
                  alt={Title}
          width={"200px"}
        />

        <h4 className="text-xl mt-1">Year: {Year}</h4>
      </div>
      ;
    </>
  );
};

export default Card