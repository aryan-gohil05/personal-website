export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${
            i < rating ? "fill-[#FFC107] text-[#FFC107]" : "fill-none text-base-content/20"
          }`}
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2.5l2.94 6.32 6.81.68-5.11 4.7 1.5 6.8L12 17.77l-6.14 3.23 1.5-6.8-5.11-4.7 6.81-.68z"
          />
        </svg>
      ))}
    </div>
  );
}