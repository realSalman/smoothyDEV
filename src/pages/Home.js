import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../contexts/DarkModeContext';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const { darkMode } = useDarkMode();

  const testimonials = [
    {
      text: "The smoothyDEV did a fantastic job taking our vision and bringing it to reality. Every expectation that I had was either met or exceeded.",
      author: "Tadd Huntington",
      company: "CheerLending"
    },
    {
      text: "They did a great job communicating. We were very pleased with both the final result of the project, and the experience of building it with smoothyDEV.",
      author: "Alex Ericksen",
      company: "AlfredTA"
    }
  ];

  const projects = [
    {
      title: "Ludo Remastered",
      duration: "Telegram MiniApp\n10 weeks",
      image: "/assets/ludo-preview.png",
      badges: ["✅ On Time", "✅ On Budget"]
    },
    {
      title: "eFinalDate",
      duration: "Website Redesign\n7 week",
      image: "/assets/vectary-texture.png",
      badges: ["✅ On Time", "✅ On Budget"]
    },
    {
      title: "Stories App",
      duration: "Andoid + iOS\n4 week",
      image: "/assets/frame-2.png",
      badges: ["✅ On Time", "✅ On Budget"]
    }
  ];

  const clientLogos = [
    "ezpt.png", "screenlake.png", "logos-14.png", "logos-01.png",
    "logos-13.png", "logos-12.png", "logos-11.png", "logos-10.png",
    "logos-09.png", "logos-08.png", "logos-07.png", "logos-02.png",
    "logos-03.png", "logos-06.png", "logos-05.png", "logos-04.png"
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 2500);

    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="home-page animate-fadeIn">
      {/* Hero Title Section */}
      <section className="h-[80vh] mb-0">
        <div className="flex justify-center items-center h-4/5">
          <h1 className="text-black dark:text-white self-center mr-8 text-center font-poppins text-5xl md:text-6xl font-normal leading-[6.5rem] md:mr-0 md:text-5xl md:leading-[4rem]">
            <strong>Better</strong> WebAPP,<br />
            Built <em>Faster</em>.
          </h1>
        </div>
      </section>

      {/* Hero Section */}
      <section id="feature-section" className="mb-20 pt-0 pb-10 md:px-5">
        <div className="flex flex-row gap-6 flex-1 justify-between items-stretch max-w-[80%] h-[500px] max-h-[70%] mx-auto overflow-visible md:flex-col md:justify-center md:items-center md:h-auto">
          <div className="gap-6 text-left flex-col flex-0 justify-center items-start flex">
            <h2 className="text-black dark:text-white mb-0 font-poppins text-2xl md:text-2xl font-medium leading-[3rem] md:text-center">
              Is your dev team taking <strong>longer</strong> and <strong>more money</strong> than you expected?
            </h2>
          </div>
          <div className="flex-0 justify-start self-auto w-full ml-10 mr-0 block overflow-visible md:w-auto md:ml-0">
            <img
              src="/assets/offshore-issues.png"
              alt="Offshore development issues"
              className="object-contain object-center w-full h-full block md:w-auto md:max-w-[75%] md:h-auto md:mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-15">
        <h2 className="text-center mt-25 mb-10 font-poppins text-black dark:text-white">
          <strong>Why work with smoothyDEV?</strong>
        </h2>
        <div className="max-w-6xl mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Other Off-Shore Devs Column */}
            <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-6 text-center">
                Other Off-Shore Devs
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-black dark:text-white">Fixed Cost</span>
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black dark:text-white">Affordable Price</span>
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black dark:text-white">Professional Design</span>
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black dark:text-white">Reliable Communication</span>
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black dark:text-white">Clear Expectations</span>
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black dark:text-white">Development Speed</span>
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* smoothyDEV Column - Highlighted */}
            <div className="bg-[#e6e6e6] rounded-lg p-6 shadow-lg md:transform md:scale-105 z-10">
              <div className="flex items-center justify-center mb-6">
                <img
                  src="/assets/logo_black.png"
                  alt="smoothyDEV logo"
                  className="h-8 w-auto"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-black">Fixed Cost</span>
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black">Affordable Price</span>
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black">Professional Design</span>
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black">Reliable Communication</span>
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black">Clear Expectations</span>
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black">Development Speed</span>
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* On-Shore Devs Column */}
            <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-6 text-center">
                On-Shore Devs
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-black dark:text-white">Fixed Cost</span>
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black dark:text-white">Affordable Price</span>
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black dark:text-white">Professional Design</span>
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black dark:text-white">Reliable Communication</span>
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black dark:text-white">Clear Expectations</span>
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-black dark:text-white">Development Speed</span>
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clients Section */}
        <section className="text-left mt-9 mb-[150px] pl-[5%] pr-[5%]">
          <h2 className="text-center mt-25 mb-2.5 font-poppins text-black dark:text-white">
            <strong>Build WebAPP with smoothyDEV</strong>
          </h2>
          <p className="font-poppins text-lg text-center mb-5 text-gray-400 text-xs">(like these great companies have)</p>
          <div>
            <ul role="list" className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(120px,1fr))] place-items-center">
              {clientLogos.map((logo, index) => (
                <li key={index} role="listitem" className="py-3 px-6">
                  <img
                    src={`/assets/${logo}`}
                    loading="lazy"
                    alt={`Client ${index + 1}`}
                    className="max-w-full max-h-[70px] shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-shadow hover:shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
                  />
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center mt-6 font-poppins text-xs font-normal text-gray-400">... and many more!</p>
        </section>

        {/* Portfolio Preview Section */}
        <section className="mb-40 text-center px-4">
          <h2 className="text-center mb-8 font-poppins text-black dark:text-white text-md">
            <strong>Check Out Our Recent Work:</strong>
          </h2>
          <div className="bg-white dark:bg-gray-800 min-h-[500px] md:min-h-[400px] md:h-[450px] relative mx-auto max-w-6xl rounded-2xl shadow-xl overflow-hidden group">

            <button
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-700/90 hover:bg-white dark:hover:bg-gray-600 p-3 rounded-full shadow-lg z-20 transition-all transform group-hover:scale-110 cursor-pointer border-none flex items-center justify-center"
              aria-label="Previous slide"
              onClick={prevProject}
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-700/90 hover:bg-white dark:hover:bg-gray-600 p-3 rounded-full shadow-lg z-20 transition-all transform group-hover:scale-110 cursor-pointer border-none flex items-center justify-center"
              aria-label="Next slide"
              onClick={nextProject}
            >
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="h-full w-full">
              <article
                key={currentProject}
                className="w-full h-full flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8 md:gap-12 animate-fadeIn"
              >

                <div className="flex-1 w-full flex justify-center items-center h-[250px] md:h-full">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="object-contain max-h-full max-w-full drop-shadow-md rounded-lg"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-center text-center md:text-left space-y-4 z-10 md:pr-12">
                  <h3 className="text-3xl md:text-4xl font-bold font-poppins text-black dark:text-white leading-tight">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 font-poppins whitespace-pre-line leading-relaxed">
                    {projects[currentProject].duration}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
                    {projects[currentProject].badges.map((badge, i) => (
                      <span key={i} className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

              </article>
            </div>
          </div>

          <Link to="/portfolio" className="cssbuttons-io-button w-64 justify-center items-center mx-auto mt-10">
            See More Projects
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </Link>
        </section>

        {/* Testimonials Section */}
        <section className="mt-30 mb-10">
          <h2 className="text-center pl-0 pr-0 font-poppins text-2xl md:text-xl font-normal text-black dark:text-white">
            <strong className="text-left font-poppins text-sm">Just ask our clients.</strong>
          </h2>
          <div className="relative max-w-[90%] mx-auto">
            <div className="relative overflow-hidden">
              <blockquote className="p-10">
                <div
                  className="bg-center bg-no-repeat bg-contain flex items-center w-4/5 max-w-[800px] h-full mx-auto py-5 px-[8%]"
                  style={{ backgroundImage: 'url(/assets/cott.png)' }}
                >
                  <div
                    key={currentTestimonial}
                    className="max-w-[800px] mx-auto animate-fadeIn"
                  >
                    <p className="mb-4 font-poppins text-3xl md:text-2xl leading-10 text-center text-black dark:text-white">
                      {testimonials[currentTestimonial].text}
                    </p>
                    <cite className="mb-1 font-poppins text-lg font-bold text-center not-italic block text-black dark:text-white">
                      {testimonials[currentTestimonial].author}
                    </cite>
                    <p className="text-gray-500 dark:text-gray-400 font-poppins font-medium text-center text-black dark:text-white">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </section>
        <div className="h-20"></div>
      </section>
    </div>
  );
};

export default Home;
