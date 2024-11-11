import React from "react";
import notFoundPhoto from '../assets/photos/404.jpg';

export default function NotFoundPage(){

    return(
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img src={notFoundPhoto} alt="notFound" style={{width:'50%',height:'50%',minHeight:500,minWidth:500}}/>
        </div>
    );
}