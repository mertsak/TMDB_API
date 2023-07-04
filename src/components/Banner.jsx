"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMovie } from "@/redux/services/service";
import Link from "next/link";
import { setSearchData } from "@/redux/tmdbSlice";
import { useEffect } from "react";

const Banner = () => {
  const dispatch = useDispatch();

  const { searchData } = useSelector((state) => state.tmdb);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSearchMovie(searchData));
    searchData && dispatch(setSearchData(""));
  };

  useEffect(() => {
    dispatch(fetchSearchMovie(searchData));
  }, [dispatch, searchData]);

  return (
    <section className="wrapper bannerImg w-full min-h-[300px] max-h-[360px] text-white">
      <div className="w-full h-full flex flex-col justify-center items-start px-10 py-[30px] gap-2">
        <p className="text-5xl font-semibold">Hoş Geldiniz.</p>
        <h1 className="mb-10 text-2xl font-semibold">
          Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
        </h1>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-full h-full relative"
        >
          <input
            onChange={(e) => dispatch(setSearchData(e.target.value))}
            placeholder="Film, dizi, kişi ara..."
            type="text"
            className="w-full rounded-full h-[46px] text-lg border-none px-5 py-[10px] outline-none caret-black text-black"
          />

          <Link
            href={{
              pathname: "/search",
              query: { query: `${searchData}` },
            }}
            className="absolute top-0 right-0 px-6 py-2 searchBg h-[46px] rounded-full flex justify-center items-center"
          >
            search
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Banner;
