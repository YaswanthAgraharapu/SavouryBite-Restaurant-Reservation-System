import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChefHat, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <ChefHat className="h-8 w-8 text-orange-600" />
                <span className="text-xl font-bold text-gray-900">SavouryBite</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/') 
                      ? 'bg-orange-600 text-white' 
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/reservation"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/reservation') 
                      ? 'bg-orange-600 text-white' 
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  Reservations
                </Link>
                <Link
                  to="/admin"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/admin') 
                      ? 'bg-orange-600 text-white' 
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center">
                <ChefHat className="h-8 w-8 text-orange-600" />
                <span className="ml-2 text-xl font-bold">SavouryBite</span>
              </div>
              <p className="text-gray-400 text-base">
                Experience the perfect blend of flavors and ambiance at SavouryBite Restaurant. 
                Where every meal is a celebration.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                    Quick Links
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li><Link to="/" className="text-base text-gray-400 hover:text-white">Home</Link></li>
                    <li><Link to="/reservation" className="text-base text-gray-400 hover:text-white">Reservations</Link></li>
                    <li><a href="#menu" className="text-base text-gray-400 hover:text-white">Menu</a></li>
                    <li><a href="#gallery" className="text-base text-gray-400 hover:text-white">Gallery</a></li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                    Contact Info
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-orange-600" />
                      <span className="text-base text-gray-400">123 Foodie Street, Hitech City</span>
                    </li>
                    <li className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-orange-600" />
                      <span className="text-base text-gray-400">+91 98765 43210</span>
                    </li>
                    <li className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-orange-600" />
                      <span className="text-base text-gray-400">support@savourybite.com</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-orange-600" />
                      <span className="text-base text-gray-400">Mon-Fri: 12PM-11PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <p className="text-base text-gray-400 text-center">
              © 2024 SavouryBite Restaurant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}