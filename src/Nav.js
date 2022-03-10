import React from "react";
import './Nav.css';
import SearchIcon from '@material-ui/icons/Search';
import NavContents from "./NavContents";
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {logout} from "./features/userSlice"
import {useDispatch} from "react-redux";
import {auth} from './firebase';
function Nav() {
    const dispatch=useDispatch()
const logOutOfApp=()=>{
    auth.signOut();
    dispatchEvent(logout())
}
    return (
        <div className="nav_container">
            <div className="nav_left">
                <img src="https://pbs.twimg.com/profile_images/671300722168729600/0-R0-wpq_400x400.png" alt="" />

                <div className="search_box">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>

            </div>
            <div className="nav_right">
                <NavContents Icon={HomeIcon} title="Home" />
                <NavContents Icon={SupervisorAccountIcon} title="My Network" />
                <NavContents Icon={BusinessCenterIcon} title="Jobs" />
                <NavContents Icon={ChatIcon} title="Messege" />
                <NavContents Icon={NotificationsIcon} title="Notification" />
                <NavContents avatar onClick={logOutOfApp} title="Me" />
            </div>
        </div>
    )
}
export default Nav;