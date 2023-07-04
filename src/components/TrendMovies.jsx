"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

const TrendMovies = () => {
  const { trendMovies } = useSelector((state) => state.tmdb);

  const moviesSlice = trendMovies.results?.slice(0, 7);

  return (
    <section className="wrapper px-10 pb-20">
      <h1 className="pt-[30px] pb-5 text-2xl font-semibold">Trend</h1>

      <div className="flex justify-between items-center">
        {moviesSlice?.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col justify-center items-start w-[150px] min-w-[150px] relative"
          >
            <Image
              width={150}
              height={225}
              className="rounded-md min-w-[150px] min-h-[225px]"
              alt="trend-movie"
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
            />

            <div className="absolute bottom-14 left-2">
              <p className="text-white text-sm font-semibold p-2 bg-main_dark_blue rounded-full">
                {movie.vote_average.toFixed(1)}
              </p>
            </div>

            <div className="flex flex-col w-full justify-center h-[52px] items-start gap-2 pt-2 mt-4">
              <h2 className="font-semibold">{movie.title}</h2>

              <p className="text-gray-500  text-sm">{movie.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendMovies;
