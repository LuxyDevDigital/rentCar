import React from "react";

const BrandCard = ({ logo, name }) => {
  return (
    <div className="brand-card">
      <img src={logo} alt={name} />
      <span>{name}</span>
    </div>
  );
};

export default BrandCard;
