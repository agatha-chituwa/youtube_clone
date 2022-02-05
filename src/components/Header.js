import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'
import VideoCallIcon from '@mui/icons-material/VideoCall'
import AppsIcon from '@mui/icons-material/Apps'
import NotificationsIcon from'@mui/icons-material/Notifications'
import {useEffect, useState} from 'react';


function Header() {
    // const api_key = "AIzaSyBVbftK43cCIKuQsCXxirBo7t-V0xwlCls";

    // const [search, setSearch] = useState("");

    //     const onSubmitForm = async(e) => {
    //         e.preventDefault();
    //         try {
    //             const body = {search}
    //             const response = await fetch ("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBVbftK43cCIKuQsCXxirBo7t-V0xwlCls&type=video&q=ajax", {
    //                 method:"GET",
    //                 headers:{ "content-type":"application/json"},
    //                 body: JSON.stringify(body)


    //             });
    //             console.log(response);
    //         } catch (err) {
    //             console.error(err.message);
    //         }

    //     }
 
//   fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBVbftK43cCIKuQsCXxirBo7t-V0xwlCls&type=video&q=ajax')
//   .then(response => response.json())
//   .then(data => console.log(data));
    // const onSubmitForm = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const body = { description }
    //         const response = await fetch("https://agathatodoapp.herokuapp.com/todos", {
    //             method: "POST",
    //             headers: {"content-type": "application/json"},
    //             body: JSON.stringify(body)
                
    //         });
    //         console.log(response);
    //        window.location = "/";

           
            
    //     } catch (err) {
    //         console.log(err.message);
            

    //     }
    // };




    return (

        <div className="header">

            <div className="left">
            <MenuIcon/>
            {/* <div className="icon"> */}
            <img  className="header_logo" src="/youtube.png" alt="" />
             {/* <strong>youtube</strong> */}
             {/* </div> */}
            </div>
           
           {/* i want to be able to search from here */}

          
           <div className="header_input">
               
               <input type="text"  placeholder="search"  /> 
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
