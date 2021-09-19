import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
const Footer = () => {
     const [pathname] = useState(useHistory().location.pathname)
    return (
        // 
        <div className="footer-wrap" style={{bottom: ((pathname === "/posts") || (pathname === "/") || (pathname === "/tagged")) && "0", top: (pathname.indexOf('comments') > 0 && "100%")}}>
            <Link to="/">
                <img src="/assets/icons/home.svg" alt="" />
            </Link>

            <Link to="/">
                <img src="/assets/icons/search.svg" alt="" />
            </Link>

            <Link to="/">
                <img src="/assets/icons/add-media.svg" alt="" />
            </Link>

            <Link to="/posts">
                <img src="/assets/icons/dislike.svg" alt="" />
            </Link>

            <Link to="/">
                <img src="/assets/media/profile-photo.jpg" style={{borderRadius: "50%"}} alt="" />
            </Link>
        </div>
    );
};

export default Footer;