import React from 'react'
import { Avatar } from '@mui/material'
import './videoCard.css'

function VideoCard({image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className="videoCard">
            <img className="thumbnail"
             src={image} alt="" />
            <div className="video_info">
            <Avatar className="video_avatar" 
            src={channel}
             alt={channelImage}/>

             <div className="video_text">
                 <h4>{title}</h4>
                 <p>{channel}</p>
                 <p>
                    {views}.{timestamp}
                 </p>
             </div>
            </div>
          
        </div>
    )
}

export default VideoCard
