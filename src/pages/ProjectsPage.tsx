import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Online Job Portal",
      description: "Developed a responsive job portal website enabling job seekers to upload resumes and search for jobs using advanced filters, while allowing employers to post job applications. Built with Node.js, MongoDB, and JavaScript platforms that streamline recruitment processes with secure authentication and user-friendly interfaces.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800",
      link: "https://github.com/SOUMYAGHOSH123-fresher/Job-Portal-Website"
    },
    {
      title: "Automobiles Sales Management",
      description: "Create an automobile sales management system using Excel to manage vehicle inventory, track sales data, and generate performance reports. The system includes automated calculations, pivot tables for analysis, and dashboards for insights, enabling efficient sales tracking and decision-making for automobile dealerships.",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800",
      link: "https://github.com/SOUMYAGHOSH123-fresher/Automobiles_Sales_Prediction"
    },
    {
      title: "News Paper Read",
      description: "The News_Paper_Read project is a Python-based application designed to scrape, analyze, and curate news articles from various online sources. Utilizing the powerful Newspaper3k library, this project enables users to efficiently extract valuable information from news websites, making it easier to access and summarize content.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800",
      link: "https://github.com/SOUMYAGHOSH123-fresher/News_Paper_Read"
    },
    {
      title: "Online Library Management",
      description: "The Online Library Management System project is designed to streamline and enhance the management of library operations through a user-friendly interface built using Java in the NetBeans IDE. This system aims to facilitate the efficient handling of book records, user registrations, and transactions within a library environment.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800",
      link: "#"
    }
  ];

  return (
    <section className="min-h-screen py-24 bg-white">
      <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-6">
            Project Details
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-3d bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 transform hover:translate-x-2 transition-transform"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;