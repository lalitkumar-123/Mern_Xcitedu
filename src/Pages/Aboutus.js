import React, {useState,useEffect} from 'react';
import Header from '../Navbar/Header'
import Footer from './Footer'

import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import ScrollAnimation from 'react-animate-on-scroll';
import "../Css/About.css";
import "../Css/Navigation.css";

import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import axios from 'axios';



import CardMedia from '@material-ui/core/CardMedia';

import Aos from 'aos';

import 'aos/dist/aos.css';




 function About() {

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const classes = useStyles();
const bull = <span className={classes.bullet}>•</span>;

const [posts,setPosts]=useState([]);

useEffect(()=>{

  Aos.init({duration:2000});

  axios
  .get('http://localhost:5000/api/v1/teams')
  .then(res => {

    console.log(res)
    setPosts(res.data)
  })

  .catch(err => {

    console.log(err)
  })
},[])

    return (
        <div>  
          <Header/>
        
        <nav class="navbar nav-underline solid black navbar-expand-lg navbar-light fixed-top ">
        <div class="container-fluid">
        
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler9" aria-controls="navbarToggler9" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarToggler9">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#Mission">Mission/Vision</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#HowWeWork">How we Work</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#Achievements">Our Achievements</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#Leadership">Meet Our Leedership</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#Team">Meet our Team</a>
            </li>
        </ul>
    </div>
    </div>
</nav>
          <section id="Home" >

<div class="top-container">

    
     <div className="center">
      <h1>About XcitEducation</h1>
      <div data-aos="zoom-in">
        <p id="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Egestas purus viverra accumsan in nisl nisi.Sit amet risus nullam eget felis eget nunc lobortis mattis. 
      Purus in mollis nunc sed id semper risus in hendrerit.
        </p>
        </div>
        
      </div>

    </div>

    </section>
    


<div data-aos="fade-up">
<section id="Mission">

<div class="second-container">

  <div class="row">
                
                <div class="col-sm-12 col-md-6 col-lg-6">
                  <div class="card ms">

                    
                    <div class="card-body">
                      <h4 ><strong>Mission</strong></h4>
                      <p class="card-text mt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      
                      </div>
                    
                  </div>
                  
                </div>

                <div class="col-sm-12 col-md-6 col-lg-6">
                  <div class="card ms ps">
                    
                    <div class="card-body">
                      <h4 ><strong>Vision</strong></h4>
                      <p class="card-text mt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      
                      </div>
                    
                  </div>
                  
                </div>
                
              </div>
</div>

</section>
</div>
<div data-aos="fade-up">
<section id="HowWeWork">

<div class="third-container st">

<h2>
          Our Work
        </h2>
<br /> <br />
  <p className="ht">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br />
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

</section>
</div>

<div data-aos="fade-up">
<section id="Achievements">
<div class="third-container">
<h2>
          Achievements
        </h2>
<br /> <br />
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img className="ci" src="https://d3ayyz93zozlya.cloudfront.net/uploaded-images/articlemainimage/performance-targets-measure-achievement-related-to-outcomes-588a3323a784f.jpeg" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img className="ci" src="https://d3ayyz93zozlya.cloudfront.net/uploaded-images/articlemainimage/performance-targets-measure-achievement-related-to-outcomes-588a3323a784f.jpeg" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img className="ci" src="https://d3ayyz93zozlya.cloudfront.net/uploaded-images/articlemainimage/performance-targets-measure-achievement-related-to-outcomes-588a3323a784f.jpeg" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</section>
</div>

<div data-aos="fade-up">

<section id="Leadership">
<div class="third-container">
<h2>Leadership</h2>
<br/><br/>
<div class="row">
    <div class="col-lg-6 col-md-6 col-sm-12">
    <div data-aos="zoom-in-up">
      <img class="codi" src="https://designpress-10674.kxcdn.com/wp-content/uploads/2012/07/steve-jobs-1280x720.jpg" alt=""/>
      </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12">
     
      <h2 className="lp">Leader1</h2>
      <p className="lp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
      
       </p>
       
       </div>
    </div>
    <div class="row ls">
    
      <div class="col-lg-6 col-md-6 col-sm-12">
     
      <h2 className="lp sp">Leader2</h2>
      <p className="lp sp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       </p>
       
       </div>

       <div class="col-lg-6 col-md-6 col-sm-12">
    <div data-aos="zoom-in-up">
      <img class="sing" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJEmsoiqycTsmAoUA3AtOr2KHW6GSusoVk-1tKnyqHRkqrPYIkdhIO78wmiFU6Zib-Gxg&usqp=CAU" alt=""/>
      </div>
      </div>

    </div>
  
</div>
</section>
</div>
<div data-aos="fade-up">
<section id="Team">
<div class="third-container st">
<h2>
          Team
        </h2>

<div class="row">
{
 posts.map( post => (
<div class="col-sm-12 col-md-12 col-lg-4">
  
    <div class="tcard" >
  <img  src={post.imgUrl} alt=""/>
  <div class="card-body">
    
    <p class="card-text">{post.name} <br /> {post.designation}</p>
    <label>No more</label><br />
    <a href="#" class="btn btn-dark"><ArrowForwardIcon/></a>
  </div>
</div>

  </div>
  
 ))}
  

  
</div>
</div>
</section>
</div>
      <Footer/>
        </div>
    );
}

export default About;
