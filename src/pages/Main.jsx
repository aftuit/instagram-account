import React, { useEffect, useState } from "react"
import Common from "./Common.jsx"
import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import HighLights from "../components/HighLights.jsx"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
const Main = (props) => {
    const [tab, setTab] = useState(true);

    return (
        <Common history={props.history}>
                <Navbar />
                <div className="main-content">
                <div className="profile-info d-flex  align-items-center justify-content-between">
                    <img src="/assets/media/profile-photo.jpg" alt="" />

                    <div className="row m-0">
                        <div className="col-4 text-center">
                            <h5 className="m-0">8</h5>
                            <p>Posts</p>
                        </div>
                        <div className="col-4 text-center">
                            <h5 className="m-0">520</h5>
                            <p>Followers</p>
                        </div>
                        <div className="col-4 text-center">
                            <h5 className="m-0">287</h5>
                            <p>Following</p>
                        </div>
                    </div>
                </div>

                <div className="bio__ mt-3">
                    <h6>Farrux Aktamov</h6>
                    <p>Web Developer 💻 <br />
                        Student of TUIT 🏛 <br />
                        Fakulty: Information Security <br />
                        <a href="https://t.me/Farrux_Aktamov">t.me/Farrux_Aktamov</a>
                    </p>
                </div>

                <div className="button-group mt-3 d-flex">
                    <button className=" btn-block" type="button">Edit Profile</button>
                    <button className=" ml-1 px-2" type="button">{"⏷"}</button>
                </div>

                <HighLights />

                <div className="publication_pages mt-3">
                    <div className="sides_ w-100 mt-3">
                            <Link to="/" className={`left_side ${useHistory().location.pathname === "/" && 'active'}`} onClick={() => setTab(true)}>
                                <img src="/assets/icons/media-tab.svg" className="mx-auto" alt="" />
                            </Link>
                            <Link to="/tagged" className={`right_side ${useHistory().location.pathname === "/tagged" && 'active'}`} onClick={() => setTab(false)}>
                                <img src="/assets/icons/instagram-tag.svg" className="mx-auto" alt="" />
                            </Link>
                    </div>

                    {props.children}
                </div>

            </div>
        </Common >
    )
}

export default Main