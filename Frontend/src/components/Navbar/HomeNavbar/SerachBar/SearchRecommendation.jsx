import React from "react";
import "./Searchbar.css";

const SearchRecommendation = ({ recommendations, onSelectRecommendation }) => {
  return (
    <div className="search-recommendation">
      {recommendations.length > 0 ? (
        <ul className="recommendation-list">
          {recommendations.map((item, index) => (
            <li
              key={index}
              className="recommendation-item"
              onClick={() => onSelectRecommendation(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-recommendations">No recommendations available</div>
      )}
    </div>
  );
};

export default SearchRecommendation;
