import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchRecommendation from "./SearchRecommendation";
import "./Searchbar.css";

const SearchServices = () => {
  const [query,setQuery]=useState("");
  const [isOpen,setIsOpen]=useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const services = [
    "Plumbing",
    "Electrician",
    "Cleaning",
    "Carpentry",
    "Gardening",
    "Painting",
    "Pest Control",
    "Home Repair",
    "AC Service",
  ];

  const handleInputChange = (event) => {
    const input = event.target.value;
    setSearchInput(input);

    // Filter services based on input
    const filteredServices = services.filter((service) =>
      service.toLowerCase().includes(input.toLowerCase())
    );
    setRecommendations(filteredServices);
  };

  const handleSelectRecommendation = (recommendation) => {
    setSearchInput(recommendation);
    setRecommendations([]); // Clear recommendations after selection
  };

  return (
    <div className="search-services">
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

      {/* Add SearchRecommendation */}
      
    </div>
  );
};

export default SearchServices;
