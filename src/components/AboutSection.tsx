import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CircleUser } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    {
      year: '2020',
      title: 'Humble Beginnings',
      description: 'Started as a small juice stand opposite Mbaguta in Mbarara City.'
    },
    {
      year: '2021',
      title: 'Expanded Menu',
      description: 'Introduced our signature detox and immune-boosting blends, gaining local popularity.'
    },
    {
      year: '2022',
      title: 'Event Services Launch',
      description: 'Started providing professional event ushering and beverage services for weddings and corporate events.'
    },
    {
      year: '2023',
      title: 'New Location',
      description: 'Expanded to a larger space to accommodate growing demand for both retail and event services.'
    },
    {
      year: '2024',
      title: 'Coffee Bar Addition',
      description: 'Added premium coffee services to our offerings, complementing our juice and event packages.'
    },
    {
      year: '2025',
      title: 'Digital Expansion',
      description: 'Launched online ordering and booking platform to better serve our growing customer base.'
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          ref={ref}
        >
          <div className="flex justify-center mb-4">
            <CircleUser size={40} className="text-accent-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Fruity Gulp</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're passionate about creating the freshest, most delicious fruit juices and providing 
            exceptional event services that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/5949900/pexels-photo-5949900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Fruity Gulp Store" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-2xl font-bold">Our Story</h3>
                  <p className="text-white/80 mt-2">Bringing fresh, natural goodness to Mbarara since 2020</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-4">The Fruity Gulp Journey</h3>
            <p className="text-gray-600">
              At Fruity Gulp, we believe in the power of fresh, natural ingredients to nourish the body and soul.
              Our journey began with a simple idea: to create delicious, nutritious juices using locally sourced fruits
              and to share our passion with the community of Mbarara.
            </p>
            <p className="text-gray-600">
              Today, we've grown into a beloved local business offering not just premium juices and smoothies,
              but also professional event services that bring our refreshing beverages and exceptional hospitality
              to weddings, corporate events, and private parties throughout the region.
            </p>
            <p className="text-gray-600">
              Our commitment to quality, freshness, and customer satisfaction remains at the heart of everything we do.
              Whether you're stopping by for a refreshing juice or booking our team for your special event,
              you can expect nothing but the best from Fruity Gulp.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Our Journey Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-200 h-full"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2"></div>
                  <div className="hidden md:flex justify-center items-center">
                    <div className="w-8 h-8 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="md:w-1/2 bg-white p-6 rounded-lg shadow-md md:mx-4 relative"
                  >
                    <div className="md:hidden absolute -top-4 left-4 w-8 h-8 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="md:px-4">
                      <span className="text-primary-500 font-bold">{milestone.year}</span>
                      <h4 className="text-xl font-bold mt-1">{milestone.title}</h4>
                      <p className="text-gray-600 mt-2">{milestone.description}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;