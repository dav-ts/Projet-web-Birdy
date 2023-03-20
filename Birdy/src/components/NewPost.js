import React from "react";
import {AiOutlineStar} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";

import bird from"./Images/bird.png";
import {FaImage,FaCamera,FaChartBar} from "react-icons/fa";
import "../styles/NewPost.css";
function NewPost({page}){
    return(
        <div className="feeds-header" >
            <div className="header-top">
                <h4>{page}</h4>
                { page==="Home" && <AiOutlineStar className="icon"/>}
                { page==="Profil" && <CgProfile className="icon"/>}

            </div>

            <div className="header-post">
                <div className="header-img-wrapper">
                    <img src={bird} alt=""/>
                </div>
                <textarea type="text" placeholder="What's happening ?"/>
                <FaCamera className="icon" />
                <FaImage className="icon" />
                <FaChartBar className="icon" />
            </div>
        </div>
    );
}

export default NewPost ;