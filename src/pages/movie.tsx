import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/axios";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/hook";
import { addToSelectedMovies } from "../redux-toolkit/slices/movies";
import Loader from "../components/loader";
import Movies from "../views/movie/main";
import { toast } from "react-toastify";

const Movie = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkMode);

  const getMovie = async () => {
    setLoading(true);

    await axiosInstance
      .get("3/movie/" + id)
      .then((res) => {
        const data = {
          image: res.data.backdrop_path,
          title: res.data?.original_title,
          description: res.data?.overview,
          id: res.data?.id,
          genres: res.data?.genres,
          backdrop_path: res.data?.backdrop_path,
          homepage: res.data?.homepage,
          rating: res.data?.vote_average,
          views: res.data?.runtime,
        };

        dispatch(addToSelectedMovies(data));

        setLoading(false);
      })
      .catch((err: any) => {
        toast.error(err.message);
      });
  };

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className={`${isDarkTheme && "bg-black text-white"}`}>
      {loading ? <Loader /> : <Movies />}
    </div>
  );
};

export default Movie;
