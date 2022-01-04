import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import AppsIcon from '@mui/icons-material/Apps'
import NotificationsIcon from'@mui/icons-material/Notifications'


function Header() {
    return (
        <div className="header">

            <div className="left">
            <MenuIcon/>
            {/* <div className="icon"> */}
            <img  className="header_logo" src="/youtube.png" alt="" />
             {/* <strong>youtube</strong> */}
             {/* </div> */}
            </div>
           
           <div className="header_input">
           <input type="text"  placeholder="search"/> 
            <SearchIcon className="header_input_icon"/>
           </div>

           <div className="header_icon">
           <VideoCallIcon className="header_icons"/>
            <AppsIcon className="header_icons"/>
            <NotificationsIcon className="header_icons"/>
           </div>
           
           
           
            
        </div>
    )
}

export default Header
