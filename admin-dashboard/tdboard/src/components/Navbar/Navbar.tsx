import "./Navbar.scss";
import Logo from "../../assets/logo.svg";
import Search from "../../assets/search.svg";
import app from "../../assets/app.svg";
import expand from "../../assets/expand.svg";
import notification from "../../assets/notifications.svg";
import setting from "../../assets/setting.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>Dboard</span>
      </div>
      <div className="icons">
        <img className="icon" src={Search} alt="" />
        <img  className="icon"src={app} alt="" />
        <img className="icon" src={expand} alt="" />
        <div  className="notification icon">
          <img src={notification} alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1697541283989-bbefb5982de9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
            alt=""
          />
          <span>Pumkin</span>
        </div>
        <img className="icon" src={setting} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
