import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import RoomCard from "./RoomCard";


const Room = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetch('http://localhost:2000/room')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])



    return (
        < div className="mt-24" >
            <div className="text-center space-y-5">
                <h3 className="text-2xl font-bold text-[#FF3811] ">Service</h3>
                <h2 className="text-5xl">Our Room</h2>
                <p>Escape to comfort and style. Experience tranquility in our meticulously curated space. Perfect for business or leisure, indulge in luxury and relaxation. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {/* <p>Services {services.length}</p> */}
                {
                    rooms.map(room =>
                        <RoomCard
                            key={room._id}
                            room={room}
                        ></RoomCard>)
                }
            </div>
        </div >
    );
};

export default Room;