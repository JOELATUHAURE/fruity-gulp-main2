import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { reviews } from '../data/reviews';
import { Star, StarHalf, MessageSquareQuote, X } from 'lucide-react';

// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ReviewsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedReview, setSelectedReview] = useState<number | null>(null);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} size={18} className="text-yellow-400 fill-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" size={18} className="text-yellow-400 fill-yellow-400" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} size={18} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <section id="reviews" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          ref={ref}
        >
          <div className="flex justify-center mb-4">
            <MessageSquareQuote size={40} className="text-secondary-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who have experienced our 
            premium juices and professional event services.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-12"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={review.id} className="pb-4">
                <div 
                  className="card h-full cursor-pointer transition-all hover:-translate-y-2"
                  onClick={() => setSelectedReview(index)}
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={review.imageUrl} 
                            alt={review.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{review.name}</h4>
                          <div className="flex mt-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 flex-grow line-clamp-4">{review.comment}</p>
                    <p className="text-gray-400 text-sm mt-4">
                      {new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Review Modal */}
        {selectedReview !== null && (
          <div className="fixed inset-0 bg-dark-900/80 flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl max-w-xl w-full p-6 md:p-8 relative max-h-[80vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedReview(null)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={reviews[selectedReview].imageUrl} 
                    alt={reviews[selectedReview].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold">{reviews[selectedReview].name}</h4>
                  <div className="flex mt-1">
                    {renderStars(reviews[selectedReview].rating)}
                  </div>
                  <p className="text-gray-500 text-sm mt-1">
                    {new Date(reviews[selectedReview].date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">{reviews[selectedReview].comment}</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;