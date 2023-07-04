"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Search = () => {
  const { searchMovie } = useSelector((state) => state.tmdb);

  // metin ... ekleme truncate
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <section className="w-full wrapper pt-[30px]">
      <div className="flex justify-start items-start gap-8">
        {/* Search Page Nav */}
        <div className="basis-1/4 w-full max-w-[275px]">
          <ul className="flex flex-col justify-between items-start w-full rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <li className="h-10 flex font-semibold justify-start items-center bg-[#01B4E4] text-white rounded-t-lg w-full p-8 pl-6">
              Arama Sonuçları
            </li>
            <li className="h-10  flex font-semibold justify-start items-center bg-search w-full p-6 pl-6 duration-300 cursor-pointer">
              Filmler
            </li>
            <li className="h-10  flex font-semibold justify-start items-center hover:bg-search w-full p-6 pl-6 duration-300 cursor-pointer">
              Kişiler
            </li>
            <li className="h-10  flex font-semibold justify-start items-center hover:bg-search w-full p-6 pl-6 duration-300 cursor-pointer">
              Diziler
            </li>
            <li className="h-10  flex font-semibold justify-start items-center hover:bg-search w-full p-6 pl-6 duration-300 cursor-pointer">
              Koleksiyonlar
            </li>
            <li className="h-10  flex font-semibold justify-start items-center hover:bg-search w-full p-6 pl-6 duration-300 cursor-pointer">
              Etiketler
            </li>
            <li className="h-10  flex font-semibold justify-start items-center hover:bg-search w-full p-6 pl-6 duration-300 cursor-pointer">
              Şirketler
            </li>
            <li className="h-10  flex font-semibold justify-start items-center hover:bg-search w-full p-6 pl-6 duration-300 cursor-pointer">
              Ağlar
            </li>
          </ul>
        </div>

        {/* Search Page Movies List */}
        <div className="w-full flex flex-col justify-center items-start gap-8 basis-3/4">
          {searchMovie.results?.map((movie) => (
            <Link
              href={`/movie/${movie.id}`}
              key={movie.id}
              className="flex justify-start w-full items-center gap-4  rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer"
            >
              <Image
                width={95}
                height={140}
                className="rounded-md"
                alt="trend-movie"
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
              />
              <div className="flex flex-col w-full justify-center h-[52px] items-start gap-2 pt-2 mt-4">
                <h2 className="font-semibold hover:text-gray-600 duration-300">
                  {movie.title}
                </h2>

                <p className="text-gray-500 text-sm">{movie.release_date}</p>

                <p className="text-sm">{truncate(movie.overview, 250)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;
