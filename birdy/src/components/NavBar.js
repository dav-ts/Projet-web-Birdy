import React from "react";
import {FaHome,FaHashtag,FaBell,FaEnvelope,FaSearch,FaChevronDown} from "react-icons/fa";
import bird from"./Images/bird.png"
function NavBar(){
    return (
        <nav className="feeds-nav">
            <div className="icons">
                <a href="#" className="active" ><FaHome/></a>
                <a href="" ><FaHashtag/></a>
                <a href="" ><FaBell/></a>
                <a href="" ><FaEnvelope/></a>
            </div>

            <div className="search-bar">
                <i><FaSearch/></i>
                <input type="test" id="recherche" name="fname" placeholder="Recherche ..."  className="search-bar-input"/>
                <input  id="contact" type="checkbox" value="checked" name="contact"/>
                <input type="submit" id="submit" name="submit"/>

            </div>

            <div className="user">
                <div className="user-img-wrapper">
                    <img src={bird} alt=""/> 
                </div>
                <a href="#" className="user-link">Racha dac</a>
                <FaChevronDown/>
            </div>
        </nav>
    )
}
//SI on veut ecrire a l interieur du return div un boutton ayant comme class=roro il faut ecrire className=roro

export default NavBar;

/*
    import Login from "./Login"
    import Logout from "./Logout"

    <nav>
        { props.isConnect ? <Logout logout = {props.logout} /> :<Login  login = {props.login} /> }

    </nav>
*/