import React, { useEffect } from 'react';
import bike from '../assets/bike3.png';

const SpecialOffer = ({ isOpen, onClose }) => {
    useEffect(() => {
        // Show the modal when the component mounts
        const modal = document.getElementById('my_modal_1');
        if (modal) {
            modal.showModal();
        }
    }, []);


    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <div>
                    <h1 className='mb-5 text-[#5B8291] mt-5 text-center text-3xl font-bold animate__animated animate__flip'>Offer!!! Offer!!! Offer!!!</h1>
                    <p className='text-center animate__animated animate__zoomInLeft text-[#12ADC1]'>We will arrange a lottery. If you booking any of room from us, you will win this bike!!!! </p>
                    <p className='text-center mb-4'>So, do not miss this offer !!!!</p>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">


                    <figure className='' ><img src={bike} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">RIDE YOUR DREAM</h2>
                        <p>Enjoy Every Moment With StayHaven</p>
                        <div className="card-actions justify-end">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                        </div>
                    </div>
                </div>
                {/* Add your special offers content here */}
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default SpecialOffer;