import logo from "../../assets/weverse-logo.png";
import "../../styles/common/header.css";

const header = () => {
  return (
    <header className="header">
      <a href="https://weverse.io/" target="_blank">
        <img src={logo} alt="" id="logo"></img>
      </a>
    </header>
  );
};

export default header;
