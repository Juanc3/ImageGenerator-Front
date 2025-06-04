import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

function Header() {
  return (
    <header className="w-full max-w-7xl mx-auto flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-72 object-contain" />
      </Link>
      <div className="flex items-center">
        <Link
          to={"/favorites"}
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md mr-4"
        >
          Favorites
        </Link>
        <Link
          to={"/create-post"}
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md mr-10"
        >
          Create
        </Link>
      </div>
    </header>
  );
}

export default Header;
