
import React from "react";
import NavBar from "./NavBar";
import NewPost from "./NewPost";
import Post from "./Post";
import Follow from "./Follow";
import '../styles/Home.css'
function Home(){

    return(
        <section className="feeds-page">
            <NavBar/>
            <div className="feeds-content">
                <NewPost />
                <div className="posts">
                    <Post/> 
                    <Post/> 
                    <Post/> 
                    <Post/> 
                </div>
                <div className="follow">
                    <h3 className="follow-heading"> Qui suivre </h3>
                    <Follow/>
                    <Follow/>
                    <Follow/>
                    <Follow/>
                </div>
            </div> 
        </section>
    );
}

export default Home ;

/*
<ListPosts/> => on remplace avec ça les post 

*/
