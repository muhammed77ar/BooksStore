import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export default function StarsRating({bookRating}) {
    const maxStars = 5; // Maximum number of stars
    const fullStars = Math.floor(bookRating); // Number of full stars
    const hasHalfStar = bookRating % 1 !== 0; // Check if there's a fractional part
    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars
  
    return (
      <div className="flex items-center mt-2">
        {/* Render full stars */}
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} color="gold" />
        ))}
        {/* Render half star if needed */}
        {hasHalfStar && <FaStarHalfAlt color="gold" />}
        {/* Render empty stars */}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} color="gold" />
        ))}
      </div>
    );
}
