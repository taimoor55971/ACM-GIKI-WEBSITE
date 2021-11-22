import React from 'react'
import "../Assets/css/team.css"

function Team({ image}) {
    
    return (

        <div className="col">

       
            <img  id="ec-pic" alt="Member" src={image} />
        
            
        </div>
    )
}

export default Team
