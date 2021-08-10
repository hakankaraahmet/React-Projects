import React from 'react';


 function Cards(props) {

    const handleVisibility = (e)=>{
        const text = e.target.parentElement.children[2];
        text.className ="visible"
    }
    const handleInvisibility = (e) =>{
        const text = e.target.parentElement.children[2];
        text.className ="invisible"
    }

   


    return (
        <div>
            <div  className="card m-2">
                <h4 onMouseOver={handleVisibility} onMouseOut={handleInvisibility} >{props.county}</h4>
                <img src={props.img} className="card-img p-3"></img> 
                <p  className="card-text p-3">{props.info}</p>
            </div>
            
        </div>
    )
}

export default Cards