import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Input from './ui/Input';
import Button from './ui/Button';
import ListingCard from './ListingCard';

// Animation variants for on-load and scroll effects
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Carousel settings
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true, // Enable arrows
  prevArrow: <button className="slick-prev slick-arrow" style={{ color: '#1D4ED8' }} />,
  nextArrow: <button className="slick-next slick-arrow" style={{ color: '#1D4ED8' }} />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function Landing() {
  const navigate = useNavigate();

  // Mock featured listings with dummy images from Unsplash
  const featuredListings = [
    {
      id: '1',
      title: '2-Bedroom Apartment in Lekki',
      price: 5000000,
      location: 'Lekki, Lagos',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      isVerified: true,
    },
    {
      id: '2',
      title: 'Land in Ajah',
      price: 10000000,
      location: 'Ajah, Lagos',
      image: 'https://images.unsplash.com/photo-1590386830925-029f4d693d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      isVerified: false,
    },
    {
      id: '3',
      title: 'Student Hostel near UNILAG',
      price: 500000,
      location: 'Yaba, Lagos',
      image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      isVerified: true,
    },
    {
      id: '4',
      title: '3-Bedroom House in Ikeja',
      price: 8000000,
      location: 'Ikeja, Lagos',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      isVerified: false,
    },
    {
      id: '5',
      title: 'Luxury Duplex in Victoria Island',
      price: 15000000,
      location: 'Victoria Island, Lagos',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      isVerified: true,
    },
    {
      id: '6',
      title: 'Car Rental Service in Abuja',
      price: 200000,
      location: 'Garki, Abuja',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      isVerified: false,
    },
    {
      id: '7',
      title: 'Security Service for Events',
      price: 300000,
      location: 'Port Harcourt, Rivers',
      image: 'https://images.unsplash.com/photo-1556740738-6b4d6b8b7b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      isVerified: true,
    },
    {
      id: '8',
      title: '4-Bedroom Flat in Gwarinpa',
      price: 6000000,
      location: 'Gwarinpa, Abuja',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      isVerified: false,
    },
  ];

  // Scroll animation hooks for sections
  const [searchRef, searchInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [listingsRef, listingsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [howItWorksRef, howItWorksInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [trustRef, trustInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80')`,
        }}
      >
        <div className="text-center">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Discover Your Dream Property with fiNder
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            The trusted Nigerian marketplace for real estate, student hostels, car rentals, and security services.
          </motion.p>
        </div>
      </section>

      {/* Search Preview Section */}
      <section
        className="py-16"
        ref={searchRef}
      >
        <motion.div
          className="container mx-auto text-center"
          initial="hidden"
          animate={searchInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-6">Search Properties Across Nigeria</h2>
          <div className="flex justify-center space-x-4 max-w-2xl mx-auto">
            <Input placeholder="Enter location (e.g., Lekki, Lagos)" className="w-3/4 shadow-md" />
            <Button
              onClick={() => navigate('/register')}
              className="transform transition-transform hover:scale-105"
            >
              Search
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Featured Listings Section with Carousel */}
      <section className="py-16 bg-white" ref={listingsRef}>
        <motion.div
          className="container mx-auto"
          initial="hidden"
          animate={listingsInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-center mb-8">Featured Listings</h2>
          <Slider {...carouselSettings}>
            {featuredListings.map((listing) => (
              <div key={listing.id} className="px-2">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <ListingCard
                    title={listing.title}
                    price={listing.price}
                    location={listing.location}
                    image={listing.image}
                    isVerified={listing.isVerified}
                  />
                </motion.div>
              </div>
            ))}
          </Slider>
          <div className="text-center mt-8">
            <Button
              onClick={() => navigate('/register')}
              className="bg-primary text-white transform transition-transform hover:scale-105"
            >
              See More Listings
            </Button>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100" ref={howItWorksRef}>
        <motion.div
          className="container mx-auto text-center"
          initial="hidden"
          animate={howItWorksInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
              whileHover={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">1. Search</h3>
              <p>Find properties, hostels, or services in your desired location with advanced filters.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
              whileHover={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-2">2. Pay with Escrow</h3>
              <p>Securely pay through our escrow system, ensuring safety for both parties.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
              whileHover={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2">3. Move In</h3>
              <p>Complete the transaction and move into your new property or use the service.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white" ref={testimonialsRef}>
        <motion.div
          className="container mx-auto text-center"
          initial="hidden"
          animate={testimonialsInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
              whileHover={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <p className="italic text-gray-600">"I found my dream apartment in Lekki thanks to fiNder! The escrow system made the process so secure."</p>
              <p className="mt-4 font-semibold text-gray-800">- Chinedu, Lagos</p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
              whileHover={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <p className="italic text-gray-600">"As a realtor, fiNder has helped me reach more clients. The KYC verification process was seamless."</p>
              <p className="mt-4 font-semibold text-gray-800">- Aisha, Abuja</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 bg-gray-100" ref={trustRef}>
        <motion.div
          className="container mx-auto text-center"
          initial="hidden"
          animate={trustInView ? 'visible' : 'hidden'}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-8">Why Choose fiNder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
              whileHover={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Verified Realtors</h3>
              <p>All realtors are manually vetted with KYC to ensure trust and reliability.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
              whileHover={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure Escrow Payments</h3>
              <p>Your funds are held securely until both parties confirm the transaction.</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
              whileHover={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="text-4xl mb-4">🇳🇬</div>
              <h3 className="text-xl font-semibold mb-2">Nigerian-Focused</h3>
              <p>Find properties, hostels, and services tailored for the Nigerian market.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© 2025 fiNder. All rights reserved.</p>
          <div className="mt-2">
            <a href="/about" className="text-gray-400 hover:text-white mx-2 transition-colors">About</a>
            <a href="/contact" className="text-gray-400 hover:text-white mx-2 transition-colors">Contact</a>
            <a href="/terms" className="text-gray-400 hover:text-white mx-2 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}