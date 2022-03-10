import{Avatar} from '@material-ui/core'
import React from 'react';
import './Sidebar.css';
function Sidebar(){

    const recentItem= (topic) => (
        <div className="sidebar_recentItem">
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>


            </div>

    )
    return(
        <div className='sidebar'>
           <div className="sidebar_top">
               <img src="https://image.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg"/>
           <Avatar className='sidebar_avatar'/>
           <h2>Yash Saxena</h2>
           <h4>yashsaxenaald.2gmail.com</h4>
           </div>
            
            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p> Who viewed you</p>
                    <p className='sidebar_statnumber'>3212 </p>
                </div>
                <div className='sidebar_stat'>
                    <p> Views on your post</p>
                    <p className='sidebar_statnumber'>50M</p>
                </div>
            </div>
            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("software")}
                {recentItem("design")}
                {recentItem("developer")}
            

            </div>
        </div>
    )
}
 export default Sidebar;
