import { useEffect, useState } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";
import Searchbar from "./Searchbar";
import CountryFullDetails from "./CountryFullDetails";

export default function Countries() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [prevData, setPrevData] = useState(null);

  const handleNewComponent = (country) => {
    setSelectedCountry(country);
    setPrevData(data);
  };

  const handleBackButton = () => {
    setSelectedCountry(null);
    setFilteredData(prevData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const res = await axios(`https://restcountries.com/v3.1/all`);
        const data = res.data;
        console.log(data);
        setData(data);
        setFilteredData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value
      .replace(/[^a-zA-Z]/g, "")
      .toLowerCase()
      .trim();
    if (searchTerm !== null) {
      const newData = data.filter((country) =>
        country.name.common.toLowerCase().startsWith(searchTerm)
      );
      if (newData.length > 0) {
        setFilteredData(newData);
        setError(false);
      } else {
        setError(true);
      }
    } else {
      setFilteredData(data);
      setError(false);
    }
  };

  if (loading) {
    return (
      <h1 className="text-4xl text-center my-24">
        Please wait while we are fetching the data...
      </h1>
    );
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  if (selectedCountry) {
    return (
      <CountryFullDetails
        country={selectedCountry}
        handleBackButton={handleBackButton}
      />
    );
  }

  const options = [
    "Asia",
    "Africa",
    "Antarctica",
    "Europe",
    "North America",
    "South America",
    "Arctic",
  ];

  const handleFilter = (e) => {
    let val = e.target.value;
    if (val === "All") setFilteredData(data);
    else {
      const newData = data.filter((country) =>
        country.continents[0].includes(val)
      );
      setFilteredData(newData);
    }
  };

  return (
    <div className="overflow-scroll">
      <Searchbar
        handleSearch={handleSearch}
        handleFilter={handleFilter}
        options={options}
      />
      <div className=" sm:m-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-2 py-12  justify-items-center">
        {error ? (
          <h1 className="text-7xl col-span-6">No Results Found !</h1>
        ) : (
          filteredData.map((country) => (
            <CountryCard
              key={country.cca3}
              country={country}
              handleNewComponent={handleNewComponent}
            />
          ))
        )}
      </div>
    </div>
  );
}
