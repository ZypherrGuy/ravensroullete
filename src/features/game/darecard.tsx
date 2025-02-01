import React from "react";

interface DareCardProps {
  dare: string;
}

const DareCard: React.FC<DareCardProps> = ({ dare }) => {
  return (
    <div className="card dare-card">
      <h2 className="card-title">Your Dare</h2>
      <p className="card-content">{dare}</p>
    </div>
  );
};

export default DareCard;
