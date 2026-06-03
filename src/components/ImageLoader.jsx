import { useState } from "react";

export default function ImageLoader({
    src,
    alt,
    className = "",
    border = true,
}) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative flex items-center justify-center overflow-hidden rounded-xl">

            {/* Skeleton */}
            {!loaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl" />
            )}

            {/* Image */}
            <img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                className={`
           object-cover
          ${border ? "rounded-xl" : ""}
          ${className}
        `}
            />
        </div>
    );
}