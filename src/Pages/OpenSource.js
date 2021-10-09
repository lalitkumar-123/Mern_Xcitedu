import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import '../Css/Opensource.css'
import image0 from '../assets/images/telerobo.gif'
import image1 from '../assets/images/gif2.gif'
import image2 from '../assets/images/gig3.gif'
import image3 from '../assets/images/gif1.gif'
import physics from '../assets/images/physics.jpg'
import chemistry from '../assets/images/chemistry.jpg'
import maths from '../assets/images/maths.jpg'
import pd from '../assets/images/pd.jpg'
import webd from '../assets/images/webd.jpg'
import vocabulary from '../assets/images/vocabulary.jpg'
import cp  from '../assets/images/cp.png'
import {raiseAlert} from '../JS/slider.js'
import { Link,BrowserRouter as Router } from 'react-router-dom';
import Header from '../Navbar/Header'
import Footer from './Footer'



const subjects=[{name:"Physics",bgimg:physics,
topics:[{name:"Mechanics"},{name:"Relativity"},{name:"Magnetism"},{name:"Optics"},{name:"Electronic Devices"}]},
{name:"Maths",bgimg:maths,topics:[{name:"Calculus"},{name:"Algebra"},{name:"Geometry"}]},
{name:"Chemistry",bgimg:chemistry,topics:[{name:"organic"},{name:"inorganic"},{name:"physical"}]},
{name:"Personality Development",bgimg:pd,topics:[{name:"Presentation"},{name:"Communication"}]},{name:"Web Development",bgimg:webd,topics:[{name:"React"},{name:"Node"}]},
{name:"Competitive Programming",bgimg:cp,topics:[{name:"Mathematical Concepts"},{name:"Time Complexity"}]},{name:"Vocabulary",bgimg:vocabulary,topics:[{name:"One Word"},{name:"Idioms"}]}]

// raiseAlert();


const OpenSource=()=>{

  
  const[visibility,setVisibility]=useState("hidden")
  const[close,setClose]=useState(false)
  const [bgcolor,setBgColor]=useState("white")
  const[menuItem,setMenuItem]=useState([])

 

useEffect(() => { 
  menuItem!=[]?setVisibility("visible"):setVisibility("hidden")
  
}, [visibility,menuItem])

useEffect(()=>{  
  close==false?setBgColor("rgb(190, 235, 220)"):setBgColor("white")
},[close])
    return <>
  <Header/>
  <div className="main_div">
    <div className="category_div">
    
    <div class="category_menu">
      {subjects.map(item=>
        <div className="categ" onMouseEnter={()=>{setMenuItem(item.topics);
        setClose(true)
        setBgColor("rgb(190, 235, 220)")} } style={{backgroundColor:{bgcolor}}}  >{item.name}</div>    
      )}
      </div>
    <div className="sub_menu_div" style={{visibility:{visibility},transition:"ease-in 5s"}} >
      <div className="sub_menu" >{menuItem.map((item)=>(<a >{item.name}</a>))} 
      </div>
      {close==true?<div
       onClick={()=>{setMenuItem([]);setClose(false);}}><CancelIcon  style={{zIndex:5,display:"flex",justifyContent:"space-around"}}></CancelIcon></div>:"" }
      </div>
      </div>
    
    <div className="Carousel-container">
      <Carousel fade="true" variant="dark" >
        
    <Carousel.Item><img  src={image1} height="250vh" width="100%"></img>
    <Carousel.Caption>
      <h3>LOREM IPSUM</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </Carousel.Caption></Carousel.Item>
    <Carousel.Item><img src={image2} height="250vh" width="100%"></img>
    <Carousel.Caption>
    <h3>LOREM IPSUM</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item><img src={image3} height="250vh" width="100%"></img>
    <Carousel.Caption>
    <h3>LOREM IPSUM</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></Carousel.Caption></Carousel.Item>
    
    <Carousel.Item><img src={image0} height="250vh" width="100%"></img>
    <Carousel.Caption>
    <h3>LOREM IPSUM</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></Carousel.Caption></Carousel.Item>
    </Carousel>
    </div>
   
   
      <div className="lower-block">
      {/*2<div ><span className="left"></span></div> */}
      <div className="subjects-div">
        
        <Router>
      {subjects.map((item)=>(
      <div className="subject"  >
        <div className="img-div" ><img  className="card-img" src={item.bgimg}></img></div>
       <div className="card-title"><h3>{item.name}</h3>
       <a href="/OSmodules" ><button style={{backgroundColor:"rgb(83,189,175)"}}>View More</button></a></div>
      </div>))}
      </Router>
      </div>
      {/* <div ><span className="right"></span></div> */}
      </div>
      </div> 
      <Footer/>
    </>
}
export default OpenSource
