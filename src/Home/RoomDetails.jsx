import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const RoomDetails = () => {

    const room = useLoaderData();

    const { _id, RoomDescription, PricePerNight, RoomSize, Availability, RoomImages } = room;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-10">
            <div className="">
                <figure><img className="w-1/2 mb-3 rounded" src={RoomImages[0]} alt="Album" /></figure>
                <figure><img className="w-1/2 rounded" src={RoomImages[1]} alt="Album" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">Room Description : {RoomDescription}</h2>
                <p>Price PerNight : {PricePerNight}</p>
                <p>Room Size :{RoomSize} </p>
                <p>Availability : {Availability}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;