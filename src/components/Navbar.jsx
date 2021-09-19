import React, {useState} from "react"
import {Modal} from "reactstrap";
export const Navbar = () => {

    const [account, setAccount] = useState(false)

    const toggle = () => setAccount(!account)
    return( 
       <div className="navigation">
            <nav className="px-2 py-3 navbar-wrap d-flex align-items-center justify-content-between">
            <p className="m-0" style={{cursor: "pointer"}} onClick={toggle}><b>farrux__aktamov {"⏷"}</b><span></span></p>

            <div className="button_group">
                <img src="/assets/icons/add-media.svg" className="mx-1" alt="" />
                <img src="/assets/icons/burger.svg" className="mx-1" alt="" />
            </div>
            <Modal toggle={toggle} isOpen={account}>
                <div className="accounts">
                <div className="current__account d-flex align-items-center justify-content-between">
                        <span>
                        <img src="/assets/media/profile-photo.jpg" alt="" />
                            <span className="ml-2">farrux__aktamov</span>
                        </span>
                        <div className="d-flex align-items-center justify-content-center "><b className="d-block text-dark">●</b></div>
                </div>

                <div className="add__account mt-2">
                        <img src="/assets/icons/plus.svg" alt="" />
                        <span className="ml-3">Add Account</span>
                </div>
                </div>
            </Modal>
        </nav>
       </div>
    )
}
export default Navbar
