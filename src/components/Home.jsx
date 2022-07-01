import React from "react";
import Search from "./Search";
import CountryContainer from "./CountryContainer";
import axios from "axios";
import { useState, useEffect } from "react";


const Home = ({ theme, navigate }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  // const [continent, setContinent] = useState("");
  const [newCountry] = useState("");
  const [record, setRecord] = useState({ country: [], continent: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = newCountry ? `name/${newCountry}` : "all";
    getData(query);
  }, [newCountry]);

  const getData = async (category = "all") => {
    setLoading(true);
    axios(`https://restcountries.com/v3.1/${category}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setRecord((prev) => ({ ...prev, country: response.data }));
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const filterCountries = data.filter((country) => {
    return (
      country.name.common
        .toString()
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      country.region
        .toString()
        .toLowerCase()
        .includes(record.continent.toLowerCase())
    );
  });

  return (
    <>
      <Search
        handleChange={(e) => setSearch(e.target.value)}
        handleClick={(e) =>
          setRecord((prev) => ({ ...prev, continent: e.target.textContent }))
        }
        theme={theme}
      />
      <CountryContainer
        theme={theme}
        filterCountries={filterCountries}
        handleCountry={(country) => {
          // setNewCountry(country);
          // setRecord((prev)=> ({...prev, country:}))
          navigate("/moreinfo", { state: country });
        }}
        loading={loading}
      />
    </>
  );
};

export default Home;
