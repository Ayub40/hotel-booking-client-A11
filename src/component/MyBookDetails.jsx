import { useContext, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
// import { AuthContext } from "../Context/AuthProvider";


const MyBookDetails = ({ booking, handleDelete, handleUpdateBooking, setselectedId }) => {
    // const { user } = useContext(AuthContext);

    const { _id, RoomDescription, PricePerNight, date, RoomSize, Availability, RoomImages, SpecialOffers, booking: roomId } = booking;
    const [newDate, setNewDate] = useState(date);

    const handleSubmit = () => {
        // e.preventDefault(),
        // setselectedId(_id),
        handleUpdateBooking(newDate);
        console.log(_id);
    }



    return (
        <tr>
            {/* <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <RiDeleteBin6Line />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th> */}
            <td>

                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={RoomImages} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>


            </td>
            <td>
                {RoomDescription}
            </td>
            <td>{date}</td>
            <td>${PricePerNight}</td>
            <th className="tooltip mt-10" data-tip='Cancel Bookings'>
                <button title="" onClick={() => handleDelete(_id, roomId, Availability)} className="btn btn-sm btn-circle bg-[#244D61] text-white">
                    <RiDeleteBin6Line />
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> */}
                </button>
            </th>
            <td>
                <th className="tooltip mt-5" data-tip='Update Bookings'>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-sm btn-circle bg-[#244D61] text-white" onClick={() => {
                        document.getElementById('my_modal_1').showModal()
                        setselectedId(_id)
                    }}><MdOutlineSystemUpdateAlt /></button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <figure><img className="w-1/2 mb-3 rounded" src={RoomImages[0]} alt="Album" /></figure>
                            <h3 className="font-bold text-lg">Room Description : {RoomDescription}</h3>
                            <p className="py-4">Price PerNight : {PricePerNight}</p>
                            <p>Room Size :{RoomSize}</p>
                            <p>Special Offers : {SpecialOffers} </p>
                            <form onSubmit={handleSubmit}>
                                {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" value={user?.displayName} className="input input-bordered" required />
                                </div> */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        // value={newDate}
                                        onChange={(e) => setNewDate(e.target.value)}
                                        className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-block bg-[#244D61] text-white mt-2" type="submit" value="Confirm Booking" />
                                </div>
                            </form>

                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </th>

            </td>
        </tr>
    );
};

export default MyBookDetails;