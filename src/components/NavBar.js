import {useState} from 'react';
import { IconButton } from '@material-ui/core'
import { Menu } from "@material-ui/icons"
import SideDrawer from "./common/SideDrawer";
import { CustomHeader,CustomButton,CustomToolBar,useHeaderStyles } from '../styles/overRides';
import PlaceHolder from '../images/logo.jpg'
import { withRouter } from "react-router";

const NavBar = (props) => {
  console.log("Navbar Loaded");
    const classes = useHeaderStyles();
    const [state, setState] = useState({
        right: false,
      })

      const toggleDrawer = (anchor, open) => event => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return
        }
        setState({ ...state, right: open })
      }
    const handleRoute = (route) => {
      props.history.push(route);
    }
    return (
    <div className={classes.root}>
      <CustomHeader elevation={0} position="static">
        <CustomToolBar>
          <div className={classes.logo}>
            <img className={classes.img} alt="Company Logo" src={PlaceHolder} />
          </div>
          <div className={classes.menu}>
              <CustomButton  
                onClick={()=> handleRoute('/')}
              
              size="large">
                  Home
              </CustomButton>
              <CustomButton 
                onClick={()=> handleRoute('/about')}
              
              size="large">
                  Over ons 
              </CustomButton>
              <CustomButton 
                onClick={()=> handleRoute('/management')}
              
              size="large">
                  Bestuur
              </CustomButton>
              <CustomButton 
                onClick={()=> handleRoute('/lessons')}
              
              size="large">
                  Lessen
              </CustomButton>
              <CustomButton 
                onClick={()=> handleRoute('/members')}
              size="large">
                  Lidmaatschap
              </CustomButton>
              <CustomButton 
                onClick={()=> handleRoute('/agenda')}
              size="large">
                  Agenda
              </CustomButton>
              <CustomButton 
                onClick={()=> handleRoute('/rules')}
              size="large">
                  Reglement
              </CustomButton>
              <CustomButton 
                onClick={()=> handleRoute('/sponsors')}
              size="large">
                  Sponsoren
              </CustomButton>
              <CustomButton 
                onClick={()=> handleRoute('/contact')}
              size="large">
                  Contact
              </CustomButton>
          </div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
            onClick={toggleDrawer("right", true)}
          >
            <Menu />
          </IconButton>
        </CustomToolBar>
        <SideDrawer state={state} toggleDrawer={toggleDrawer} />
      </CustomHeader>
    </div>
    )
}

export default  withRouter(NavBar);