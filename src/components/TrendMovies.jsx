"use client";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

const TrendMovies = () => {
  const { trendMovies } = useSelector((state) => state.tmdb);

  return (
    <section className="wrapper px-10 pb-20">
      {/* Trend Movies Header */}
      <h1 className="pt-[30px] pb-5 text-2xl font-semibold">Trend</h1>

      {/* Trend Movies List */}
      <div className="flex justify-between items-center relative gap-6 overflow-x-scroll trenMovie  overflow-y-hidden">
        {trendMovies.results?.map((movie) => (
          <Link
            href={`/movie/${movie.id}`}
            key={movie.id}
            className="flex flex-col justify-center items-start w-[150px] min-w-[150px] relative"
          >
            {/* Trend Movies Image */}
            <Image
              width={150}
              height={225}
              className="rounded-md min-w-[150px] min-h-[225px]"
              alt="trend-movie"
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
            />

            {/* Trend Movies vote */}
            <div className="absolute bottom-[85px] left-2">
              <p className="text-white text-sm font-semibold p-2 bg-main_dark_blue rounded-full">
                {movie.vote_average.toFixed(1)}
              </p>
            </div>

            {/* Trend Movies text */}
            <div className="flex flex-col w-full justify-center h-[100px] items-start gap-2 pt-2">
              <h2 className="font-semibold">{movie.title}</h2>

              <p className="text-gray-500  text-sm">{movie.release_date}</p>
            </div>
          </Link>
        ))}

        {/* Trend Movies List overlay */}
        <div className="bg-[url('https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg')] absolute -z-10 top-24 bottom-0 left-0 right-0"></div>
      </div>
    </section>
  );
};

export default TrendMovies;
