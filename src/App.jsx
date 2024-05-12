import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card";

const API_URL = "http://www.omdbapi.com/?apikey=809042f";


function App() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);


  async function searchMovies(title) {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const result = await response.json();
      setData(result.Search);
      console.log(result.Search);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearch = () => {
      movies(title);
  }

  // useEffect(() => {
  // },[])

  return (
    <>
      <div className="bg-gray-700 min-h-screen w-screen flex ">
        <NavBar />

        <div className="flex flex-col w-full min-h-screen justify-center">
          {/* Heading */}
          <div className="heading mt-7 mb-[4rem]">
            <h1 className="text-3xl font-bold text-white text-center">
              Welcome to{" "}
              <span className="text-cyan-500 font-serif text-4xl">MOVIX</span>{" "}
            </h1>
           
          </div>

          {/* Searchbar */}
          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Enter.."
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="p-3 rounded-lg w-[25rem] bg-slate-600 text-xl text-white"
            />
            <button
              className="ml-4 p-3 rounded-lg bg-slate-500 text-white text-xl hover:bg-slate-600 shadow-sm hover:shadow-white"
              onClick={() => {
                searchMovies(title);
              }}
            >
              Search
            </button>
          </div>

          {/* Card */}

          {data?.length > 0 ? (
            <>
              <div className="flex items-center justify-center">
                <div className="w-[90%]  m-2  flex items-center justify-center space-between flex-wrap gap-5 p-10">
                  {data.map((movie, index) => (
                    <Card key={index} movie={movie} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
