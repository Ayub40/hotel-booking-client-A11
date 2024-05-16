import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";


const Review = ({ roomId }) => {
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/reviews', {
                username: user?.username,
                room: roomId,
                rating,
                comment
            });
            console.log('Review posted:', response.data);
            // Optionally, you can update state or show a success message
        } catch (error) {
            console.error('Failed to post review:', error);
            // Handle error and show error message
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
            <button type="submit">Submit Review</button>
        </form>
    );
};

// Component for displaying reviews on the room details page
const RoomReviews = ({ roomId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Make a GET request to fetch reviews for the specified room
        const fetchReviews = async () => {
            const response = await fetch(`/reviews/${roomId}`);
            const data = await response.json();
            setReviews(data);
        };
        fetchReviews();
    }, [roomId]);





    return (
        <div>
            {reviews.map(review => (
                <div key={review._id}>
                    <p>{review.username}</p>
                    <p>{review.rating}</p>
                    <p>{review.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default Review;