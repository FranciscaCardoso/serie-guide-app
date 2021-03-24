import { Link } from "react-router-dom";
import SearchBar from "./Search";
const NavBar = () => {
  return (
    <div className="topnav">
      <nav className="textbox">
        <div className="a">
          <Link to="/">
            <h4>Serie Guide</h4>
          </Link>
          <Link to="/Favoritos">Favoritos</Link>
        </div>
        {/* <ul>
          <SearchBar />
        </ul> */}
      </nav>
    </div>
  );
};

export default NavBar;
