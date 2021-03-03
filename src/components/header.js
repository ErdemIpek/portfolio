import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wrapper" >
            <div className="main-info">
                <div><br></br><br></br></div>
                <body style={{textAlign:"center",backgroundColor:"#161616"}}>
                <Typed 
                style={{
                    color:"white",
                    fontFamily:"DotGothic16",
                    fontSize:40
                    }}
                className="typed-text"
                strings ={["HELLO!","SELAM!", "HALLO!","BONJOUR!","HOLA!"]}
                typeSpeed={50}
                backSpeed={40}
                loop/>
                </body>
            </div>
        </div>
        
    )
}

export default Header;