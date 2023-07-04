"use client";
import { useEffect } from "react";
import { fetchSingleMovie, fetchMovieCredits } from "@/redux/services/service";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { BsFillPlayFill, BsFillBookmarkFill } from "react-icons/bs";

const Movie = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { singleMovie, movieCredits } = useSelector((state) => state.tmdb);

  useEffect(() => {
    dispatch(fetchSingleMovie(id));
    dispatch(fetchMovieCredits(id));
  }, [dispatch, id]);

  return (
    <section className="text-white pb-[30px]">
      {/* Movie Info Nav */}
      <ul className="flex justify-center items-center w-full gap-6 p-[15px] wrapper text-black">
        <li>Özet</li>
        <li>Medya</li>
        <li>Hayranlar</li>
        <li>Paylaş</li>
      </ul>

      {/* Single Movie Info */}
      <div
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${singleMovie?.backdrop_path})`,
          objectFit: "cover",
        }}
      >
        <div className="flex justify-center items-center w-full p-10 moviebg">
          {singleMovie && (
            <div className="flex justify-center items-center w-full gap-6">
              <div>
                <Image
                  width={300}
                  height={450}
                  className="rounded-md min-w-[300px]"
                  alt="single-movie"
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${singleMovie.poster_path}`}
                />
              </div>

              <div className="flex flex-col justify-center items-start min-h-[400px] max-w-[900px] gap-8">
                <div className="flex flex-col justify-center items-start gap-4">
                  <h2 className="text-3xl font-semibold flex justify-center items-center gap-4">
                    {singleMovie.title}
                    <span>({singleMovie.release_date?.split("-")[0]})</span>
                  </h2>

                  <span>
                    {singleMovie.release_date} -{" "}
                    {singleMovie.genres?.map((genre) => genre.name).join(", ")}{" "}
                    - {singleMovie.runtime} dk
                  </span>

                  <div className="flex justify-center items-center gap-4">
                    <button className="bg-main_dark_blue p-3 rounded-full">
                      <AiOutlineUnorderedList className="text-sm" />
                    </button>
                    <button className="bg-main_dark_blue p-3 rounded-full">
                      <AiFillHeart className="text-sm" />
                    </button>
                    <button className="bg-main_dark_blue p-3 rounded-full">
                      <BsFillBookmarkFill className="text-sm" />
                    </button>
                    <button className="bg-main_dark_blue p-3 rounded-full">
                      <AiFillStar className="text-sm" />
                    </button>

                    <button className="flex justify-center items-center gap-2">
                      <BsFillPlayFill className="text-2xl" />
                      Fragmanı Oynat
                    </button>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start">
                  <p className="text-gray-300 text-sm">{singleMovie.tagline}</p>

                  <p className="text-sm my-5 flex flex-col justify-center items-start gap-4">
                    <span>Özet</span> {singleMovie.overview}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Single Movie Casts Info */}
      <div className="wrapper flex flex-col justify-center items-start pt-[30px] text-black gap-4">
        <h2 className="text-xl font-semibold">Başrol Oyuncuları</h2>

        <div className="flex justify-start gap-8 items-center w-full min-h-[330px] overflow-x-scroll trenMovie  overflow-y-hidden">
          {movieCredits.cast?.map((cast) => (
            <div
              key={cast.id}
              className="flex flex-col justify-center min-w-[140px] w-[140px] min-h-[290px] items-start shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            >
              <Image
                width={140}
                height={175}
                className="rounded-md min-w-[140px] min-h-[175px]"
                alt="trend-movie"
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${cast.profile_path}`}
              />

              <div className="flex flex-col w-full justify-center h-[72px] max-w-[140px] items-start gap-1 p-2 mt-2">
                <h2 className="font-semibold text-sm">{cast.original_name}</h2>

                <p className="text-gray-500 text-xs">{cast.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Movie;
