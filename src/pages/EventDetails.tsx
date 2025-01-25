import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const EventDetails = () => {
  const { id } = useParams();

  // Mock event data - In a real application, this would come from an API
  const event = {
    id: 1,
    title: 'AI Hackathon 2024',
    date: 'March 15-17, 2024',
    time: '9:00 AM - 6:00 PM PST',
    location: 'Tech Hub, San Francisco',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600',
    description: `Join us for an exciting 48-hour hackathon focused on artificial intelligence and machine learning. Work alongside talented developers, data scientists, and AI enthusiasts to create innovative solutions to real-world problems.

    This event will feature:
    - Expert mentors from leading tech companies
    - Workshops on cutting-edge AI technologies
    - Networking opportunities
    - Prizes worth over $10,000
    
    Whether you're a seasoned AI developer or just starting your journey, this hackathon offers something for everyone.`,
    capacity: 200,
    price: 'Free',
    schedule: [
      {
        day: 'Day 1',
        events: [
          { time: '9:00 AM', title: 'Registration & Breakfast' },
          { time: '10:00 AM', title: 'Opening Ceremony' },
          { time: '11:00 AM', title: 'Team Formation' },
          { time: '12:00 PM', title: 'Hacking Begins' },
        ],
      },
      {
        day: 'Day 2',
        events: [
          { time: '9:00 AM', title: 'Morning Check-in' },
          { time: '2:00 PM', title: 'Technical Workshop' },
          { time: '6:00 PM', title: 'Mentor Sessions' },
        ],
      },
      {
        day: 'Day 3',
        events: [
          { time: '9:00 AM', title: 'Final Submissions' },
          { time: '1:00 PM', title: 'Project Presentations' },
          { time: '4:00 PM', title: 'Awards Ceremony' },
          { time: '5:00 PM', title: 'Closing Remarks' },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            <div className="flex items-center justify-center space-x-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {event.date}
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {event.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">About the Event</h2>
              <p className="text-gray-700 whitespace-pre-line">{event.description}</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Event Schedule</h2>
              <div className="space-y-8">
                {event.schedule.map((day, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-4">{day.day}</h3>
                    <div className="space-y-4">
                      {day.events.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start border-l-4 border-blue-600 pl-4"
                        >
                          <Clock className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">{item.time}</span>
                            <span className="mx-2">-</span>
                            <span>{item.title}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold mb-6">Event Details</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-3" />
                  <div>
                    <p className="font-medium">Time</p>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-500 mr-3" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-3" />
                  <div>
                    <p className="font-medium">Capacity</p>
                    <p className="text-gray-600">{event.capacity} participants</p>
                  </div>
                </div>
                <div className="pt-4">
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;