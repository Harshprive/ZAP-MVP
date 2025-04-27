import React from 'react';
import jobData from './JobData';

const JobReviewPage = () => {
  const { title, company, roleDescription, location, perks, creativeSpaceImages } = jobData;

  return (
    <div className="min-h-screen p-4 sm:p-10 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-95 rounded-2xl overflow-hidden shadow-lg relative">
        <div className="absolute top-0 left-0 w-full h-40 sm:h-52 bg-gradient-to-r from-[#6a3093] to-[#a044ff] clip-path-polygon z-10"></div>
        <div className="relative z-20 p-6 sm:p-10">
          <div className="text-white mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-5 drop-shadow-lg">{title}</h1>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white bg-opacity-95 p-4 sm:p-5 rounded-xl shadow-md transform sm:translate-y-5">
              <img
                src={company.logo}
                alt={`${company.name} Logo`}
                className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl object-cover border-4 border-white shadow-lg"
              />
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl text-gray-800 font-semibold">{company.name}</h2>
                <p className="text-sm sm:text-base">{company.description}</p>
                <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
                  {company.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">✨ About This Role</h3>
            {roleDescription.map((desc, index) => (
              <p key={index} className="leading-relaxed mt-2 sm:mt-4 text-sm sm:text-base">{desc}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:-translate-y-2 transition-transform">
              <h3 className="text-base sm:text-lg font-semibold mb-2">📍 Location</h3>
              <p className="text-sm sm:text-base">{location.address}</p>
              <p className="text-sm sm:text-base">
                {location.city}, {location.state} {location.postalCode}
              </p>
              <p className="text-sm sm:text-base">{location.country}</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:-translate-y-2 transition-transform">
              <h3 className="text-base sm:text-lg font-semibold mb-2">🌟 Perks</h3>
              <ul className="text-sm sm:text-base">
                {perks.map((perk, index) => (
                  <li key={index}>• {perk}</li>
                ))}
              </ul>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Our Creative Space</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {creativeSpaceImages.map((src, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl aspect-w-16 aspect-h-9">
                <img
                  src={src}
                  alt={`Creative Space ${index + 1}`}
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>

          <button className="bg-gradient-to-r from-[#6a3093] to-[#a044ff] text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold mt-8 sm:mt-10 mx-auto block shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-transform">
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobReviewPage;
