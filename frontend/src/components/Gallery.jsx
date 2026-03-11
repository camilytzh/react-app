import { useState, useEffect, use } from 'react';

const Gallery = ({ images }) => {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => {
                if (prev >= images.length - 3) return 0;
                return prev + 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
    <div className="w-full max-w-8xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * 33.333}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="galeria"
            className="w-1/3 shrink-0 p-2 h-64 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
    )
}
export default Gallery;