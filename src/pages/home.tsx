import { useEffect, useState, useMemo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/hook";
import axiosInstance from "../utils/axios";

import {
  addToCurrentlyWatching,
  addToSuggestToWatch,
} from "../redux-toolkit/slices/movies";

import Loader from "../components/loader";
import Movies from "../views/home/movies";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkMode);

  const getNowPlayingMovies = useCallback(async () => {
    try {
      const res = await axiosInstance.get(
        "3/movie/now_playing?language=en-US&page=1"
      );

      const data = res.data.results.map((x: any) => ({
        image: x?.backdrop_path,
        title: x?.original_title,
        description: x?.overview,
        id: x?.id,
      }));

      dispatch(addToCurrentlyWatching(data));
    } catch (err: any) {
      toast.error(err.message);
    }
  }, [dispatch]);

  const getPopularMovies = useCallback(async () => {
    try {
      const res = await axiosInstance.get(
        "3/movie/popular?language=en-US&page=1"
      );

      const data = res.data.results.map((x: any) => ({
        image: x?.backdrop_path,
        title: x?.original_title,
        description: x?.overview,
        id: x?.id,
      }));

      dispatch(addToSuggestToWatch(data));
    } catch (err: any) {
      toast.error(err.message);
    }
  }, [dispatch]);

  const memoizedGetNowPlayingMovies = useMemo(
    () => getNowPlayingMovies,
    [getNowPlayingMovies]
  );

  const memoizedGetPopularMovies = useMemo(
    () => getPopularMovies,
    [getPopularMovies]
  );

  const getCurrentWatchedData = async () => {
    setLoading(true);

    await memoizedGetNowPlayingMovies();
    await memoizedGetPopularMovies();

    setLoading(false);
  };

  useEffect(() => {
    getCurrentWatchedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memoizedGetNowPlayingMovies, memoizedGetPopularMovies]);

  return (
    <div className={`${isDarkTheme && "bg-black text-white min-h-screen"}`}>
      <div className="max-w-[1300px] mx-auto">
        {loading ? <Loader /> : <Movies />}
      </div>
    </div>
  );
};

export default Home;
