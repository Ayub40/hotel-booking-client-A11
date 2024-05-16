import { Link } from "react-router-dom";


const RoomCard = ({ room, rooms, setRooms }) => {

    const { _id, RoomDescription, RoomImages, PricePerNight } = room;


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <div className="flex gap-3 h-3/4">
                    <Link to={`/roomdetail/${_id}`}><button><img src={RoomImages[0]} alt="Shoes" className="rounded-xl w-[600px] " /></button></Link>

                    <Link to={`/roomdetail/${_id}`}><img src={RoomImages[1]} alt="Shoes" className="rounded-xl w-[600px]" /></Link>

                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{RoomDescription}</h2>
                <p className="text-[#FF3811] font-semibold text-xl">Price: ${PricePerNight}</p>
                {/* <div className="card-actions">
                    <Link to={`/roomdetail/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default RoomCard;