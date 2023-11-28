import { useState } from "react";

function SearchHeader({ search }) {
  const [value, setValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search Image"
        />
      </form>
    </div>
  );
}
export default SearchHeader;



