import { useAppSelector } from "../../redux-toolkit/hook";
import { FaPlayCircle, FaRegBookmark } from "react-icons/fa";

const Movies = () => {
  const movie = useAppSelector((state) => state.movies.selectedMovies);

  return (
    <div className="p-8 max-w-[1300px] mx-auto">
      <div className="sm:flex justify-between items-center mb-8">
        <p className="sm:text-[48px] text-[24px] whitespace-nowrap font-bold">
          {movie.title}
        </p>

        <div>
          <div className="bg-gray-200 p-4 flex gap-[8px] rounded-full items-center sm:ml-auto cursor-pointer w-2/3 sm:w-auto">
            <FaRegBookmark />

            <p>Add To Wishlist </p>
          </div>
        </div>
      </div>

      <div className="lg:flex gap-[32px]">
        <img
          src={process.env.REACT_APP_IMAGE_URL + movie.image}
          className="h-[291px] lg:w-[196px] w-[280px] rounded-[20px] object-cover"
          alt=""
        />

        <div>
          <div className="grid xl:grid-cols-7 sm:grid-cols-6 grid-cols-3 gap-[16px] my-4">
            {movie.genres?.map((x: any) => (
              <p
                key={x?.id}
                className="border h-[33px] rounded-[20px] p-[8px] border-black flex justify-center items-center"
              >
                {x?.name}
              </p>
            ))}
          </div>

          <div className="w-full sm:flex items-start">
            <div>
              <p className="sm:w-2/3 text-[18px] text-[500] ">
                {movie.description}
              </p>

              <div className="flex gap-[9px] mt-4 items-center">
                <div>
                  <p className="text-[18px]">IMDB Rating</p>

                  <p className="text-[15px] mx-4">
                    ⭐ {movie.rating?.toFixed(2) || 0}
                    <span className="text-[#636363] text-[12px]">/10</span>
                  </p>
                </div>

                <p>{movie.views || 0}k views</p>
              </div>
            </div>

            {process.env.REACT_APP_IMAGE_URL && movie?.backdrop_path && (
              <div
                className="h-[320px] max-w-[520px] w-full ml-auto bg-no-repeat bg-cover bg-center flex justify-center items-center rounded-[20px] sm:-mt-16 mt-4 mb-8"
                style={{
                  backgroundImage: `url(${
                    process.env.REACT_APP_IMAGE_URL + movie?.backdrop_path
                  })`,
                }}
              >
                <FaPlayCircle
                  className="h-[40px] w-[40px] text-white cursor-pointer"
                  onClick={() => window.open(movie.homepage)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
