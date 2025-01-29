import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const CertificatesPage = () => {
  const certificates = [
    { 
      name: 'Python 3 Programming',
      issuer: 'Coursera',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800',
      description: 'Comprehensive Python programming certification covering core concepts and advanced topics.'
    },
    { 
      name: 'JavaScript',
      issuer: 'Infosys Springboard',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=800',
      description: 'Advanced JavaScript development certification with focus on modern ES6+ features.'
    },
    { 
      name: 'Node.js',
      issuer: 'Infosys Springboard',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800',
      description: 'Server-side JavaScript development with Node.js ecosystem and best practices.'
    },
    { 
      name: 'React.js',
      issuer: 'Infosys Springboard',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800',
      description: 'Modern React development including hooks, context, and state management.'
    },
    { 
      name: "NIELIT 'O'-Level Certificate",
      issuer: 'NIELIT',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800',
      description: 'Comprehensive IT certification covering computer fundamentals and programming.'
    },
    { 
      name: 'Cyber Security',
      issuer: 'Google (Coursera)',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800',
      description: 'Advanced cybersecurity concepts and practices from Google experts.'
    },
  ];

  return (
    <section className="min-h-screen py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="card-3d bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Award className="text-white drop-shadow-lg" size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-indigo-600 text-sm mb-3">{cert.issuer}</p>
                <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                <button className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                  View Certificate <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesPage;