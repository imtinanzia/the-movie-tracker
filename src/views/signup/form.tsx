import { Link } from "react-router-dom";

const Form = ({ formik }: { formik: any }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="my-4 space-y-[14px]">
        <div className="col-span-full">
          <input
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            placeholder="Username"
            className="block w-full px-6 py-3 text-black bg-[#D9D9D9] border border-gray-200 rounded-[20px] appearance-none placeholder:text-black placeholder:font-bold focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />

          {formik.touched.username && formik.errors.username && (
            <div className="text-red-500">{formik.errors.username}</div>
          )}
        </div>

        <div className="col-span-full">
          <input
            name="email"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Email"
            className="block w-full px-6 py-3 text-black bg-[#D9D9D9] border border-gray-200 rounded-[20px] appearance-none placeholder:text-black placeholder:font-bold focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />

          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500">{formik.errors.email}</div>
          )}
        </div>

        <div className="col-span-full">
          <input
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
            className="block w-full px-6 py-3 text-black bg-[#D9D9D9] border border-gray-200 rounded-[20px] appearance-none placeholder:text-black placeholder:font-bold focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />

          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500">{formik.errors.password}</div>
          )}
        </div>

        <div className="col-span-full">
          <input
            name="confirmPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            placeholder="Confirm Password"
            className="block w-full px-6 py-3 text-black bg-[#D9D9D9] border border-gray-200 rounded-[20px] appearance-none placeholder:text-black placeholder:font-bold focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          />

          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-500">{formik.errors.confirmPassword}</div>
          )}
        </div>

        <div className="col-span-full pt-[35px]">
          <button
            type="submit"
            className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-[#37C6F3] border-2 border-[#37C6F3] rounded-[20px] nline-flex hover:bg-transparent hover:border-[#37C6F3] hover:text-[#37C6F3] focus:outline-none focus-visible:outline-[#37C6F3] text-sm focus-visible:ring-[#37C6F3]"
          >
            Register
          </button>
        </div>
      </div>

      <p className="mb-16 mt-[16px] text-[#6D6D6D] px-4">
        Already have an account? ,
        <Link to="/login">
          <b> Login</b>
        </Link>
      </p>
    </form>
  );
};

export default Form;
