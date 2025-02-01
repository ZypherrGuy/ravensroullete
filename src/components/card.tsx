import React from "react";

interface CardProps {
  title: string;
  content: string;
  footer?: string;
}

const Card: React.FC<CardProps> = ({ title, content, footer }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
      {footer && <p className="card-footer">{footer}</p>}
    </div>
  );
};

export default Card;
