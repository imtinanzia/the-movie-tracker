import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/hook";
import { setUsername } from "../redux-toolkit/slices/user";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkMode);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(setUsername(values.username));
      navigate("/");
      toast.success("Succesfully logged in");
    },
  });

  return (
    <section className={`py-1 ${isDarkTheme && "bg-black text-white"}`}>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
          <div className="flex flex-col mb-[40px]">
            <div>
              <h2 className="text-[90px] font-[600] leading-[80px]">
                The Movie Tracker
              </h2>
            </div>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="mt-4 space-y-[14px]">
              <div className="col-span-full">
                <input
                  name="username"
                  placeholder="Username"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  className="block w-full px-6 py-3 text-black bg-[#D9D9D9] border border-gray-200 rounded-[20px] appearance-none focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm placeholder:font-bold placeholder:text-black"
                />

                {formik.touched.username && formik.errors.username && (
                  <div className="text-red-500">{formik.errors.username}</div>
                )}
              </div>

              <div className="col-span-full">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="block w-full px-6 py-3 text-black bg-[#D9D9D9] border border-gray-200 rounded-[20px] appearance-none placeholder:text-black placeholder:font-bold focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />

                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500">{formik.errors.password}</div>
                )}
              </div>

              <div className="col-span-full pt-[29px] -pb-[80px] ">
                <button
                  type="submit"
                  className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-[#37C6F3] border-2 border-[#37C6F3] rounded-[20px] nline-flex hover:bg-transparent hover:border-[#37C6F3] hover:text-[#37C6F3] focus:outline-none focus-visible:outline-[#37C6F3] text-sm focus-visible:ring-[#37C6F3]"
                >
                  Login
                </button>
              </div>
            </div>

            <p className="text-[#6D6D6D] text-[15px] px-4 my-[10px] ">
              You don’t have an account? ,
              <Link to="/signup">
                <b> SignUp</b>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
