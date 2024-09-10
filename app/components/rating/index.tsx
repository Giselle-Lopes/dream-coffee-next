"use client";

import Image from "next/image";

export default function RatingStatic({ rating, maxRating = 5 }: { rating: number, maxRating?: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = Array.from({ length: maxRating }, (_, index) => {
    const fullStarImage = index < fullStars;
    const halfStarImage = index === fullStars && hasHalfStar;

    return (
      <Image
        key={index}
        src={fullStarImage ? "/images/icons/star-fill-white.svg" : halfStarImage ? "images/icons/star-half-white.svg" : "images/icons/star-white.svg"}
        alt={index < rating ? "Filled star" : (index === fullStars && hasHalfStar) ? "Half star" : "Empty star"}
        width={20}
        height={20}
      />
    )
  });

  return (
    <div>
      <span className="flex flex-row">{stars!}</span>
    </div>
  );
};