import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { teamMembers } from '../data/team';
import { Users, Facebook, Instagram, Linkedin } from 'lucide-react';

const TeamSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="team" className="section bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
          ref={ref}
        >
          <div className="flex justify-center mb-4">
            <Users size={40} className="text-primary-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate professionals behind Fruity Gulp who work tirelessly to bring you the best juices and event services.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map(member => (
            <motion.div 
              key={member.id}
              variants={item}
              className="group"
            >
              <div className="card h-full">
                <div className="relative overflow-hidden h-72">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white">{member.bio}</p>
                    <div className="flex space-x-3 mt-4">
                      {member.socialLinks?.facebook && (
                        <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-300">
                          <Facebook size={18} />
                        </a>
                      )}
                      {member.socialLinks?.instagram && (
                        <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-300">
                          <Instagram size={18} />
                        </a>
                      )}
                      {member.socialLinks?.linkedin && (
                        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                          <Linkedin size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;