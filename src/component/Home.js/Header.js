import React from "react";
import "./Header.css"
// import bgImage from "../../imgs/photo-1478144592103-25e218a04891.jpg";
import bgImage from "../../imgs/3.jpg";


const Header = ()=>{
    return(
        <header    className="header" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="container" >
                <div className="col-md-6">
                <h2>Good food choices are good investments.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                <button>order now</button>
                <button>learn more</button>
                </div>

                <div className="col-md-6">

                </div>
            </div>
        </header>
    )
}
export default Header;