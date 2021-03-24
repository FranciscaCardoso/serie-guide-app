import { useState } from "react";

const Search = ({ getQuery }) => {
  const [search, setSearch] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    getQuery(search);
  };

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      getQuery(search);
    }
  };

  // const onChange = (q) => {
  //   setSearch(q);
  //   getQuery(q);
  // };

  return (
    <div className="searching">
      <form>
        <input
          type="text"
          className="search"
          placeholder="Procurar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={onKeyUp}
        />
        <span className="material-icons btn-search" onClick={handleOnSubmit}>
          search
        </span>
      </form>
    </div>
  );
};

export default Search;
