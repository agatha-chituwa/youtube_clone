import React from 'react'
import './SidebarRow.css'


function SidebarRow({Icon, title}) {
    return (
        <div className="sidebarRow">
            <Icon className="sidebar_icon"/>
            <h1 className="sidebar_title">{title}</h1>
            
        </div>
    )
}

export default SidebarRow
