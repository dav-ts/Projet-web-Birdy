
import React from "react";
import NavBar from "./NavBar";
import NewPost from "./NewPost";
import Feed from "./Feed";
import '../styles/Profil.css'
import salade from "./Images/salade3.jpg"
import Follow from "./Follow";


function Profil(){

    
    return(
        <section className="feeds-page">
            <NavBar/>
            <div className="profile">
                <div className="profileTop">
                    <div className="profileCover">        
                        <img className="profileCoverImg" src={salade} alt=""/>
                        <img className="profileUserImg" src={salade} alt=""/>
                    </div>   
                    <div className="profileInfo">        
                        <h4 className="profileInfoName"> Racha nad</h4>
                        <span className="profileBio">Hello ! :zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz </span>
                    </div>            
                </div>
                <div className="flex" >
                    <Feed page="Profile"/>
                    
                    <div className="sideBar">
                        <div className="rightBarInfo">
                            <h4 className="rightBarTitle">User's Infos :</h4>
                            <div className="rightBarInfoItem">
                                <span className="rightBarInfoKey">City :</span>
                                <span className="rightBarInfoValue">New York</span>
                            </div>                             
                            <div className="rightBarInfoItem">
                                <span className="rightBarInfoKey">From :</span>
                                <span className="rightBarInfoValue">York</span>
                            </div>                      
                            <div className="rightBarInfoItem">
                                <span className="rightBarInfoKey">City :</span>
                                <span className="rightBarInfoValue">New York</span>
                            </div>                             
                            <div className="rightBarInfoItem">
                                <span className="rightBarInfoKey">City :</span>
                                <span className="rightBarInfoValue">New York</span>
                            </div>                             
                            <div className="rightBarInfoItem">
                                <span className="rightBarInfoKey">City :</span>
                                <span className="rightBarInfoValue">New York</span>
                            </div> 
                        </div>
                        <div className="friends">
                            <Follow />
                            <Follow />
                            <Follow />
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
    );
}

export default Profil ;

/*
<ListPosts/> => on remplace avec ça les post 

*/