import React from "react";
// import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MoreInfo = () => {
  // const [border, setBorder] = useState("");
  // window.location.reload(false);
  const { state } = useLocation();
  console.log({ state });
  return (
    <div className="moreinfo">
      <button className="back">
        <Link to="/">Back </Link>
      </button>

      <div className="main">
        <img src={state.flags.png} alt={state.name.common} />
        <div >
          <h3>{state.name.common}</h3>
          <div  className="names">
            <ul className="rightHand">
              <li>
                <b>Native Name:</b>
                <span>
                  {
                    state.name.nativeName[Object.keys(state.name.nativeName)[0]]
                      .common
                  }
                </span>
              </li>
              <li>
                <b>Population:</b> <span>{state.population} </span>
              </li>
              <li>
                <b>Region:</b>
                <span>{state.region} </span>
              </li>
              <li>
                <b>Sub Region:</b> <span>{state.subregion}</span>
              </li>
              <li>
                <b>Capital:</b> <span> {state.capital}</span>
              </li>
            </ul>
            <ul className="leftHand">
              <li>
                <b>Top Level Domains:</b> <span>{state.tld} </span>
              </li>
              <li>
                <b> Currencies:</b>
                <span>
                  {state.currencies[Object.keys(state.currencies)[0]].name}
                </span>
              </li>
              <li>
                <b>Language:</b>
                <span>{state.languages[Object.keys(state.languages)[0]]} </span>
              </li>
            </ul>
          </div>
          <br />
          <div className="borders">
            <p>Border Countries:</p>
            
            {!state.borders ? (
              <p>No borders</p>
            ) : (
              state.borders.map((border, i) => {
                return <button key={i}>{border}</button>;
              })
            )}
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default MoreInfo;
