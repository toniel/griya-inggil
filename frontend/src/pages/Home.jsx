import React, { useState, useEffect } from 'react';
import { 
  Star, 
  MapPin, 
  Phone, 
  Wifi, 
  Wind, 
  Droplet, 
  Car, 
  Shield, 
  Camera, 
  UtensilsCrossed,
  Bed,
  Clock,
  CheckCircle2,
  Users,
  Award,
  Building2,
  GraduationCap,
  Heart,
  ShoppingBag,
  Utensils,
  CreditCard,
  Navigation,
  MessageCircle,
  ChevronRight,
  Quote
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { mockData } from '../mock';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${mockData.businessInfo.whatsapp}?text=Hi, I'm interested in renting a room at Kost Griya Inggil Limpung`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${mockData.businessInfo.phone}`;
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Education': return <GraduationCap className="w-5 h-5" />;
      case 'Healthcare': return <Heart className="w-5 h-5" />;
      case 'Shopping': return <ShoppingBag className="w-5 h-5" />;
      case 'Banking & ATM': return <CreditCard className="w-5 h-5" />;
      case 'Dining': return <Utensils className="w-5 h-5" />;
      default: return <MapPin className="w-5 h-5" />;
    }
  };

  const facilityIcons = {
    "High-Speed WiFi": <Wifi className="w-6 h-6" />,
    "Air Conditioning": <Wind className="w-6 h-6" />,
    "Private Bathroom": <Droplet className="w-6 h-6" />,
    "Kitchen Access": <UtensilsCrossed className="w-6 h-6" />,
    "Laundry Service": <Building2 className="w-6 h-6" />,
    "Parking Area": <Car className="w-6 h-6" />,
    "24/7 CCTV": <Camera className="w-6 h-6" />,
    "Security Guard": <Shield className="w-6 h-6" />,
    "Furnished Room": <Bed className="w-6 h-6" />,
    "Water Supply": <Droplet className="w-6 h-6" />,
    "Electricity": <Building2 className="w-6 h-6" />,
    "Common Area": <Users className="w-6 h-6" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50/30">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="w-8 h-8 text-purple-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Griya Inggil</h1>
              <p className="text-xs text-gray-600">Premium Boarding House</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#overview" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">Overview</a>
            <a href="#facilities" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">Facilities</a>
            <a href="#rooms" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">Rooms</a>
            <a href="#reviews" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">Reviews</a>
            <a href="#location" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors">Location</a>
            <Button onClick={handleWhatsAppClick} size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 via-white to-purple-50/40"></div>
        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200 border-0">
              <Award className="w-3 h-3 mr-1" />
              Top Rated Boarding House
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {mockData.businessInfo.name}
            </h1>
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">{mockData.businessInfo.rating}</span>
                <span className="text-gray-600">({mockData.businessInfo.totalReviews} reviews)</span>
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              Experience premium boarding house living in Limpung, Batang. Safe, comfortable, and affordable with complete facilities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={handleWhatsAppClick}
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book via WhatsApp
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                onClick={handleCallClick}
                size="lg" 
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 text-lg font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{mockData.overview.title}</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {mockData.overview.description}
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {mockData.overview.highlights.map((highlight, index) => (
                <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-white">
                  <CardContent className="pt-8 pb-6">
                    <div className="text-4xl font-bold text-purple-600 mb-2">{highlight.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{highlight.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Premium Facilities & Amenities</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Enjoy a complete range of facilities designed for your comfort and convenience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockData.facilities.map((facility, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-purple-100 rounded-lg text-purple-600 flex-shrink-0">
                        {facilityIcons[facility.name] || <CheckCircle2 className="w-6 h-6" />}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{facility.name}</h3>
                        <p className="text-sm text-gray-600">{facility.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section id="rooms" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Room Types & Pricing</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the perfect room that fits your needs and budget
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockData.roomTypes.map((room) => (
                <Card key={room.id} className={`border-2 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 relative overflow-hidden ${
                  room.popular ? 'border-purple-500' : 'border-gray-200'
                }`}>
                  {room.popular && (
                    <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl">{room.name}</CardTitle>
                    <CardDescription className="text-sm">{room.size}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-t border-b py-4">
                      <div className="text-3xl font-bold text-purple-600">{room.price}</div>
                      <div className="text-sm text-gray-600">{room.period}</div>
                    </div>
                    <ul className="space-y-3">
                      {room.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={handleWhatsAppClick}
                      className={`w-full ${
                        room.available 
                          ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                          : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      }`}
                      disabled={!room.available}
                    >
                      {room.available ? (
                        <>
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Book Now
                        </>
                      ) : 'Currently Full'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Tenants Say</h2>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">{mockData.businessInfo.rating}</span>
                <span className="text-gray-600">based on {mockData.businessInfo.totalReviews} reviews</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockData.reviews.map((review) => (
                <Card key={review.id} className="border-0 shadow-md hover:shadow-xl transition-all bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="bg-purple-100">
                          <AvatarFallback className="text-purple-600 font-semibold">{review.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-gray-900">{review.name}</div>
                          <div className="text-xs text-gray-500">{review.date}</div>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-purple-200" />
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Location & Directions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Strategic location with easy access to public facilities
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <MapPin className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                        <p className="text-gray-600">{mockData.businessInfo.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 mb-4">
                      <Navigation className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Plus Code</h3>
                        <p className="text-gray-600">{mockData.businessInfo.plusCode}</p>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-4"
                      onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(mockData.businessInfo.address)}`, '_blank')}
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Open in Google Maps
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <Button 
                        variant="outline"
                        className="w-full justify-start border-2 border-purple-600 text-purple-600 hover:bg-purple-50"
                        onClick={handleWhatsAppClick}
                      >
                        <MessageCircle className="w-4 h-4 mr-3" />
                        {mockData.businessInfo.phone}
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full justify-start border-2 border-gray-300 hover:bg-gray-50"
                        onClick={handleCallClick}
                      >
                        <Phone className="w-4 h-4 mr-3" />
                        Call Directly
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="h-[500px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={mockData.businessInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kost Griya Inggil Limpung Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Places Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nearby Places</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need is just minutes away
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockData.nearbyPlaces.map((category, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-lg">
                      <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                        {getCategoryIcon(category.category)}
                      </div>
                      <span>{category.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.places.map((place, placeIndex) => (
                        <li key={placeIndex} className="flex items-start justify-between text-sm">
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{place.name}</div>
                            <div className="text-gray-500">{place.distance}</div>
                          </div>
                          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                            <Clock className="w-3 h-3 mr-1" />
                            {place.time}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Building2 className="w-8 h-8 text-purple-400" />
                  <div>
                    <h3 className="text-xl font-bold">Griya Inggil</h3>
                    <p className="text-sm text-gray-400">Premium Boarding House</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your home away from home. Safe, comfortable, and affordable boarding house in Limpung, Batang.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact Us</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{mockData.businessInfo.phone}</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Available</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{mockData.businessInfo.address}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="#overview" className="hover:text-purple-400 transition-colors">Overview</a></li>
                  <li><a href="#facilities" className="hover:text-purple-400 transition-colors">Facilities</a></li>
                  <li><a href="#rooms" className="hover:text-purple-400 transition-colors">Room Types</a></li>
                  <li><a href="#reviews" className="hover:text-purple-400 transition-colors">Reviews</a></li>
                  <li><a href="#location" className="hover:text-purple-400 transition-colors">Location</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2025 Kost Griya Inggil Limpung. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110 z-50"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Home;
