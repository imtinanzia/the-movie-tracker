import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../redux-toolkit/hook";
import { setUsername } from "../redux-toolkit/slices/user";
import { initialValues, validationSchema } from "../constants/signup";
import Form from "../views/signup/form";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkMode);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(setUsername(values.username));
      toast.success("Successfully Signup");
      navigate("/");
    },
  });

  return (
    <div className={`${isDarkTheme && "bg-black text-white"}`}>
      <div className="relative items-center w-full px-5 py-4 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
          <div className="flex flex-col mb-[40px]">
            <div>
              <h2 className="text-[90px] font-[600] leading-[80px]">
                The Movie Tracker
              </h2>
            </div>
          </div>

          <Form formik={formik} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
