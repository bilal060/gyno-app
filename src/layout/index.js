import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import AppHeader from './header/header'
import './style.css'
const list = [
    { title: "Home", link: "/" },
    { title: "Family Tree", link: "/familytree" },
    { title: "Geological Sources", link: "/geological" },
    { title: "Shop", link: "/shop" },
    { title: "About Us", link: "aboutus" },
    { title: "Contact Us", link: "contactus" },
];
function MainLayout({ children }) {
    const [isSelected, setisSelected] = useState(false)
    const path = useLocation().pathname

    return (
        <div className='app-container postion-relative'>
            <AppHeader isSelected={isSelected} setisSelected={setisSelected} />
            <div className='main-content'>
                {children}
            </div>
            
            <div className={`menu-sidebar d-flex ${isSelected ? 'menu-sidebar-active' : ''}`}>
                <div className="menu-list-sidebar">
                    <ul className="ps-4">
                        {list.map((val, index) => {
                            return (
                                <li key={index} className='sidebar-list'>
                                    <Link to={val.link} className={`w-100 ${path === val.link ? 'active' : ""}`} onClick={() => { setisSelected(false) }}>
                                        {val.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="menu-list-right-sidebar" onClick={() => { setisSelected(false) }}></div>
            </div>
        </div>
    )
}

export default MainLayout