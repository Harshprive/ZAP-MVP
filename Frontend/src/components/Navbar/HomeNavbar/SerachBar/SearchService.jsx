import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Searchbar.css";

const SearchServices = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      title: "Plumbing",
      description: "Fixing leaks, installing pipes, and other plumbing work.",
      image: "https://th.bing.com/th/id/OIP.fYmy8mReDodRJli2knY9lQHaE7?rs=1&pid=ImgDetMain",
      category: "Home Services",
    },
    {
      title: "Electrician",
      description: "Electrical installations and repairs.",
      image: "https://th.bing.com/th/id/OIP.fYmy8mReDodRJli2knY9lQHaE7?rs=1&pid=ImgDetMain",
      category: "Home Services",
    },
    {
      title: "Cleaning",
      description: "House cleaning and maintenance.",
      image: "https://th.bing.com/th/id/OIP.fYmy8mReDodRJli2knY9lQHaE7?rs=1&pid=ImgDetMain",
      category: "Household",
    },
    // Add more service objects as needed
  ];

  const handleInputChange = (event) => {
    const input = event.target.value;
    setSearchInput(input);

    if (input.trim()) {
      const filtered = services.filter((service) =>
        service.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredServices(filtered);
      setIsOpen(filtered.length > 0);
    } else {
      setFilteredServices([]);
      setIsOpen(false);
    }
  };

  const handleSelectService = (service) => {
    setSearchInput(service.title);
    setFilteredServices([]);
    setIsOpen(false);
  };

  return (
    <div className="search-services relative">
      <div className="divider" />
      <SearchIcon className="search-icon" />
      <input
        type="text"
        className="service-search-input"
        placeholder="Search Your Service"
        value={searchInput}
        onChange={handleInputChange}
      />
      <button className="service-search-button">Search</button>

      {/* Recommendations Dropdown */}
      {isOpen && (
        <div className="absolute w-full  bg-white border rounded-lg shadow-lg max-h-96 overflow-auto z-10 mt-60">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="p-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => handleSelectService(service)}
            >
              <div className="flex items-start space-x-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-medium">{service.title}</h4>
                  <p className="text-sm text-gray-500">{service.description}</p>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchServices;
