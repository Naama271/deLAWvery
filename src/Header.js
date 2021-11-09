import logo from "./DeLawVeryLogo.svg";
import { BrowserRouter , Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div></div>
       <img src={logo} alt="logo" />
       <div>
      <BrowserRouter>
        <Link to="/about">Home quiz</Link>
      </BrowserRouter>
      </div>
    </header>
  );
}

export default Header;
