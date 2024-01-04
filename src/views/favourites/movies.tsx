import { useAppSelector } from "../../redux-toolkit/hook";
import Card from "../../components/card";

const Movies = () => {
  const movies = useAppSelector((state) => state.movies);
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkMode);
  const favouriteIds = movies.favourites;

  const sortedMovies = favouriteIds.map((id) =>
    movies.suggestToWatch.find((item) => item.id === id)
  );

  return (
    <div className={`${isDarkTheme && "bg-black"}`}>
      <div className="mb-16 lg:mb-auto">
        <div className="w-full p-4">
          <div className="lg:w-[96%] w-[93%] mx-auto">
            <p className="lg:mt-8 font-bold text-[20px] -mb-4 mx-4">
              My Favourites
            </p>

            {sortedMovies.length > 0 ? (
              <div className="grid grid-cols-7 mb-16">
                {sortedMovies.map((item) => (
                  <div
                    key={item?.id}
                    className="lg:min-h-[360px] h-auto flex justify-center items-center"
                  >
                    {item && <Card {...item} />}
                  </div>
                ))}
              </div>
            ) : (
              <div className="min-h-[100vh] py-8">
                <h1>Nothing in favourites to show</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
