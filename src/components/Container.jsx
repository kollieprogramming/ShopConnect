import React from "react";

function Container({ children }) {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f7f7f7",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}

export default Container;