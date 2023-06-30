import React, { useState } from "react";
import RoofingIcon from '@mui/icons-material/Roofing';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeedIcon from '@mui/icons-material/Feed';
import InfoModal from "./InfoMode";
import ContactModal from "./ContactModel";
import GuideModal from "./GuideModel";
export default function Navbar() {
    const [showContact, setShowContact] = useState(false)
    const [showGuide, setShowGuide] = useState(false)
    const [showInfo, setShowInfo] = useState(false)

    const [isHomeHovered, setHomeHovered] = useState(false);
    const [isContactHovered, setContactHovered] = useState(false);
    const [isInfoHovered, setInfoHovered] = useState(false);
    const [isGuidesHovered, setGuidesHovered] = useState(false);

  
    const [isSunHovered, setisSunHovered] = useState(false)
    const [isMoonHovered, setisMoonHovered] = useState(false)
function handleContact(){
    setShowGuide(false)
    setShowInfo(false)
    setShowContact(true)
}
function handleGuide(){
    setShowInfo(false)
    setShowContact(false)
    setShowGuide(true)
  
}
function handleInfo(){
    setShowGuide(false)
    setShowContact(false)
    setShowInfo(true)
}
function handleHome(){
    setShowGuide(false)
    setShowContact(false)
    setShowInfo(false)
}


    return (<>

       
        <div className="    mx-0  d-flex align-items-center justify-content-center" style={{ width: "5%", height: "100%", background: "black", position: "fixed", top: "0px", left: "0px" ,zIndex:"20"}}>
            <div className="  px-3 pt-2  text-white " >

                <ul className="nav  nav-pills flex-column  mb-0  align-items-center  align-items-md-start " id="menu"  >
                    <li className="nav-item">
                        <div onClick={handleHome} className="btn" >
                            <RoofingIcon style={{ color: isHomeHovered ? "orange" : "white", fontSize: isHomeHovered ? "7vmin" : "4vmin" }} onMouseEnter={() => setHomeHovered(true)} onMouseLeave={() => setHomeHovered(false)} /> <span className="ms-1 d-none d-md-inline fs-7" style={{ color: "white", fontSize: "2vmin" }}>Home</span>
                        </div>
                    </li>


                    <li>

                        <div className="btn" onClick={handleContact}   >
                            <AccountCircleIcon style={{ color: isContactHovered ? "orange" : "white", fontSize: isContactHovered ? "7vmin" : "4vmin" }} onMouseEnter={() => setContactHovered(true)} onMouseLeave={() => setContactHovered(false)} /> <span className="ms-0 d-none d-md-inline fs-7" style={{ color: "white", fontSize: "2vmin" }}>Contact</span>
                        </div>
                    </li>


                    <li>
                        <div onClick={handleInfo} className="btn">
                            <FeedIcon style={{ color: isInfoHovered ? "red" : "white", fontSize: isInfoHovered ? "7vmin" : "4vmin" }} onMouseEnter={() => setInfoHovered(true)} onMouseLeave={() => setInfoHovered(false)} /> <span className="ms-0 d-none d-md-inline fs-7" style={{ color: "white", fontSize: "2vmin" }}>Info</span>
                        </div>
                    </li>


                    <li>

                        <div className="btn" onClick={handleGuide} >
                            <PlaylistAddIcon style={{ color: isGuidesHovered ? "orange" : "white", fontSize: isGuidesHovered ? "7vmin" : "5vmin" }} onMouseEnter={() => setGuidesHovered(true)} onMouseLeave={() => setGuidesHovered(false)} /> <span className="ms-0 d-none d-md-inline fs-7 hover-zoom hover-shadow" style={{ color: "white", fontSize: "2vmin" }}>Guide</span>
                        </div>


                    </li>

                </ul>
                <hr />


            </div>
        </div>
        {showGuide ? <GuideModal onClose={() => setShowGuide(false)} /> : null}
        {showContact ? <ContactModal onClose={() => setShowContact(false)} /> : null}
        {showInfo ? <InfoModal onClose={() => setShowInfo(false)} /> : null}






    </>
    )
}
