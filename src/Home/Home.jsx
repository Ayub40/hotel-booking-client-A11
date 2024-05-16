
import { Map } from "pigeon-maps";
import Banner from "./Banner";
import Newsletter from "./Newsletter ";
import Room from "./Room";
import SpecialOffer from "./SpecialOffer";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();
// import 'animate.css';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Newsletter></Newsletter>
            <Room></Room>
            <Map></Map>
            <SpecialOffer></SpecialOffer>
        </div>
    );
};

export default Home;