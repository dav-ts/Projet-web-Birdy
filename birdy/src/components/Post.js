import React from "react";
import bird from "./Images/bird.png";
import {AiOutlineHeart} from "react-icons/ai";
import {FaCheckCircle,FaRegComment} from "react-icons/fa";
import "../styles/Post.css";

function Post({post}){
    return(
        <div className="post">
            <div className="user-avatar">
                <img src={bird}/>
            </div>
            <div className="post-content">
                <div className="post-user-info">
                    <h4> Racha Dac</h4>
                    <FaCheckCircle className="icon"/>
                    <span> @hahaha . {post?.date}</span>
                </div>
                <p className="post-text">
                   {post?.desc}
                </p>
                <div className="post-img">
                    <img src={bird} alt="post"/>
                </div>
                <div className="post-icons">
                    <div className="icon" ><FaRegComment />{post.comment}</div>
                    <div className="icon"><AiOutlineHeart />{post.like}</div>
                </div>
            </div>
    </div>
    );
}

export default Post;