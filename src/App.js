import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Careers from './Pages/Careers'
import Logincard from './Pages/Logincard'
import Signincard from './Pages/Signincard'
import OpenSource from './Pages/OpenSource'
import Marketing from './Pages/Marketing'
import Aboutus from './Pages/Aboutus'
import Login from './Pages/Login'
import Internship from './Pages/Internship'
import Researchprospect from './Pages/Researchprospect'
import OSmodules from './Pages/OSmodules'
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './Pages/Aboutus'
import Service from './Pages/Service'

function App() {
  return ( 
      <> 
     
      <Router>
      
      <Switch>
      
        <Route exact path="/" component={Home}/>
        <Route exact path="/Aboutus" component={About}/>
        <Route exact path="/Service" component={Service}/>
        <Route exact path="/Signincard" component={Signincard}/>
        <Route exact path="/Logincard" component={Logincard}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Careers" component={Careers}/>
        <Route exact path="/Marketing" component={Marketing}/>
        <Route exact path="/Internship" component={Internship}/>
        <Route exact path="/Research" component={Researchprospect}/>
        <Route exact path="/About" component={Aboutus}/>
        <Route exact path="/OpenSource" component={OpenSource}/>
        <Route exact path="/OSmodules" component={OSmodules}/>
        
      </Switch>
      
      </Router>
      </>
  );
}

export default App;
