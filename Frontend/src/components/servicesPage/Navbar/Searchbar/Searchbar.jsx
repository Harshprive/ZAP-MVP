import React, { useEffect, useState } from "react";
import "./Searchbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import axios from "axios";

const SearchBar = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    // Fetch city names from the backend
    const fetchCities = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cities"); // Replace with your backend URL
        setCities(response.data);
        setSelectedCity(response.data[0]); // Set the first city as the default
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  return (
    <div className="searchbar">
      <div className="location">
        <span className="icon">
          <i className="fa-solid fa-location-dot"></i>
        </span>
        {/*<select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>*/}
        <select>
                    <option value="nagpur">Nagpur</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                </select>
      </div>
      <span className="mg">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input type="text" className="searchhere" placeholder="Search Services" />
      <button className="search">SEARCH</button>
    </div>
  );
};

export default SearchBar;
