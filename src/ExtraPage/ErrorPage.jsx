import { Link } from "react-router-dom";
import error from '../assets/404.gif';


const ErrorPage = () => {
    return (
        <div className="mx-auto text-center items-center mt-10 font-bold">
            <img className='mx-auto' src={error} alt="" />
            <Link className="btn bg-success text-white" to="/">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;