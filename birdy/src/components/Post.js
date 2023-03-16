import React from "react";
import salade from "./Images/salade3.jpg";
import bird from "./Images/bird.png";
import {AiOutlineHeart} from "react-icons/ai";
import {FaCheckCircle,FaRegComment} from "react-icons/fa";

function Post(){
    return(
        <div className="post">
            <div className="user-avatar">
                <img src={bird}/>
            </div>
            <div className="post-content">
                <div className="post-user-info">
                    <h4> Racha Dac</h4>
                    <i><FaCheckCircle/></i>
                    <span> @hahaha . 15m</span>
                </div>
                <p className="post-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Doloribus officia accusantium accusamus minus sunt quam in 
                    impedit molestias sint ipsam beatae maiores cum qui temporibus,
                    deleniti ea perferendis eius? Amet.
                </p>
                <div className="post-img">
                    <img src={salade} alt="post"/>
                </div>
                <div className="post-icons">
                    <i><FaRegComment/></i>
                    <i><AiOutlineHeart/></i>

                </div>
            </div>
    </div>
    );
}

export default Post;