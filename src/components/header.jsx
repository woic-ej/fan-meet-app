import logo from "../assets/weverse-logo.png";
import "../styles/header.css";

const header = () => {
  return (
    <header className="header">
      <img src={logo} alt="" id="logo"></img>
    </header>
  );
};

export default header;
