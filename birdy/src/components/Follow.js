import React from "react";
import bird from"./Images/bird.png"

function Follow(props){
    return (
        <div className="follow-user">
            <div className="follow-user-img">
                <img src={bird}/>
            </div>
            <div className="follow-user-info">
                <h4>Anna gaga</h4>
                <p>@annasmith</p>
            </div>
            <button type="button" className="follow-btn">Suivre</button>
        </div>
    )
}
//SI on veut ecrire a l interieur du return div un boutton ayant comme className=roro il faut ecrire classNameName=roro

export default Follow;

