/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlus, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-main_dark_blue text-white">
      {/* wrapper */}
      <div className="wrapper flex justify-between items-center h-[64px] px-10">
        {/* logo & nav */}
        <div className="flex justify-center items-center gap-[30px] text-sm font-semibold">
          <Link href="/">
            <Image
              width={154}
              height={20}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="logo"
            />
          </Link>

          <nav>
            <ul className="flex justify-center items-center gap-[30px]">
              <li>
                <Link href="#">Filmler</Link>
              </li>
              <li>
                <Link href="#">Diziler</Link>
              </li>
              <li>
                <Link href="#">Kişiler</Link>
              </li>
              <li>
                <Link href="#">Daha fazla</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* login & register*/}
        <ul className="flex justify-center items-center gap-[30px] text-sm font-semibold">
          <li>
            <button className="text-xl">
              <FaPlus />
            </button>
          </li>

          <li>
            <button className="border p-1 text-xs font-bold rounded-sm border-white hover:bg-white hover:text-black duration-300">
              TR
            </button>
          </li>

          <li>
            <button>Giriş</button>
          </li>

          <li>
            <button>TMDb'ye Katıl</button>
          </li>

          <li>
            <button className="text-xl text-blue-400">
              <FaSearch />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
