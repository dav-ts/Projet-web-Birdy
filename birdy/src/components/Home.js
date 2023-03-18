
import React from "react";
import NavBar from "./NavBar";
import NewPost from "./NewPost";
import Feed from "./Feed";
import '../styles/Home.css'
import ListFollow from "./ListFollow";

function Home(){

    return(
        <section className="feeds-page">
            <NavBar/>
            <Feed page="Home"/>
            <ListFollow nom="Qui suivre" css="Home"/>
            
        </section>
    );
}

export default Home ;

/*
<ListPosts/> => on remplace avec ça les post 

*/
