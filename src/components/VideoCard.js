import React from 'react'
import { Avatar } from '@mui/material'
import './videoCard.css'

function VideoCard({image, title, channel, views, timestamp, channelImage}) {

    // async function getvideos(url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBVbftK43cCIKuQsCXxirBo7t-V0xwlCls&type=video&q=clever%20programmer`){
    //     try {
       
    //     const response = await fetch(url, {
    //       "method": "GET",
    //     })
    //     const result = await response.json();
    //     setVideo(result.items);
    //     // console.log(result.items[0].snippet.thumbnails.default.url);
    
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    
    // };
    
    
    // useEffect(() => {
    // getvideos();
    
    // }, []);
    return (
        <div className="videoCard">
            <iframe className="thumbnail"
            src={image}
            >
            </iframe>
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
