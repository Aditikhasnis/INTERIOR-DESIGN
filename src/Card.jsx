import React from "react";
//import web from "../src/Images/home.jpeg";
import { NavLink } from "react-router-dom";

const Card=(props)=>{
    return (
        <>
                    <div className="col-md-4 col-10 mx-auto">
                    <div className="card">
                        <img className="card-img-top" src={props.imgsrc} alt="Card image cap"/>
                        <div className="card-body">
                             <h5 className="card-title font-weight-bold">{props.title}</h5>
                            <p class="card-text">{props.text}</p>
                            <p class="card-text">{props.price}</p>

                            <NavLink to ={props.link} className="btn btn-primary">BOOK NOW</NavLink>                 
                            </div>
                        </div>
                    </div>
        </>
    );
};

export default Card;