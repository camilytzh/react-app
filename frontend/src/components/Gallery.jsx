import { useState, useEffect, use } from 'react';

const Gallery = ({ images }) => {
    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);
    
    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth < 768) setVisibleCount(1);
            else if (window.innerWidth < 1024) setVisibleCount(2);
            else setVisibleCount(3);
        };
        updateVisible();
        window.addEventListener('resize', updateVisible);
        return () => window.removeEventListener('resize', updateVisible);
    }, []);

    useEffect(() => {
      setIndex(0);
    }, [visibleCount]);

    useEffect(() => {
        const maxIndex = images.length - visibleCount;
        const interval = setInterval(() => {
            setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length, visibleCount]);

    const itemWidth = 100 / visibleCount;

    return (
    <div className="w-full max-w-8xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * itemWidth}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="galeria"
            style={{ width: `${itemWidth}%` }}
            className="w-full md:w-1/2 lg:w-1/3 shrink-0 p-2 h-80 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
    )
}
export default Gallery;