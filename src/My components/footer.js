import React from "react";
export const Footer = () => {
  let footerCss = {
    position: "sticky",
    width: "100%",
    top: "100vh",
  };
  return (
    <footer className="bg-dark text-light py-3 footer" style={footerCss}>
      <p className="text-center">Copyright &copy; TodoList.com</p>
    </footer>
  );
};
