import React, {Fragment,useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import ScrollAnimation from 'react-animate-on-scroll';
import "../Css/Service.css";
import Header from '../Navbar/Header'
import Footer from './Footer'
 
import Aos from 'aos';

import 'aos/dist/aos.css';
import HourglassEmptyOutlinedIcon from '@material-ui/icons/HourglassEmptyOutlined';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import HealingIcon from '@material-ui/icons/Healing';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import BusinessIcon from '@material-ui/icons/Business';
import WorkIcon from '@material-ui/icons/Work';
import YoutubeEmbed from "./YoutubeEmbed";
import { useForm } from 'react-hook-form';

 function Service() {


const [user,updateuser]=useState({
  fname:'',
  lname:'',
  email:'',
  phone:0,
  jposition:''
});

const [uploadFile, setUploadFile] = useState();
const changeHandler = (e) =>
{
  updateuser({...user,[e.target.name]:e.target.value})
}

const handleSubmit =(e) =>{

  e.preventDefault()
  console.log(user);

  const dataArray = new FormData();
    dataArray.append("fname", user.fname);
    dataArray.append("lname", user.lname);
    dataArray.append("email", user.email);
    dataArray.append("phone", user.phone);
    dataArray.append("jposition", user.jposition);
    dataArray.append("cv", uploadFile);
    console.warn(uploadFile);
    axios
      .post("http://localhost:5000/api/v1/submit/application", dataArray, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then((response) => {
        console.warn(response);
      })
      .catch((error) => {
        console.log(error);
      });
  
  
  
  
}

const changeHandlerfile = (e) =>
{
 
 setUploadFile(e.target.files[0])
}
useEffect(()=>{

  Aos.init({duration:2000});
},[])

    return (
        <div>  
          <Header/>
        
          <section id="secHome" >

<div class="stop-container">

    
    <div class="typing-demo">
      <h2>Career with Xcitedu</h2></div>
      

    </div>

    </section>
  <div data-aos="fade-up">
    <section id="Benefits">

<div class="sthird-container ">
<div data-aos="fade-up">
<h2>
         Benefits and Perks
        </h2>
  <p className="bep">

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
<div className="BenPer">
<div className="row wo">
<div className="col-sm-12 col-md-6 col-lg-6">
<div class="address">
                <div className="sicon"><HourglassEmptyOutlinedIcon/></div>
                <h4>Stability & Planning</h4>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
 
</div>
<div className="col-sm-12 col-md-6 col-lg-6">

<div class="address">
                <div className="sicon"><EmojiEventsIcon/></div>
                <h4>Professional Growth</h4>
                <p>Lorem ipsum dolor sit amet</p>
              </div>


</div>

</div>

<div className="row wo">
<div className="col-sm-12 col-md-6 col-lg-6">
<div class="address">
                <div className="sicon"><HealingIcon/></div>
                <h4>Health & Family</h4>
                <p>Lorem ipsum dolor sit amet</p>
              </div>


</div>
<div className="col-sm-12 col-md-6 col-lg-6">
<div class="address">
                <div className="sicon"><QuestionAnswerIcon/></div>   
                <h4>Community & Caring</h4>
                <p>Lorem ipsum dolor sit amet</p>
              </div>


</div>

</div>

</div>
</div>
</div>


</section>
</div>
<div data-aos="fade-up">
<section id="WorkS">
<div class="sthird-container st">
<div data-aos="fade-up">
<div className="row wo">
<div className="col-sm-12 col-md-6 col-lg-6 wscu">
<div class="wsa">
                
                <h1>You'll Love Our Work Style</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 </p>
                  <Button variant="outlined">Watch The Video</Button>
              </div>
 
</div>
<div className="col-sm-12 col-md-6 col-lg-6 wscd">

<div class="wsa">
                <YoutubeEmbed embedId="rokGy0huYEA" />
              </div>


</div>

</div>
    


  
</div>
</div>
</section>
</div>

<div data-aos="fade-up">
<section id="Msp">
<div class="sthird-container">
<div data-aos="fade-up">
<h2 style={{paddingBottom:"28px"}}>
         More Sweet Perks
        </h2>

<div className="row wo">
<div className="col-md-4 col-lg-4 wscd">

                <div class="address">
                <div className="sicon"><FastfoodIcon/></div>
                <h4>Free Lunch</h4>
               
              </div>
                
              
 
</div>
<div className="col-md-4 col-lg-4 wscd">

<div class="address">
                <div className="sicon"><BusinessIcon/></div>
                <h4>Urban Office</h4>
                
              </div>


</div>

<div className="col-md-4 col-lg-4 wscd">

<div class="address">
                <div className="sicon"><WorkIcon/></div>
                <h4>Remote Work</h4>
                
              </div>

</div>

</div>
    


  
</div>
</div>
</section>
</div>


<div data-aos="fade-up">
<section id="tms">
<div class="sthird-container st">
<div data-aos="fade-up">
<h2 style={{paddingBottom:"40px"}}>
         What our Team members saying
        </h2>
  
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
     <div class="container">
              <div class="row wo">
                <div class="col-sm-12 col-lg-4">

                  <div class="card">

                    <img src="https://media.istockphoto.com/photos/portrait-of-smiling-professor-in-the-amphitheater-picture-id1128666909?k=6&m=1128666909&s=612x612&w=0&h=gwBz0Hi_DIhpcwrX64agp-iYbGGehPpRfuw6KnsRU8s=" class="card-img-top"/>
                    <div class="card-body">
                      <h4 class="card-title">Why you should use skin masks ?</h4>
                      <p class="card-text">Skin masks help us to make are skin fresh and also they protect our skin  harm rays of sun</p>
                      
                      </div>
                    
                     
                  </div>
                  
                </div>
                <div class="col-sm-12 col-lg-4">
                  <div class="card">

                    <img src="https://media.istockphoto.com/photos/portrait-of-smiling-professor-in-the-amphitheater-picture-id1128666909?k=6&m=1128666909&s=612x612&w=0&h=gwBz0Hi_DIhpcwrX64agp-iYbGGehPpRfuw6KnsRU8s=" class="card-img-top"/>
                    <div class="card-body">
                      <h4 class="card-title">Why you should use skin masks ?</h4>
                      <p class="card-text">Skin masks help us to make are skin fresh and also they protect our skin  harm rays of sun</p>
                      
                      </div>
                    
                  </div>
                  
                </div>

                <div class="col-sm-12 col-lg-4">
                  <div class="card">
                    <img src="https://media.istockphoto.com/photos/portrait-of-smiling-professor-in-the-amphitheater-picture-id1128666909?k=6&m=1128666909&s=612x612&w=0&h=gwBz0Hi_DIhpcwrX64agp-iYbGGehPpRfuw6KnsRU8s=" class="card-img-top"/>
                    <div class="card-body">
                      <h4 class="card-title">Why you should use skin masks ?</h4>
                      <p class="card-text">Skin masks help us to make are skin fresh and also they protect our skin  harm rays of sun</p>
                      
                      </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
             </div>
    </div>
    <div class="carousel-item">
       <div class="container">
              <div class="row wo">
                <div class="col-sm-12 col-lg-4">
                  <div class="card">
                    <img src="https://media.istockphoto.com/photos/portrait-of-smiling-professor-in-the-amphitheater-picture-id1128666909?k=6&m=1128666909&s=612x612&w=0&h=gwBz0Hi_DIhpcwrX64agp-iYbGGehPpRfuw6KnsRU8s=" class="card-img-top"/>
                    <div class="card-body">
                      <h4 class="card-title">Why you should use skin masks ?</h4>
                      <p class="card-text">Skin masks help us to make are skin fresh and also they protect our skin  harm rays of sun</p>
                      
                      
                    </div>
                    
                  </div>
                  
                </div>
                <div class="col-sm-12 col-lg-4">
                  <div class="card">
                    <img src="https://media.istockphoto.com/photos/portrait-of-smiling-professor-in-the-amphitheater-picture-id1128666909?k=6&m=1128666909&s=612x612&w=0&h=gwBz0Hi_DIhpcwrX64agp-iYbGGehPpRfuw6KnsRU8s=" class="card-img-top"/>
                    <div class="card-body">
                      <h4 class="card-title">Why you should use skin masks ?</h4>
                      <p class="card-text">Skin masks help us to make are skin fresh and also they protect our skin  harm rays of sun</p>
                      
                      
                    </div>
                    
                  </div>
                  
                </div>
                <div class="col-sm-12 col-lg-4">
                  <div class="card">
                    <img src="https://media.istockphoto.com/photos/portrait-of-smiling-professor-in-the-amphitheater-picture-id1128666909?k=6&m=1128666909&s=612x612&w=0&h=gwBz0Hi_DIhpcwrX64agp-iYbGGehPpRfuw6KnsRU8s=" class="card-img-top"/>
                    <div class="card-body">
                      <h4 class="card-title">Why you should use skin masks ?</h4>
                      <p class="card-text">Skin masks help us to make are skin fresh and also they protect our skin  harm rays of sun</p>
                      
                      
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
             </div>
    </div>
    <div class="carousel-item">
       <div class="container">
              <div class="row wo">
                <div class="col-sm-12 col-lg-4">
                  <div class="card">
                    <img src="https://media.istockphoto.com/photos/portrait-of-smiling-professor-in-the-amphitheater-picture-id1128666909?k=6&m=1128666909&s=612x612&w=0&h=gwBz0Hi_DIhpcwrX64agp-iYbGGehPpRfuw6KnsRU8s=" class="card-img-top"/>
                    <div class="card-body">
                      <h4 class="card-title">Why you should use skin masks ?</h4>
                      <p class="card-text">Skin masks help us to make are skin fresh and also they protect our skin  harm rays of sun</p>
                      
                    </div>
                    
                  </div>
                  
                </div>
                <div class="col-sm-12 col-lg-4">
                  <div class="card">
                    <img src="https://media.istockphoto.com/photos/portrait-of-smiling-professor-in-the-amphitheater-picture-id1128666909?k=6&m=1128666909&s=612x612&w=0&h=gwBz0Hi_DIhpcwrX64agp-iYbGGehPpRfuw6KnsRU8s=" class="card-img-top"/>
                    <div class="card-body">
                      <h4 class="card-title">Why you should use skin masks ?</h4>
                      <p class="card-text">Skin masks help us to make are skin fresh and also they protect our skin  harm rays of sun</p>
                      
                    </div>
                    
                  </div>
                  
                </div>
                <div class="col-sm-12 col-lg-4">
                  <div class="card">
                    <img src="https://media.istockphoto.com/photos/portrait-of-smiling-professor-in-the-amphitheater-picture-id1128666909?k=6&m=1128666909&s=612x612&w=0&h=gwBz0Hi_DIhpcwrX64agp-iYbGGehPpRfuw6KnsRU8s=" class="card-img-top"/>
                    <div class="card-body">
                      <h4 class="card-title">Why you should use skin masks ?</h4>
                      <p class="card-text">Skin masks help us to make are skin fresh and also they protect our skin  harm rays of sun</p>
                      
                      
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
             </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" ></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



  
</div>
</div>
</section>
</div>


<div data-aos="fade-up">
<section id="WorkS">
<div class="sthird-container">
<div data-aos="fade-up">

<h2 style={{paddingBottom:"40px"}}>
         Apply Now
        </h2>
<div class="container apply">
  
    
        <form class="form-service" onSubmit={handleSubmit}>
        
          <div class="row wsr">
            <div class="col-lg-12">
              <label for="firstName" class="form-label">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" onChange={changeHandler} value={user.fname} name="fname"/>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
              </div>
            </div>
<div class="row wsr">
            <div class="col-lg-12">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" onChange={changeHandler} value={user.lname} name="lname"/>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
           </div>
            
              <div class="row wsr">
            
            <div class="col-12">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" onChange={changeHandler} value={user.email} name="email"/>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div></div>
</div>
<div class="row wsr">
            <div class="col-lg-12">
              <label for="number" class="form-label">PhoneNumber</label>
              <input type="text" class="form-control" id="number" placeholder="" onChange={changeHandler} value={user.phone} name="phone" />
              <div class="invalid-feedback">
                Valid number is required.
              </div>
            </div></div>

<div class="row wsr">
            <div class="col-lg-12">
              <label for="jobs" class="form-label">Job Position</label>
              <select class="form-select form-control" id="jobs" required onChange={changeHandler} value={user.jposition} name="jposition">
                <option value="">Select...</option>
                <option>Job 1</option>
                <option>Job 2</option>
                <option>Job 3</option>
                <option>Job 4</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid position.
              </div>
            </div>
</div>
<div class="row wsr">
            <div class="col-12">

  
<div class="form-group">
     <label for="exampleFormControlFile1"><strong>Attach cv</strong></label>
    <input type="file"  class="form-control-file" id="exampleFormControlFile1"style={{paddingLeft:"16px"}} onChange={changeHandlerfile} />
   
  </div>
  </div></div>
          
<div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address"/>
            <label class="form-check-label" for="same-address">I have read and agree with <a className="as">Terms & Condition</a></label>
          </div>
          
          
            

            <div className="appb">
            <button class="w-25 btn apbu " type="submit" value="Upload" >Send</button>
         </div>
         
        </form>

      </div>
    </div>
  

  
</div>

</section>
</div>
      <Footer/>
    </div>
    );
}

export default Service;
