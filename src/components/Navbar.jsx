import React from "react"

const Navbar = () => {
    return(
        <div className="navigation">
            <nav className="px-2 py-3 navbar-wrapper d-flex align-items-center justify-content-between">
                <p className="m-0">
                    <b>farrux__aktamov</b>
                </p>

                <div className="button-group">
                    <img className="mx-2" src="/assets/icons/add-media.svg" alt="" />
                    <img className="mx-2" src="/assets/icons/burger.svg" alt="" />
                </div>
            </nav>
        </div>
    )
}
export default Navbar