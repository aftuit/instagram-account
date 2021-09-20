import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import {Modal} from "reactstrap"
const Footer = () => {

     const [pathname] = useState(useHistory().location.pathname)
     const [search, setSearch] = useState(false)
     const [user, setUser] = useState("")
     const toggle = () => setSearch(!search)

     const searchUser = (username) => {
         if(username.length > 0){
             window.location.href = `https://www.instagram.com/${username}/`;
             setUser("");
         }
     }

    return (
        <div className="footer-wrap" style={{ 
                display: (pathname.indexOf('comments') > 0 && "none"),
                }}>
            <Modal toggle={toggle} isOpen={search}>
                <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter any username..." 
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                />
                <button className="btn btn-success" onClick={()=>searchUser(user)}>search</button>
            </Modal>
            <Link to="/">
                <img src="/assets/icons/home.svg" alt="" />
            </Link>

            <a fref="#">
                <img onClick={toggle} src="/assets/icons/search.svg" alt="" />
            </a>

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