import React from "react";

function Card({ title, children }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        backgroundColor: "white",
      }}
    >
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}

export default Card;