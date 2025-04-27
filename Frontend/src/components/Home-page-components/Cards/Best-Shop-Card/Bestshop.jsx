import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const BestShopCard = ({ shop }) => {
  return (
    <div className="shop-card" key={shop.id}>
      <img src={shop.image} alt={`Image of ${shop.name}`} className="shop-image" />
      <div className="shop-info">
        <span className="shop-category">{shop.category}</span>
        <div className="shop-data">
          <h3 className="shop-name">{shop.name}</h3>
          <p className="shop-description">{shop.description}</p>
          <div className="shop-details">
            <span className="shop-detail-item">
              <NearMeIcon /> {shop.location}
            </span>
            <span className="shop-detail-item">
              <AccessTimeIcon /> {shop.openingTime}
            </span>
          </div>
        </div>
        <div className="shop-meta">
          <div className="rating">
            <div className="stars">{shop.rating}</div>
            <span className="review-count">({shop.reviews} reviews)</span>
          </div>
          <span className={`shop-status ${shop.statusClass}`}>{shop.status}</span>
        </div>
        <div class="w-full h-[30px] pb-5 flex justify-center items-center ">
  <a 
    href="#" 
    class="h-full w-[95%] p-4 bg-[#4f23b8] text-white text-center no-underline rounded-lg mt-8 transition-colors duration-300 hover:bg-[#2980b9] flex justify-center
    items-center"
  >
    Visit Shop
  </a>
</div>
      </div>
    </div>
  );
};

export default BestShopCard;
