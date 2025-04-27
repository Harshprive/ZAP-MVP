
import SearchService from "../../HomeNavbar/SerachBar/SearchService";



import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Slide,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./Searchbar.css";

// Static list of cities
const cities = [
  "Agra", "Ahmedabad", "Bangalore", "Bhopal", "Chandigarh", "Chennai",
  "Coimbatore", "Delhi", "Hyderabad", "Indore", "Jaipur", "Kanpur", "Kochi",
  "Kolkata", "Lucknow", "Ludhiana", "Mumbai", "Nagpur", "Nasik", "Pune",
  "Surat", "Trivandrum", "Vadodara", "Vishakhapatnam"
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Searchbar2 = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [citySearch, setCitySearch] = useState("");

  // Function to toggle the dialog
  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
  };

  // Filter the cities based on search input
  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(citySearch.toLowerCase())
  );

  const handleCitySelect = (city) => {
    setSelectedCity(city); // Updates the local state
    setDialogOpen(false); // Closes the dialog
    setCitySearch(""); // Clears the search input
    console.log("Selected city:", city); // Logs the selected city
  };

  return (
    <div className="search-bar">
      <div className="city-dropdown">
        <IconButton onClick={toggleDialog} className="LocationIcon">
          <LocationOnOutlinedIcon />
        </IconButton>
        <button onClick={toggleDialog} className="city-select-button">
          {selectedCity || "Select city"}
          <IconButton className="dropdown-icon">
            {dialogOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </IconButton>
        </button>

        <Dialog
          open={dialogOpen}
          onClose={toggleDialog}
          TransitionComponent={Transition}
          PaperProps={{
            style: {
              height: "320px",
              width: "600px",
              padding: "0px",
              margin: "0px",
            },
          }}
        >
          <DialogTitle>
            <IconButton
              onClick={toggleDialog}
              style={{ position: "absolute", right: 8, top: 8 }}
            >
              <CloseIcon className="closeIcon" fontSize="small" />
            </IconButton>
          </DialogTitle>
          <DialogContent className="dialogContent">
            <div className="city-selector">
              <h2>Choose Your City</h2>
              <input
                type="text"
                placeholder="Find your city"
                value={citySearch}
                onChange={(e) => setCitySearch(e.target.value)}
                className="city-search-input"
              />
              <div className="info-text">We are available in 80+ cities</div>
              <div className="city-list">
                {filteredCities.length > 0 ? (
                  filteredCities.map((city, index) => (
                    <button
                      key={index}
                      className="city-button"
                      onClick={() => handleCitySelect(city)}
                    >
                      {city}
                    </button>
                  ))
                ) : (
                  <div className="no-cities">City not found</div>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <SearchService />
    </div>
  );
};

export default Searchbar2;
