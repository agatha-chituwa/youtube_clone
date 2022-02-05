import React from 'react'
import './Recomended.css'
import VideoCard from './VideoCard'
import {useEffect, useState} from 'react';


// const API_KEY = "AIzaSyBVbftK43cCIKuQsCXxirBo7t-V0xwlCls"
// const channel_id = "UCqrILQNl5Ed9Dz6CGMyvMTQ"
// const results =10;
// var final_url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channel_id}&part=snippet,id&date=date&maxResults=${results}`


function Recomended() {
  const [data, setData] = useState([]);


      async function getvideos(url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBVbftK43cCIKuQsCXxirBo7t-V0xwlCls&type=video&q=clever%20programmer&maxResults=12`){
        try {
       
        const response = await fetch(url, {
          "method": "GET",
        })
        const result = await response.json();
        setData(result.items);
        console.log(result.items[0].id.videoId);

    
        } catch (error) {
            console.log(error);
            
        }
    
    };
    
    
    useEffect(() => {
    getvideos();
    
    }, []);




    return (
        <div className="recomended_videos"> 
        

        <h2>Recommended</h2>
        <div className="recomended">
         


        
    {data.map(i => (
             <VideoCard
             title={i.snippet.title}
             
             channel={i.snippet.channelTitle}
            
             image= {"https://www.youtube.com/embed/"+i.id.videoId}
             />

  ))}
  {/* <iframe width="560" height="315" 
  src="https://www.youtube.com/embed/d1r0aK5awWk"
   title="YouTube video player" frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write;
     encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen></iframe> */}
  
           
            {/* <VideoCard
            title="become a web developer"
            views="2.3 million"
            channel="agatha"
            timestamp="3 days ago"
            image="https://www.youtube.com/embed/d1r0aK5awWk"
            /> */}

         
        </div>
        </div>
    )
}

export default Recomended
