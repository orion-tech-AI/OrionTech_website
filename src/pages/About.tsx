import React from 'react';
import { Brain, Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Club President',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
      bio: 'AI researcher with 10+ years of experience in machine learning and neural networks.',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      bio: 'Senior AI engineer specializing in deep learning and computer vision.',
    },
    {
      name: 'Emily Watson',
      role: 'Events Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
      bio: 'Community builder passionate about making AI accessible to everyone.',
    },
    {
      name: 'David Park',
      role: 'Research Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
      bio: 'PhD in Computer Science, focusing on ethical AI development.',
    },
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'Pushing the boundaries of AI technology through creative solutions.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in everything we do.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive network of AI enthusiasts and professionals.',
    },
    {
      icon: Lightbulb,
      title: 'Learning',
      description: 'Continuous growth through knowledge sharing and collaboration.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">About Orion Tech AI</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are a community of AI enthusiasts, researchers, and professionals dedicated to advancing
              the field of artificial intelligence through collaboration and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300">
              To foster innovation in artificial intelligence through education, collaboration, and
              practical application, while ensuring ethical considerations and societal benefits remain
              at the forefront of technological advancement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;