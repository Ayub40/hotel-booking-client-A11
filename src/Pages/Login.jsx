import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const location = useLocation();
    console.log('location in the login page', location);

    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const from = new FormData(e.currentTarget);
        const email = from.get('email');
        const password = from.get('password');
        console.log(email, password);

        setRegisterError('');
        setSuccess('');

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Success',
                    text: 'Login Successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                // toast('Login Successful');
                // toast('Login Successful');
                navigate(location?.state ? location.state : '/')
                // navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
                toast('email or password are not matching');
                // toast('email or password are not matching');

            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: 'Success',
                    text: 'Login Successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                // toast('Login Successful');
                // toast('Login Successful');
                navigate(location?.state ? location.state : '/')
                // navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
            })
    }



    return (
        <div className="container">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="screen">

                <div className="screen__content">
                    <form onSubmit={handleLogin} className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="email" name="email" className="login__input" placeholder="Email" required />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" name="password" className="login__input" placeholder="Password" required />
                        </div>
                        <button className="button login__submit">
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                    <ToastContainer />
                    {/* <ToastContainer /> */}

                    <div className="social-login">
                        <h3>log in via</h3>
                        <div className="social-icons justify-center flex gap-5 mt-3">
                            <p className="w-10"><button onClick={handleGoogleSignIn} className="">< FcGoogle className="text-3xl"></FcGoogle></button></p>
                            {/* <p className=""><button onClick={handleGithubSignIn} className=" "><FaGithub className="text-3xl"></FaGithub> </button></p> */}
                            {/* <a href="#" className="social-login__icon fab fa-instagram"></a>
                                <a href="#" className="social-login__icon fab fa-facebook"></a>
                                <a href="#" className="social-login__icon fab fa-twitter"></a> */}
                        </div>
                        <ToastContainer />
                        {/* <ToastContainer /> */}

                    </div>
                </div>
                <p className="text-center mt-5 mb-5">Dont’t Have An Account ? <Link className="text-[#FF8C47] font-bold" to='/register'>Register</Link> </p>
                {/* 
                    <div className="border flex gap-10 justify-center ">
                        <p className=""><button onClick={handleGoogleSignIn} className="btn btn-outline ml-2 px-12 ">< FcGoogle></FcGoogle> Google Login</button></p>
                        <p className=""><button onClick={handleGithubSignIn} className="btn btn-outline ml-2 px-12 mb-2"><FaGithub></FaGithub> Github Login</button></p>
                    </div> */}




                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
    );
};

export default Login;