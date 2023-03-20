import React from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import "../styles/Feed.css";
import {Posts} from "../Data/Posts.js";
function Feed({page}){
    return (
        <div className="feeds-content">
            <NewPost page={page} />
            <div className="posts">
                {Posts.map((p)=>(
                    <Post key={p.id} post={p} />
                ))}  
            </div>
        </div> 
    )
}

export default Feed;