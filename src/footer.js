import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "Relative",
    // width: " 150%",
    top:"50px",
    bottom: "10px",
  };
  return (
    <footer style={footerStyle} className="text-light py-3">
      <p>Copyright &copy; Movies Mania</p>
    </footer>
  );
};
