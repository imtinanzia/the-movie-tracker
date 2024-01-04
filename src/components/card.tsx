import {
  FaChevronDown,
  FaHeart,
  FaPlayCircle,
  FaRegHeart,
} from "react-icons/fa";
import {
  Movie,
  addToFavorites,
  removeFromFavorites,
} from "../redux-toolkit/slices/movies";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/hook";
import { toast } from "react-toastify";

const Card = ({ image, title, id }: Movie) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favIDS = useAppSelector((state) => state.movies.favourites);

  const IsFav = favIDS.includes(id);

  const handleAddToFavorites = (movieId: string) => {
    const existingFavoriteIds = Cookies.get("favoriteIds");
    const parsedFavoriteIds = existingFavoriteIds
      ? JSON.parse(existingFavoriteIds)
      : [];
    const isAlreadyInFavorites = parsedFavoriteIds.includes(movieId);
    dispatch(addToFavorites(movieId));
    toast.success("Added To Favourite");

    if (isAlreadyInFavorites) {
      const updatedFavoriteIds = parsedFavoriteIds.filter(
        (favId: string) => favId !== movieId
      );
      Cookies.set("favoriteIds", JSON.stringify(updatedFavoriteIds));
      dispatch(removeFromFavorites(movieId));
      toast.success("Removed From Favourite");
    } else {
      const updatedFavoriteIds = [...parsedFavoriteIds, movieId];
      Cookies.set("favoriteIds", JSON.stringify(updatedFavoriteIds));
    }
  };

  return (
    <div className="group bg-zinc-900 col-span relative md:h-[12vw] h-[32vw] my-8 max-w-[177px] mx-auto w-[96%] rounded-[20px]">
      <img
        src={process.env.REACT_APP_IMAGE_URL + image}
        alt="Movie"
        draggable={false}
        className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full md:h-[16vw] h-full"
      />

      <div className="opacity-0 absolute top-0 transition duration-200 z-10 mt-16 -ml-10 invisible sm:visible delay-300 w-[200px] scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100 ">
        <img
          src={process.env.REACT_APP_IMAGE_URL + image}
          alt="Movie"
          draggable={false}
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
              <FaPlayCircle
                onClick={() => navigate("/movie/" + id)}
                className="text-black w-4 lg:w-6 cursor-pointer"
              />
            </div>

            {IsFav ? (
              <FaHeart
                onClick={() => handleAddToFavorites(id)}
                className="text-red-600 w-4 lg:w-6 cursor-pointer"
              />
            ) : (
              <FaRegHeart
                onClick={() => handleAddToFavorites(id)}
                className="w-4 lg:w-6 cursor-pointer text-white"
              />
            )}

            <div className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
              <FaChevronDown className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
            </div>
          </div>

          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
