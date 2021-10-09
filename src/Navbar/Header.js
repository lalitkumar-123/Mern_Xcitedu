import React, { useState, useEffect } from "react"
import {AppBar,Toolbar,Typography,makeStyles,IconButton,Drawer,Link,MenuItem,ListItemIcon,Button} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import HomeIcon from '@material-ui/icons/Home'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { Link as RouterLink } from "react-router-dom"
import axios from "axios"
import {useHistory} from 'react-router'

import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"

import '../Css/header.css'
const headersData = [
  {
    label: "Home",
    href: "/",
    icon: (<AccountCircleIcon fontSize="large"/>),
  },
  {
    label: "Open Source Community",
    href: "/OpenSource",
    icon: (<HomeIcon fontSize="large"/>),
  },
  {
    label: "Service",
    href: "/Service",
    icon: (<HomeIcon fontSize="large"/>),
  },
  {
    label: "About Us",
    href: "/Aboutus",
    icon: (<HomeIcon fontSize="large"/>),
  },
  // {
  //   label: "Careers",
  //   href: "/Careers",
  //   icon: (<HomeIcon fontSize="large"/>),
  // },
  // {
  //   label: "Affiliate Marketing",
  //   href: "/Marketing",
  //   icon: (<HomeIcon fontSize="large"/>),
  // },
  // {
  //   label: "Internship",
  //   href: "/Internship",
  //   icon: (<HomeIcon fontSize="large"/>),
  // },
  // {
  //   label: "Research Prospects",
  //   href: "/Research",
  //   icon: (<HomeIcon fontSize="large"/>),
  // },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#0c7d81", 
               // "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    position: "fixed",
    overflow: "hidden",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
    
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 500,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    size: "18px",
    marginLeft: "38px",
    marginTop: "20px",
    display: "inline-flex",
    '&:hover': {
      textDecoration: "none",
      color: "inherit",
    }
  },
  toolbar: {
    display: "flex",
    marginLeft: "-60px",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 10px",
    marginTop: "4vh",
  },
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
  const history = useHistory();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  useEffect(() => {
      displayDesktop();
  },[localStorage.getItem('username') != null]);

  useEffect(() => {
      displayDesktop();
  },[localStorage.getItem('username') == null]);

////////////////////////////////////////////////////////////////////////////
function logout(e) {
  e.preventDefault();
  axios.post("http://localhost:5000/logout")
    .then(res => {
      console.log(res);
      localStorage.removeItem("username");
      history.push("/");
    })
}
//////////////////////////////////////////////////////////////////////////// 

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {xciteduLogo}
        <div style={{marginTop: "-20px"}}>{getMenuButtons()}</div>
        {localStorage.getItem('username') != null ? 
          <AccountCircleIcon fontSize="large" onClick={(e)=>logout(e)}/>
         :
        <a href="/Login" style={{color: "white", fontFamily: "Open Sans, sans-serif",
        fontWeight: 400, size: "18px"}}>Login</a>}
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{xciteduLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href, icon }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none"},
            key: label,
          }}
        >
          <MenuItem>
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            {label}
          </MenuItem>
        </Link>
      );
    });
  };

  const xciteduLogo = (
    <Typography variant="h6" component="h1" className={logo} style={{marginTop:"10px"}}>
      XCITEDUCATION
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href, icon}) => {
      return (
        
        <Link
          {...{
            key: label,
            color: "inherit",
            to: href,
            style: { textDecoration: "none" },
            component: RouterLink,
            className: menuButton,
          }}
        >
         {/* {label == 'Login' ? localStorage.getItem('username') != null ? <ListItemIcon> {icon} </ListItemIcon> : label : label} */}
         {label}
        </Link>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}