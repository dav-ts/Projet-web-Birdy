
import React from "react";
import NavBar from "./NavBar";
import NewPost from "./NewPost";
import Post from "./Post";
import '../styles/Home.css'
import ListFollow from "./ListFollow";

function Home(){

    return(
        <section className="feeds-page">
            <NavBar/>
            <div className="feeds-content">
                <NewPost page="Home" />
                <div className="posts">
                    <Post/> 
                    <Post/> 
                    <Post/> 
                    <Post/> 
                </div>
               <ListFollow nom="Qui suivre" css="Home"/>
            </div> 
        </section>
    );
}

export default Home ;

/*
<ListPosts/> => on remplace avec ça les post 

*/
