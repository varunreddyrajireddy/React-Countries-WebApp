import PropTypes from "prop-types";

export default function Searchbar({ handleFilter, handleSearch, options }) {
  return (
    <>
      <div className="mx-auto flex justify-center mt-4 flex-col gap-2 sm:flex-row">
        <input
          type="text"
          placeholder="Search for a country"
          className="w-4/5 mx-auto border border-black rounded-full p-4 sm:ml-8"
          onChange={handleSearch}
        />
        <select
          onChange={handleFilter}
          className="mx-auto sm:mr-8 border border-black rounded-full p-4 "
        >
          <option>All</option>
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

Searchbar.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
