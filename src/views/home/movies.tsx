import { useAppSelector } from "../../redux-toolkit/hook";
import Slider from "react-slick";

import {
  PreviousSetting,
  SuggestSetting,
  settings,
} from "../../constants/slider-settings";

import Card from "../../components/card";
import { Link } from "react-router-dom";

const Movies = () => {
  const search = useAppSelector((state) => state.search.searchString);
  const movies = useAppSelector((state) => state.movies);
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <div className="pt-8">
      <Link
        to={"favourites"}
        className={`${
          isDarkTheme ? "bg-white text-black" : "bg-black text-white"
        } rounded-full px-4 py-1 mx-16`}
      >
        My Favourites
      </Link>
      {search.length === 0 && (
        <div className="w-full lg:flex items-start gap-[120px] px-4">
          <div className="lg:w-[32%] w-[96%] mx-auto p-4">
            <p className="pt-8 font-bold text-[20px] px-4 -mb-4">
              Currently Watching
            </p>

            <Slider {...settings}>
              {movies.currentlyWatching.map((item) => (
                <div
                  key={item.id}
                  className="lg:min-h-[360px] h-auto flex justify-center items-center"
                >
                  <Card {...item} />
                </div>
              ))}
            </Slider>
          </div>

          <div className="lg:w-[58%] w-[96%] mx-auto p-4">
            <p className="lg:mt-8 font-bold text-[20px] px-4 -mb-4">
              Suggested To Watch
            </p>

            <div className="w-full ">
              <Slider {...SuggestSetting}>
                {movies.suggestToWatch.map((item) => (
                  <div
                    key={item.id}
                    className="lg:min-h-[360px] h-auto flex justify-center items-center"
                  >
                    <Card {...item} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}

      {search.length === 0 && (
        <div className="lg:-mt-24 mb-16 lg:mb-auto">
          <div className="w-full p-4">
            <div className="lg:w-[96%] w-[93%] mx-auto">
              <p className="lg:mt-8 font-bold text-[20px] -mb-4 mx-4">
                Previously Watched
              </p>

              <Slider {...PreviousSetting}>
                {movies.suggestToWatch.map((item) => (
                  <div
                    key={item.id}
                    className="lg:min-h-[360px] h-auto flex justify-center items-center"
                  >
                    <Card {...item} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}

      {search.length > 0 && (
        <div className="p-4">
          <p>
            <b> Showing results for </b>
            {search}
          </p>

          <div className="grid grid-cols-6 gap-4 mb-32">
            {movies.currentlyWatching?.length > 0 ? (
              movies.currentlyWatching
                .slice(0, 6)
                .map((item) => <Card {...item} key={item.title} />)
            ) : (
              <p className="p-4 whitespace-nowrap">
                Nothing found against your query
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
