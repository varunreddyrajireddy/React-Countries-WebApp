import PropTypes from "prop-types";

export default function CountryCard({ country, handleNewComponent }) {
  const handleClick = () => {
    handleNewComponent(country);
  };

  return (
    <div
      className="border border-black p-8 w-5/6 h-96 overflow-auto cursor-pointer mb-8"
      onClick={handleClick}
    >
      <img
        src={country.flags.svg}
        className=" w-96 mx-auto h-48 object-cover"
      />
      <p className="text-xl mt-2 font-bold">{country.name.common}</p>
      <p className="text-xl mt-2 font-normal">
        Capital: <span className="font-bold">{country.capital}</span>
      </p>
      <p className="text-xl mt-2 font-normal">
        Continent: <span className="font-bold">{country.continents}</span>
      </p>
    </div>
  );
}

CountryCard.propTypes = {
  country: PropTypes.shape({
    flags: PropTypes.shape({
      svg: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.shape({
      common: PropTypes.string.isRequired,
    }),
    capital: PropTypes.array,
    continents: PropTypes.array,
  }).isRequired,
  handleNewComponent: PropTypes.func,
};
