"use client";
import Banner from "@/components/Banner";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTrendMovies } from "@/redux/services/service";
import TrendMovies from "@/components/TrendMovies";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendMovies());
  }, [dispatch]);

  return (
    <main>
      <Banner />
      <TrendMovies />
    </main>
  );
}
