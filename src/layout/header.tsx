import { debounce } from "lodash";
import { ChangeEvent, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/hook";

import {
  addToCurrentlyWatching,
  addToSuggestToWatch,
} from "../redux-toolkit/slices/movies";

import { setSearchString } from "../redux-toolkit/slices/search";
import { FaPowerOff } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { setUsername } from "../redux-toolkit/slices/user";

const Header = () => {
  const movies = useAppSelector((state) => state.movies);
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkMode);
  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.user.username);
  const search = useAppSelector((state) => state.search.searchString);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (location.pathname !== "/") {
      navigate("/");
    }

    dispatch(setSearchString(e.target.value));

    const searchedItem = movies.suggestToWatch.filter((x) =>
      x?.title?.toLowerCase().includes(e.target.value.toLowerCase())
    );

    const searchedCItem = movies.currentlyWatching.filter((x) =>
      x?.title?.toLowerCase().includes(e.target.value.toLowerCase())
    );

    dispatch(addToSuggestToWatch(searchedItem));
    dispatch(addToCurrentlyWatching(searchedCItem));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleSearch = useCallback(debounce(handleSearch, 1000), []);

  return (
    <div className={`${isDarkTheme && "bg-black text-white"}`}>
      <div className="lg:flex justify-between items-center px-8 text-6xl font-bold space-y-8 max-w-[1300px] mx-auto">
        <Link to={"/"} className="w-1/6 cursor-pointer">
          The Movie Tracker
        </Link>

        <div className="flex items-center lg:justify-center lg:px-5">
          <div className="rounded-lg bg-gray-200 sm:px-5 py-1 w-[400px]">
            <div className="flex justify-center">
              <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 p-5">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="pointer-events-none absolute w-5 fill-gray-500 transition"
                >
                  <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                </svg>
              </div>

              <input
                type="text"
                className="w-full max-w-[200px] pl-2 text-base font-semibold outline-0 bg-gray-200"
                placeholder="Search a movie or a series"
                onChange={(e) => debouncedHandleSearch(e)}
                defaultValue={search}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <p className="text-xl font-semi-bold">Welcome , {username}</p>

          <FaPowerOff
            className="h-[16px] w-[16px] cursor-pointer"
            onClick={() => {
              Cookies.remove("username");
              dispatch(setUsername(""));
              navigate("/login");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
