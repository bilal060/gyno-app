import React from "react";
import { Link, useLocation } from "react-router-dom";
import './header.css'
const list = [
  { title: "Home", link: "/" },
  { title: "Family Tree", link: "/familytree" },
  { title: "Geological Sources", link: "/geological" },
  { title: "Shop", link: "/shop" },
  { title: "About Us", link: "aboutus" },
  { title: "Contact Us", link: "contactus" },
];
function AppHeader(props) {
  const path = useLocation().pathname
  const { isSelected, setisSelected } = props
  console.log(path)
  return (
    <div className="app-header d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-between align-items-center header-width">
        <div className="app-logo">Logo</div>
        <ul className="lg-list align-items-center justify-content-center gap-3 m-0">
          {list.map((val, index) => {
            return (
              <li key={index} className='header-list'>
                <Link to={val.link} className={`${path === val.link ? 'active' : ""}`}>
                  {val.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <button className="login-btn btn">Login</button>
          <button className="btn register-btn">Register</button>
          <button className="btn menu-btn border ms-3" onClick={() => { setisSelected(!isSelected) }}>Menu</button>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
