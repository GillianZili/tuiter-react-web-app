import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "../explore/index.css";

const NavigationSidebar = ({ active = 'Explore' }) => {
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?' myactive':''}`}>Home</Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'Explore'?' myactive':''}`}>Explore</Link>
            <Link to="/" className="list-group-item">Labs</Link>
            <a className={`list-group-item${active === 'Notifications' ? ' myactive' : ''}`}>Notifications</a>
            <a className={`list-group-item${active === 'Messages' ? ' myactive' : ''}`}>Messages</a>
            <a className={`list-group-item${active === 'Bookmarks' ? ' myactive' : ''}`}>Bookmarks</a>
            <a className={`list-group-item${active === 'Lists' ? ' myactive' : ''}`}>Lists</a>
            <a className={`list-group-item${active === 'Profile' ? ' myactive' : ''}`}>Profile</a>
            <a className={`list-group-item${active === 'More' ? ' myactive' : ''}`}>More</a>
        </div>)
};
export default NavigationSidebar;