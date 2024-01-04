import { useAppSelector } from "../redux-toolkit/hook";

const Loader = () => {
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkMode);
  return (
    <div
      className={`py-32 w-full flex justify-center min-h-[100vh] ${
        isDarkTheme && "bg-black"
      }`}
    >
      <div className="flex flex-row gap-2">
        <div
          className={`w-4 h-4 rounded-full ${
            isDarkTheme ? "bg-white" : "bg-black"
          } animate-bounce [animation-delay:.7s]`}
        />

        <div
          className={`w-4 h-4 rounded-full ${
            isDarkTheme ? "bg-white" : "bg-black"
          } animate-bounce [animation-delay:.3s]`}
        />

        <div
          className={`w-4 h-4 rounded-full ${
            isDarkTheme ? "bg-white" : "bg-black"
          } animate-bounce [animation-delay:.7s]`}
        />
      </div>
    </div>
  );
};

export default Loader;
