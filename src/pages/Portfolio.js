import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Store",
      description: [
        "Inventory management",
        "Secure payment processing",
        "Customer analytics dashboard"
      ],
      tech: ["mongodb", "express", "react", "nodejs"],
      image: "/assets/store-preview.png",
      link: "https://store.smoothydev.com/",
      linkText: "Visit Site"
    },
    {
      title: "Ludo Remastered (TMA)",
      description: [
        "Online Multiplayer",
        "Custom themes",
        "WEB3 features"
      ],
      tech: ["express", "postgres", "redis", "nodejs", "react"],
      image: "/assets/ludo-preview.png",
      link: "https://t.me/ludo_r_bot",
      linkText: "Play Game"
    },
    {
      title: "Future Projects",
      description: "Stay tuned for more innovative web applications and mobile solutions. Always working on something new!",
      tech: [],
      image: null,
      link: "/contact",
      linkText: "Get In Touch",
      comingSoon: true
    }
  ];

  return (
    <div className="portfolio-page animate-fadeIn min-h-screen">
      {/* Header Section */}
      <div className="text-center mt-8 px-4">
        <img
          src="/assets/arrow.png"
          loading="lazy"
          alt=""
          className="w-[280px] max-w-[90%] mx-auto opacity-80 dark:opacity-60 transition-opacity duration-300"
        />
      </div>

      {/* Portfolio Grid Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group w-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`
                bg-white dark:bg-gray-800/50 
                rounded-xl 
                overflow-hidden 
                transition-all duration-500 ease-out
                h-full flex flex-col
                border border-gray-100 dark:border-gray-800/50
                hover:border-gray-200 dark:hover:border-gray-700
                hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10
                hover:-translate-y-1
                ${project.comingSoon
                  ? 'bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-800/30 dark:to-gray-700/30 border-dashed border-gray-300 dark:border-gray-700'
                  : ''
                }
              `}>
                {/* Image Container */}
                <div className="relative h-56 sm:h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                  {project.comingSoon ? (
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                      <h3 className="font-poppins text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">More Projects</h3>
                      <p className="font-poppins text-sm text-gray-500 dark:text-gray-400">Coming Soon...</p>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={project.image}
                        alt={`${project.title} Project Preview`}
                        className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent dark:from-gray-800/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-6 flex-1 flex flex-col md:p-5">
                  <h3 className="font-poppins text-xl md:text-lg font-semibold text-gray-900 dark:text-white mb-4 leading-tight">
                    {project.title}
                  </h3>

                  {project.comingSoon ? (
                    <p className="font-poppins text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1 text-center">
                      {project.description}
                    </p>
                  ) : (
                    <ul className="font-poppins text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1 space-y-2">
                      {project.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Tags */}
                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                      {project.tech.map((tech, i) => (
                        <div key={i} className="relative group/icon cursor-help">
                          <img
                            src={`https://skillicons.dev/icons?i=${tech}`}
                            alt={tech}
                            title={tech}
                            className="w-10 h-10 transition-transform duration-300 hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="mt-auto">
                    {project.link.startsWith('http') ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          block w-full
                          bg-primary text-white 
                          py-3 px-5 
                          rounded-lg 
                          no-underline 
                          font-poppins text-sm font-medium 
                          transition-all duration-300 
                          text-center 
                          hover:bg-primary/90 
                          hover:shadow-md hover:shadow-primary/20
                          active:scale-[0.98]
                        "
                      >
                        {project.linkText}
                      </a>
                    ) : (
                      <Link
                        to={project.link}
                        className="
                          block w-full
                          bg-primary text-white 
                          py-3 px-5 
                          rounded-lg 
                          no-underline 
                          font-poppins text-sm font-medium 
                          transition-all duration-300 
                          text-center 
                          hover:bg-primary/90 
                          hover:shadow-md hover:shadow-primary/20
                          active:scale-[0.98]
                        "
                      >
                        {project.linkText}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
