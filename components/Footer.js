import React from "react"
import Twitter from "../images/icons8-twitter-64.png"
import Facebook from "../images/icons8-facebook-50.png"
import Instagram from "../images/icons8-instagram-50.png"
import Github from "../images/icons8-github-60.png"

export default function Footer(){
 return(
  <div className="footer-container">
   <div className="image-container"> 
    <img src={Twitter}/>
    <img src={Facebook}/>
    <img src={Instagram}/>
    <img src={Github}/>
   </div>
  </div>
 )
}