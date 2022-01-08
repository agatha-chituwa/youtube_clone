import React from 'react'
import './Recomended.css'
import VideoCard from './VideoCard'
import {useEffect, useState} from 'react';


function Recomended() {

  const [video, setVideo] = useState([]);
  
  async function getRepos(url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBVbftK43cCIKuQsCXxirBo7t-V0xwlCls&type=video&q=clever%20programmer`){
    try {
   
    const response = await fetch(url, {
      "method": "GET",
   

    })
    const result = await response.json();
    setVideo(result.items);
    console.log(result.items[0].snippet.thumbnails.default.url);
  

    } catch (error) {
        console.log(error);
        
    }

};


useEffect(() => {
getRepos();

}, []);


    return (
        <div className="recomended_videos"> 
        

        <h2>Recommended</h2>
        <div className="recomended">


        
    {video.map(i => (
             <VideoCard
             title={i.snippet.title}
             views="2.3 million"
             channel={i.snippet.channelTitle}
             timestamp="3 days ago"
             image={i.snippet.thumbnails.high.url}
             />

  ))}
  
           
            <VideoCard
            title="become a web developer"
            views="2.3 million"
            channel="agatha"
            timestamp="3 days ago"
            image="/lady.jpg"
            />
              <VideoCard
            title="become a web developer"
            views="2.3 million"
            channel="agatha"
            timestamp="3 days ago"
            image="/lady.jpg"
            />
              <VideoCard
            title="become a web developer"
            views="2.3 million"
            channel="agatha"
            timestamp="3 days ago"
            image="/lady.jpg"
            />
                          <VideoCard
            title="become a web developer"
            views="2.3 million"
            channel="agatha"
            timestamp="3 days ago"
            image="/lady.jpg"
            />
              <VideoCard
            title="become a web developer"
            views="2.3 million"
            channel="agatha"
            timestamp="3 days ago"
            image="/lady.jpg"
            />
              <VideoCard
            title="become a web developer"
            views="2.3 million"
            channel="agatha"
            timestamp="3 days ago"
            image="/lady.jpg"
            />
           
        </div>
        </div>
    )
}

export default Recomended
