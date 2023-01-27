import React from "react"
import Email from "../images/icons8-mail-50.png"
import Linked from "../images/icons8-linkedin-50.png"

export default function Info(){
 return(
  <div className="info-container">
   <div className="profile-image" ></div>
   <h1>Josiah F.</h1> 
   <p>Frontend Developer</p>
   <small>Josiah.website</small>
   <div className="button-containers">
    <button className="email-btn"><img src={Email}/> <p>Email</p></button>
    <button className="linked-btn"><img src={Linked}/> <p>LinkedIn</p></button>
   </div>
  </div>
 )
}
