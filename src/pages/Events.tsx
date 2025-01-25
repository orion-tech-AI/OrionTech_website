import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'AI Hackathon 2024',
      date: 'March 15-17, 2024',
      location: 'Tech Hub, San Francisco',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600',
      description: 'Join us for 48 hours of innovation, coding, and AI development. Work with like-minded individuals to create cutting-edge AI solutions.',
      category: 'Hackathon',
    },
    {
      id: 2,
      title: 'Machine Learning Workshop',
      date: 'March 25, 2024',
      location: 'Virtual Event',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1600',
      description: 'Learn the fundamentals of machine learning from industry experts. Perfect for beginners and intermediate developers.',
      category: 'Workshop',
    },
    {
      id: 3,
      title: 'Tech Talk: Future of AI',
      date: 'April 5, 2024',
      location: 'Innovation Center, New York',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600',
      description: 'Explore the future of artificial intelligence and its impact on society with leading AI researchers and industry pioneers.',
      category: 'Talk',
    },
    {
      id: 4,
      title: 'AI Ethics Symposium',
      date: 'April 15, 2024',
      location: 'Virtual Event',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1600',
      description: 'Join our panel discussion on ethical considerations in AI development and deployment.',
      category: 'Symposium',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600">Join us for exciting events and expand your AI knowledge</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-2">
                    {event.category}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h2>
                  <div className="flex items-center text-gray-600 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <Link
                    to={`/events/${event.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;