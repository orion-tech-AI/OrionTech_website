import React from 'react';
import { ArrowRight, Calendar, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredEvents = [
    {
      id: 1,
      title: 'AI Hackathon 2024',
      date: 'March 15-17, 2024',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600',
      description: 'Join us for 48 hours of innovation, coding, and AI development.',
    },
    {
      id: 2,
      title: 'Machine Learning Workshop',
      date: 'March 25, 2024',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1600',
      description: 'Learn the fundamentals of machine learning from industry experts.',
    },
    {
      id: 3,
      title: 'Tech Talk: Future of AI',
      date: 'April 5, 2024',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600',
      description: 'Explore the future of artificial intelligence and its impact on society.',
    },
  ];

  const stats = [
    { icon: Calendar, label: 'Events Hosted', value: '50+' },
    { icon: Users, label: 'Active Members', value: '1000+' },
    { icon: Trophy, label: 'Awards Won', value: '25+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Driving Innovation Through AI
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Join the future of technology with Orion Tech AI Club
          </p>
          <Link
            to="/join"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Join Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.date}</p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <Link
                    to={`/events/${event.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;