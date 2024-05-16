import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import axios from 'axios'

const RoomDetails = () => {
    // const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext);

    const room = useLoaderData();
    const { _id, RoomDescription, PricePerNight, RoomSize, Availability, RoomImages, SpecialOffers } = room;
    const [bookings, setBookings] = useState([]);
    const [isBookingConfirm, setIsBookingConfirm] = useState(false);

    const [bids, setBids] = useState([])


    const handleBooking = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            date,
            booking: _id,
            RoomDescription,
            PricePerNight,
            RoomSize,
            Availability,
            RoomImages,
            SpecialOffers
        }
        console.log(booking);


        // send data to the server
        fetch('http://localhost:2000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.insertedId) {
                if (data.success) {
                    setIsBookingConfirm(true);
                    Swal.fire({
                        title: 'Success',
                        text: 'Booking confirmed',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
                else {
                    Swal.fire({
                        title: 'Error',
                        text: data.message || 'Failed to confirm booking',
                        icon: 'error',
                        confirmButtonText: 'Try Again'
                    });
                }
            })
            // catch
            .catch(error => {
                console.error('Error during booking:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'An error occurred during booking. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            });

    }


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
                {/* <p>Availability : {Availability}</p> */}

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                {
                    !isBookingConfirm && (
                        <button className="btn bg-[#244D61] text-white" onClick={() => document.getElementById('my_modal_1').showModal()} disabled={Availability === 'unavailable'}>Book Now</button>
                    )
                }

                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <figure><img className="w-1/2 mb-3 rounded" src={RoomImages[0]} alt="Album" /></figure>

                        <h3 className="font-bold text-lg">Room Description : {RoomDescription}</h3>
                        <p className="py-4">Price PerNight : {PricePerNight}</p>
                        <p>Room Size :{RoomSize}</p>
                        <p>Special Offers : {SpecialOffers} </p>
                        <form onSubmit={handleBooking}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" value={user?.displayName} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-block bg-[#244D61] text-white mt-2" type="submit" value="Confirm Booking" disabled={Availability === 'unavailable' || isBookingConfirm} />
                            </div>
                        </form>
                        {/* <button className="bg-[#244D61] text-white btn mt-2">Confirm Booking</button> */}
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>

                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default RoomDetails;