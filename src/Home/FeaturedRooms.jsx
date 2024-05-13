import { useEffect, useState } from "react";
import RoomAvailable from "./RoomAvailable";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import 'animate.css';


const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:2000/room/Availability')
    //         .then(res => res.json())
    //         .then(data => {
    //             const filterRooms = data.filter(room => room.Availability === 'Available');
    //             setRooms(filterRooms);
    //             setRooms(data);
    //         })
    // }, [])




    return (
        < div className="mt-24" >
            <div className="text-center space-y-5">
                <h3 className="text-2xl font-bold text-[#FF3811] ">Service</h3>
                <h2 className="text-5xl">Our Room</h2>
                <p>Escape to comfort and style. Experience tranquility in our meticulously curated space. Perfect for business or leisure, indulge in luxury and relaxation. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {
                    rooms.map(room =>
                        <RoomAvailable
                            key={room._id}
                            room={room}
                        ></RoomAvailable>
                    )
                }
            </div>
        </div >
    );
};

export default FeaturedRooms;