import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import HistoryIcon from '@mui/icons-material/History'
import WatchLaterIcon from '@mui/icons-material/WatchLater'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow Icon={HomeIcon} title="home"/>
            <SidebarRow Icon={WhatshotIcon} title="trending"/>
            <SidebarRow Icon={SubscriptionsIcon} title="subscription"/>
            <hr/>
            <SidebarRow Icon={VideoLibraryIcon} title="library"/>
            <SidebarRow Icon={HistoryIcon} title="history"/>
            <SidebarRow Icon={WatchLaterIcon} title="watch later"/>
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="liked videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="show more"/>
            <hr/>
           
        </div>
    )
}

export default Sidebar
