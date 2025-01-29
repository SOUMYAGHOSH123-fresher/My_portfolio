import React from 'react';
import { BarChart as ChartLineUp, Brain, Code2, Database, MessageSquare, Lightbulb, Target, Users } from 'lucide-react';

const AboutPage = () => {
  const skills = [
    { 
      name: 'Frontend Development',
      level: 90,
      icon: <Code2 className="text-indigo-600" size={24} />,
      details: ['HTML/CSS', 'JavaScript', 'React', 'Responsive Design']
    },
    { 
      name: 'Backend Development',
      level: 85,
      icon: <Database className="text-indigo-600" size={24} />,
      details: ['Node.js', 'MongoDB', 'SQL', 'API Design']
    },
    { 
      name: 'Programming',
      level: 85,
      icon: <Brain className="text-indigo-600" size={24} />,
      details: ['Python', 'Java', 'Data Structures', 'Algorithms']
    },
    { 
      name: 'Analytics',
      level: 80,
      icon: <ChartLineUp className="text-indigo-600" size={24} />,
      details: ['Data Analysis', 'Excel', 'Reporting', 'Visualization']
    },
    { 
      name: 'Soft Skills',
      level: 90,
      icon: <MessageSquare className="text-indigo-600" size={24} />,
      details: ['Communication', 'Team Collaboration', 'Presentation', 'Documentation']
    },
    { 
      name: 'Problem Solving',
      level: 88,
      icon: <Lightbulb className="text-indigo-600" size={24} />,
      details: ['Critical Thinking', 'Debugging', 'Optimization', 'Innovation']
    },
    { 
      name: 'Project Management',
      level: 85,
      icon: <Target className="text-indigo-600" size={24} />,
      details: ['Planning', 'Execution', 'Monitoring', 'Risk Management']
    },
    { 
      name: 'Leadership',
      level: 82,
      icon: <Users className="text-indigo-600" size={24} />,
      details: ['Team Leading', 'Mentoring', 'Decision Making', 'Conflict Resolution']
    }
  ];

  return (
    <section className="min-h-screen py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">About Skills </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="card-3d bg-white rounded-lg p-6 shadow-lg hover:shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Proficiency</span>
                  <span className="text-sm font-medium text-indigo-600">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `slideRight 1.5s ease-out ${index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
              <ul className="space-y-2">
                {skill.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;