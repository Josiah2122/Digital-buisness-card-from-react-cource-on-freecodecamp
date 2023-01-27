import React from "react"
import ReactDOM from "react-dom"

import Info from "./components/Info.js"
import About from "./components/About.js"
import Intersts from "./components/Interests.js"
import Footer from "./components/Footer.js"

import  "./index.css"


function Page() {
 return(
  <div className="main-container">
   <Info />
   <About />
   <Intersts />
   <Footer />
  </div>
 )
}



ReactDOM.render(<Page />, document.getElementById('root'))
