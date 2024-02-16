import PropTypes from "prop-types";

export default function CountryFullDetails({ country, handleBackButton }) {
  return (
    <div className="mx-auto flex flex-wrap flex-col justify-center content-center">
      <button
        className="text-2xl mx-auto px-10 mt-4 mb-4 py-2 rounded-full border border-gray-400 bg-slate-300"
        onClick={handleBackButton}
      >
        <span className="text-3xl">&larr;</span> Back
      </button>

      <div className="border border-black p-8 w-5/6 h-auto overflow-auto grid grid-cols-2">
        <img
          src={country.flags && country.flags.png}
          className="border border-black mx-auto my-auto"
        />
        <div>
          <p className="text-xl mt-2 font-bold">
            {country.name && country.name.common}
          </p>{" "}
          <p className="text-xl mt-2 font-normal">
            Population:{" "}
            <span className="font-bold">{country.population || "N/A"}</span>{" "}
          </p>
          <p className="text-xl mt-2 font-normal">
            Continent:{" "}
            <span className="font-bold">
              {country.continents && country.continents.join(", ")}
            </span>{" "}
          </p>
          <p className="text-xl mt-2 font-normal">
            Timezone:{" "}
            <span className="font-bold">
              {country.timezones && country.timezones[0]}
            </span>{" "}
          </p>
          <p className="text-xl mt-2 font-normal">
            Currency:{" "}
            <span className="font-bold">
              {country.currencies && Object.keys(country.currencies).join(", ")}
            </span>{" "}
          </p>
          <p className="text-xl mt-2 font-normal">
            Capital:{" "}
            <span className="font-bold">{country.capital || "N/A"}</span>{" "}
          </p>
          <p className="text-xl mt-2 font-normal">
            Languages:{" "}
            <span className="font-bold">
              {country.languages && Object.values(country.languages).join(", ")}
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

CountryFullDetails.propTypes = {
  country: PropTypes.shape({
    flags: PropTypes.shape({
      png: PropTypes.string.isRequired,
    }),
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
    }),
    population: PropTypes.number,
    continents: PropTypes.arrayOf(PropTypes.string),
    timezones: PropTypes.arrayOf(PropTypes.string),
    capital: PropTypes.string,
    languages: PropTypes.objectOf(PropTypes.string),
    currencies: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  }),
  handleBackButton: PropTypes.func.isRequired,
};
