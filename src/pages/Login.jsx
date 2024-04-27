// import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsEyeFill } from "react-icons/bs";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
// import SocialLogin from "../components/SocialLogin";
import useAuth from "../hooks/useAuth";
import SocialLogin from "../components/SocialLogin";



const Login = () => {
    const {loginUser} = useAuth()
    const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
const [open, setOpen] = useState(false);
const toggle = () => {
  setOpen(!open);
};
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        const { email, password } = data;
       
        loginUser(email, password)
        .then((result) => {
            if (result.user) {
              navigate(from);
            }
          });
          
      };
    return (
        <main>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>PhoenixPark | Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet> */}
      <div className="hero min-h-screen ">
        <div className="hero-content ">
          <div className="card shrink-0 shadow-2xl bg-base-100">
            <p className="text-2xl text-center font-bold mt-8">
              Login your account
            </p>
            <div className="divider w-3/4 mx-auto"></div>
            <form
              className="card-body  w-[320px] md:w-[440px] lg:w-[540px]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered "
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-[#135D66] font-bold">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                   type={open === false ? "password" : "text"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                   <div className="absolute right-16 mt-[52px]">
                  {open === false ? (
                    <BsEyeFill onClick={toggle} />
                  ) : (
                    <IoEyeOffOutline onClick={toggle} />
                  )}
                </div>
                {errors.password && (
                  <span className="text-[#135D66] font-bold">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn glass bg-[#135D66] text-white font-bold">Login</button>
              </div>
              <small className="text-center font-bold">
                Dont’t Have An Account ?{" "}
                <Link to="/register" className="text-[#135D66]">
                  Register
                </Link>
              </small>
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </main>
    );
};

export default Login;