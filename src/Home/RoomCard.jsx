import { Link } from "react-router-dom";


const RoomCard = ({ room }) => {

    const { _id, RoomDescription, RoomImages, PricePerNight } = room;


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={RoomImages[0]} alt="Shoes" className="rounded-xl" />
                {/* <img src={RoomImages[1]} alt="Shoes" className="rounded-xl" /> */}
            </figure>
            <div className="card-body">
                <h2 className="card-title">{RoomDescription}</h2>
                <p className="text-[#FF3811] font-semibold text-xl">Price: ${PricePerNight}</p>
                <div className="card-actions">
                    <Link to={`/book/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;