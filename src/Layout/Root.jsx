import { Outlet } from "react-router-dom";
import Footer from "../ExtraPage/Footer";
import Navbar from "../Shared/Navbar";


const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;