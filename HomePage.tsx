import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Star, Users, Clock, MapPin, Phone, Mail, Camera } from 'lucide-react';

export function HomePage() {
  const menuItems = [
    {
      name: 'Butter Chicken',
      description: 'Tender and creamy, cooked with aromatic spices',
      price: '₹450',
      image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Paneer Tikka',
      description: 'Marinated paneer cubes grilled to perfection',
      price: '₹380',
      image: 'https://images.pexels.com/photos/4871119/pexels-photo-4871119.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Veg Biryani',
      description: 'Fragrant rice mixed with fresh vegetables and spices',
      price: '₹320',
      image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Chocolate Lava Cake',
      description: 'Warm and gooey chocolate dessert',
      price: '₹280',
      image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-orange-400">SavouryBite</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Enjoy delicious food, warm ambiance, and seamless reservations — all in one place
            </p>
            <p className="text-lg mb-10 text-gray-300">
              Whether you're planning a cozy dinner or a celebration with friends, 
              SavouryBite is the perfect destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/reservation"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                Reserve Your Table
              </Link>
              <a
                href="#menu"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
              >
                View Our Menu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <ChefHat className="inline h-8 w-8 text-orange-600 mr-2" />
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                SavouryBite is a modern dining destination known for its delicious fusion of 
                Indian and continental cuisines. Established in 2020, we believe in delivering 
                more than just food — we serve experiences.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From our elegant interiors to our passionate chefs, everything at SavouryBite 
                is designed to make your visit memorable. Whether you're dining in or ordering 
                online, we ensure top-quality service and flavors.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <Star className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Premium Quality</p>
                </div>
                <div className="p-4">
                  <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Expert Chefs</p>
                </div>
                <div className="p-4">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Quick Service</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant interior"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Signature Dishes
            </h2>
            <p className="text-lg text-gray-600">
              Explore our carefully crafted menu featuring the finest flavors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <Camera className="inline h-8 w-8 text-orange-600 mr-2" />
              Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Take a look inside SavouryBite and our delicious creations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600">
              We'd love to hear from you! Get in touch with us today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-orange-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                  <p className="text-gray-600">123 Foodie Street, Hitech City, Hyderabad, Telangana - 500081</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-orange-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-orange-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">support@savourybite.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-orange-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Opening Hours</h3>
                  <p className="text-gray-600">Mon – Fri: 12:00 PM – 11:00 PM</p>
                  <p className="text-gray-600">Sat – Sun: 11:00 AM – 12:00 AM</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Make a Reservation?</h3>
              <p className="text-gray-600 mb-6">
                Skip the wait and book your table online. We'll have everything ready for your arrival.
              </p>
              <Link
                to="/reservation"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center w-full"
              >
                Book Your Table Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}