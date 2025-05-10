import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { eventServices, getIconComponent } from '../data/events';
import { CalendarDays } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface EventsSectionProps {
  onBookingClick: (service?: string) => void;
}

const EventsSection: React.FC<EventsSectionProps> = ({ onBookingClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="events" className="section bg-gray-50">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          ref={ref}
        >
          <div className="flex justify-center mb-4">
            <CalendarDays size={40} className="text-secondary-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Events & Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide professional event services for weddings, corporate events, and private parties.
            Our experienced team ensures every occasion is memorable and runs smoothly.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
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
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-12"
          >
            {eventServices.map(service => {
              const IconComponent = getIconComponent(service.icon);
              return (
                <SwiperSlide key={service.id}>
                  <div className="card group h-full hover:border-secondary-500 hover:border overflow-hidden">
                    <div className="h-52 overflow-hidden relative">
                      <img 
                        src={service.imageUrl} 
                        alt={service.name} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-dark-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <IconComponent size={48} className="text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <IconComponent size={20} className="text-secondary-500 mr-2" />
                        <h3 className="text-xl font-bold">{service.name}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <button 
                        onClick={() => onBookingClick(service.name)}
                        className="btn-secondary w-full"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <button 
            onClick={() => onBookingClick()}
            className="btn-secondary text-base px-8 py-4"
          >
            Request a Quote
          </button>
          <p className="text-gray-500 mt-4 text-sm">
            Let us know your requirements and we'll create a custom quote for your event.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;