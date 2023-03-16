import React from "react";
import {AiOutlineStar} from "react-icons/ai";
import bird from"./Images/bird.png";
import {FaImage,FaCamera,FaChartBar} from "react-icons/fa";

function NewPost(){
    return(
        <div className="feeds-header" >
            <div className="header-top">
                <h4>Home</h4>
                <i><AiOutlineStar/></i>
            </div>

            <div className="header-post">
                <div className="header-img-wrapper">
                    <img src={bird} alt=""/>
                </div>
                <input type="text" placeholder="What's happening ?"/>
                <i><FaImage/></i>
                <i><FaCamera/></i>
                <i><FaChartBar/></i>
            </div>
        </div>
    );
}

export default NewPost ;