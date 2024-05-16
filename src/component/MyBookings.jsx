import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { data } from "autoprefixer";
import MyBookDetails from "./MyBookDetails";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import Review from "./Review";
import moment from "moment";


const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [selectedId, setselectedId] = useState(null);
    console.log(bookings, selectedId);

    // update
    // const room = useLoaderData();
    // const { _id, RoomDescription, PricePerNight, RoomSize, Availability, RoomImages, SpecialOffers } = room;

    const url = `http://localhost:2000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    // const updateBooking = ('http://localhost:2000/bookings');
    // useEffect(() => {
    //     fetch(updateBooking)
    //         .then(res => res.json())
    //         .then(data => setBookings(data))
    //         .catch(error => console.error('Error booking', error))
    // }, [])

    const handleUpdateBooking = (newDate) => {
        // console.log(bookingId, newDate);
        // event.preventDefault();

        // const form = event.target;
        // const name = form.name.value;
        // const date = form.date.value;
        // const email = user?.email;
        // const booking = {
        //     customerName: name,
        //     email,
        //     date,
        // }
        // console.log(booking);


        fetch(`http://localhost:2000/bookinges/${selectedId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ newDate })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Item Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    const handleDelete = (_id, roomId, bookedDate, Availability) => {
        const cancelDateLimit = moment(bookedDate).subtract(1, 'days');
        if (moment().isAfter(cancelDateLimit)) {
            Swal.fire({
                title: 'Error',
                text: 'You can only cancel bookings at least 1 day before the booked date.',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
            return;
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:2000/bookings/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            // Update availability if the booking is successfully deleted
                            fetch(`http://localhost:2000/rooms/${roomId}`, {
                                method: 'PUT',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ Availability: 'available' })
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data);
                                })
                                .catch(error => console.error('Error updating availability:', error));

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your booking has been deleted.",
                                icon: "success"
                            });

                            setBookings(prevBookings => prevBookings.filter(booking => booking._id !== _id));
                        }
                    });
            }
        });
    };






    // const handleDelete = (_id, roomId, Availability) => {

    //     console.log(_id);
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //         if (result.isConfirmed) {

    //             fetch(`http://localhost:2000/bookings/${_id}`, {
    //                 method: 'DELETE',
    //             })
    //                 .then(res => res.json())
    //                 .then(date => {
    //                     console.log(date);
    //                     if (date.deletedCount > 0) {

    //                         if (Availability === 'unavailable') {

    //                             fetch(`http://localhost:2000/rooms/${roomId}`, {
    //                                 method: 'PUT',
    //                                 headers: {
    //                                     'Content-Type': 'application/json'
    //                                 },
    //                                 body: JSON.stringify({ Availability: 'available' })
    //                             })
    //                                 .then(res => res.json())
    //                                 .then(data => {
    //                                     console.log(data);

    //                                 })
    //                                 .catch(error => console.error('Error updating availability:', error));
    //                         }

    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your item has been deleted.",
    //                             icon: "success"
    //                         });



    //                         setBookings(prevBookings => prevBookings.filter(booking => booking._id !== _id));
    //                     }
    //                 })
    //         }
    //     });
    // }



    //     const handleDelete = (_id, roomId, Availability) => {
    //         console.log(_id);
    //         Swal.fire({
    //             title: "Are you sure?",
    //             text: "You won't be able to revert this!",
    //             icon: "warning",
    //             showCancelButton: true,
    //             confirmButtonColor: "#3085d6",
    //             cancelButtonColor: "#d33",
    //             confirmButtonText: "Yes, delete it!"
    //         }).then((result) => {
    //             if (result.isConfirmed) {

    //                 fetch(`http://localhost:2000/bookings/${_id}`, {
    //                     method: 'DELETE',
    //                 })
    //                     .then(res => res.json())
    //                     .then(date => {
    //                         console.log(date);
    //                         if (date.deletedCount > 0) {


    //                             if (Availability === 'unavailable') {
    //                                 fetch(`http://localhost:2000/rooms/${roomId}`), {
    //                                     method: 'PUT',
    //                                     headers: {
    //                                         'Content-Type': 'application/json'
    //                                     },
    //                                     body: JSON.stringify({ Availability: 'available' })
    //                                 }
    //                             }


    //                 Swal.fire({
    //                     title: "Deleted!",
    //                     text: "Booking deleted.",
    //                     icon: "success",
    //                     confirmButtonText: 'Cool'
    //                 });

    //                 const remaining = bookings.filter(booking => booking._id !== _id)
    //                 setBookings(remaining);


    //             }
    //         })
    //     }
    // });
    //     }


    return (
        <div>
            <h2 className="text-5xl">My Bookings: {bookings.length} </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                                Image
                            </th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Cancel</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking =>
                                <MyBookDetails
                                    key={bookings._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    // handleDelete={(id, room_id, availability) => handleDelete(id, room_id, availability)}
                                    handleUpdateBooking={handleUpdateBooking}
                                    setselectedId={setselectedId}
                                ></MyBookDetails>)
                        }


                    </tbody>


                </table>
            </div>
            {/* <div className="border">
            <Review></Review>
            </div> */}
        </div>
    );
};

export default MyBookings;