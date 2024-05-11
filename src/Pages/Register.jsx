import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {

    const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // reset error and success
        setRegisterError('');
        setSuccess('');


        // typeof password
        if (password.length < 6) {
            setRegisterError('');
            return toast('Password should be at least 6 characters or longer')

        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('');
            return toast('Your password should have at least one upper case characters')

        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('');
            toast('Your password should have at least one lower case characters')

        }

        // create user
        createUser(email, password, photo, name)
            .then(result => {
                logOut('');
                toast('Registration Successful');
                // toast('Registration Successful');
                updateUserProfile(name, photo)
                    .then(() => { })
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })

    }


    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div>
                <h2 className="text-3xl my-10 text-center">Register your account</h2>

                <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative border">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" className="input input-bordered w-full" required />
                            <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <ToastContainer />
                </form>
                <p className="text-center mt-4">Already have an account ? <Link className="text-[#FF8C47] font-bold" to='/login'>Login</Link> </p>
            </div>

        </div>
    );
};

export default Register;