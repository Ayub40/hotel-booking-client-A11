import { useEffect, useState } from "react";
import RoomAvailable from "./RoomAvailable";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 
// AOS.init();
// import 'animate.css';


const FeaturedRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    // useEffect(() => {
    //     fetch('http://localhost:2000/room/Availability')
    //         .then(res => res.json())
    //         .then(data => {
    //             const filterRooms = data.filter(room => room.Availability === 'Available');
    //             setRooms(filterRooms);
    //             setRooms(data);
    //         })
    // }, [])


    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        const response = await fetch('http://localhost:2000/room');
        const data = await response.json();
        setRooms(data);
    };

    // const filterByPriceRange = async (minPrice, maxPrice) => {
    //     const response = await fetch(`http://localhost:2000/room?minPrice=${minPrice}&maxPrice=${maxPrice}`);
    //     const data = await response.json();
    //     setRooms(data);
    // };




    useEffect(() => {
        const fetchRooms = async () => {
            const response = await fetch(`http://localhost:2000/room?minPrice=${minPrice}&maxPrice=${maxPrice}`);
            const data = await response.json();
            setRooms(data);
        };

        fetchRooms();
    }, [minPrice, maxPrice]);


    const handleMinPriceChange = (event) => {
        console.log("Min Price Changed:", event.target.value);
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        console.log("Max Price Changed:", event.target.value);
        setMaxPrice(event.target.value);
    };



    return (
        < div className="mt-24" >
            <div className="text-center space-y-5">
                <h3 className="text-2xl font-bold text-[#FF3811] ">Service</h3>
                <h2 className="text-5xl">Our Room</h2>
                <p>Escape to comfort and style. Experience tranquility in our meticulously curated space. Perfect for business or leisure, indulge in luxury and relaxation. </p>
            </div>

            <div>
                <div className="mt-5">
                    <label htmlFor="minPrice">Minimum Price:</label>
                    <select id="minPrice" value={minPrice} onChange={handleMinPriceChange}>
                        <option value="">Any</option>
                        <option value="100">$100</option>
                        <option value="200">$200</option>
                        <option value="400">$400</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="mt-3">
                    <label htmlFor="maxPrice">Maximum Price:</label>
                    <select id="maxPrice" value={maxPrice} onChange={handleMaxPriceChange}>
                        <option value="">Any</option>
                        <option value="100">$100</option>
                        <option value="200">$200</option>
                        <option value="400">$400</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                {/* <details className="dropdown">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><button onClick={() => filterByPriceRange(100, 500)}>100$ - 500$</button></li>
                        <li><button onClick={() => filterByPriceRange(501, 1000)}>501$ - 1000$</button></li>
                        <li><button onClick={() => filterByPriceRange(1001, 1500)}>1001$ - 1500$</button></li>
                    </ul>
                </details> */}



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
            {/* -------------------------------------- */}







            {/* ------------------------------------------ */}
        </div >
    );
};

export default FeaturedRooms;