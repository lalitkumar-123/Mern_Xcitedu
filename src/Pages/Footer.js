import React from 'react';
import '../Css/Footer.css'
import {FaGithub, FaTwitter, FaYoutube, FaLinkedin, FaInstagram} from 'react-icons/fa';
import {FiChevronRight} from 'react-icons/fi';

function FooterLanding(props){
   return ( 
      <div class="outer-footer">
         <div class={`footer ${props.bgColor}`}>
            <div class="grid-container">
               <div class="wanna-talk-to-us"><h1>Contact us?</h1></div>
                  <div class="write-to-us">
                        <div id="contact-us">
                        <input type="email" id="email" name="email" placeholder="Email"></input>
                        <textarea type="text" id="message" name="messsage" placeholder="Start typing!"></textarea>
                        <div className="send-btn-container"><input type="submit" value="Send" className="send"></input></div>
                        </div>
                  </div>
                  <div class="links">
                        <ul class="footer-links flex-container">
                           <li><a href="#" target="_blank" rel="noopener noreferrer"><i><FaLinkedin/></i></a></li>
                           <li><a href="#" target="_blank" rel="noopener noreferrer"><i><FaYoutube/></i></a></li>
                           <li><a href="#"  target="_blank" rel="noopener noreferrer"><i><FaGithub/></i></a></li>
                           <li><a href="#" target="_blank" rel="noopener noreferrer"><i><FaTwitter/></i></a></li>
                           <li><a href="#" target="_blank" rel="noopener noreferrer"><i><FaInstagram/></i></a></li>
                        </ul>
                  </div>
                  <div class="footer-info">
                     <div class="desc">
                        <p class = "contact strong">Boared with expensive offline learning! <br/> Get guided by
                        our one-to-one learning platform.</p>
                        <div class="group-links">
                        <div class="footer-links-1">
                        <p class = "contact strong">About Us</p> 
                        <ul class="list">
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="about.html">About us</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="about.html">About us</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="#">Services</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="career.html">Career</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="#">Privacy policy</a></li>
                        </ul>
                        </div>
                        <div class="footer-links-2 mx-5">
                        <p class = "contact strong">Announcements</p>
                        <ul class="list">
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="about.html">About us</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="about.html">About us</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="#">Services</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="career.html">Career</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="#">Privacy policy</a></li>
                        </ul>
                        </div>
                        <div class="footer-links-3 mx-3">
                        <p class = "contact strong">Services</p>
                        <ul class="list">
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="about.html">About us</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="about.html">About us</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="#">Services</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="career.html">Career</a></li>
                           <li><i class = "icon"><FiChevronRight/></i><a class="anchor" href="#">Privacy policy</a></li>
                        </ul>
                        </div>
                        </div>
                        {/* <div class="description1">
                           <p class = "contact strong"></p>
                           <br></br>
                           <p>Dwarka</p>
                           <p>New Delhi</p>
                           <p>110078</p>
                           <p>Email: contact@xcitedu.com</p>
                           <p>Phone: +91 8527985605</p>
                           <br></br>
                           </div> */}
                        <div>
                     </div>
                  </div>
               </div>
            </div>   
         </div>
      </div>

   )
}

export default FooterLanding