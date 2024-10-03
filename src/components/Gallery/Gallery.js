import React from 'react';

import image1 from '../../assets/images/serviceImg/WhatsApp Image 2024-09-22 at 22.10.52 (2).webp';
import image2 from '../../assets/images/serviceImg/WhatsApp Image 2024-09-22 at 22.10.52 (3) (1).jpeg';
import image3 from '../../assets/images/serviceImg/WhatsApp Image 2024-09-22 at 22.10.52 (4).webp';
import image4 from '../../assets/images/serviceImg/WhatsApp Image 2024-09-22 at 22.10.52 (5) (1).jpeg';
import image6 from '../../assets/images/serviceImg/WhatsApp Image 2024-09-22 at 22.09.23 (2).webp';
import image7 from '../../assets/images/serviceImg/WhatsApp Image 2024-09-22 at 22.09.23 (3).webp';

// Store imported images in an array
const images = [
  image1,
  image2,
  image3,
  image4,
  image6,
  image7,
];

const Gallery = () => {
  return (
    <div className='container mx-auto p-4'>
        <div className='flex flex-col items-center pb-16'>
  <h2 className="text-center font-semibold text-primary text-red-500 sm:text-1xl">
    Our Proud Graduates
  </h2>
  <p className='text-dark-6 mt-6 text-4xl font-bold text-center'>Celebrating Success in Driving Exams</p>
  <p className='hidden md:block text-dark-6 text-4xl font-bold text-center'>See Our Students' Achievements</p>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div className="grid" key={index}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={image}
              alt={`Galleryimage`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
