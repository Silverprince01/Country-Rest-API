import React from "react";

const Header = ({ handleTheme, theme }) => {
  return (
    <div className="header">
      <h2> Where in the World </h2>
      <p onClick={handleTheme}>
        <img
          src={
            theme
              ? `${process.env.PUBLIC_URL}/assets/images/icon-moon.svg`
              : `${process.env.PUBLIC_URL}/assets/images/icon-sun.svg`
          }
          alt="sun/moon"
        />
        {theme ? "Light Mode" : "Dark Mode"}
      </p>
    </div>
  );
};

export default Header;
