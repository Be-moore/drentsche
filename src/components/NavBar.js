import {useState} from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar,IconButton,Typography,Button,Avatar } from '@material-ui/core'
import { Menu } from "@material-ui/icons"
import SideDrawer from "./common/SideDrawer";
import { CustomHeader,CustomButton,CustomToolBar,useHeaderStyles } from '../styles/overRides';
import PlaceHolder from '../images/placeholder.png'

const NavBar = () => {
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
    
    return (
    <div className={classes.root}>
      <CustomHeader elevation={0} position="static">
        <CustomToolBar>
          <div className={classes.logo}>
            <img className={classes.img} alt="Company Logo" src={PlaceHolder} />
          </div>
          <div className={classes.menu}>
              <CustomButton size="large">
                  <Link className={classes.anchor} to='/home'>Home</Link> 
              </CustomButton>
              <CustomButton size="large">
                  <Link className={classes.anchor} to='/about'>Over ons</Link> 
              </CustomButton>
              <CustomButton size="large">
                  <Link className={classes.anchor} to='/management'>Bestuur</Link> 
              </CustomButton>
              <CustomButton size="large">
                  <Link className={classes.anchor} to='/lessons'>Lessen</Link> 
              </CustomButton>
              <CustomButton size="large">
                  <Link className={classes.anchor} to='/members'>Lidmaatschap</Link> 
              </CustomButton>
              <CustomButton size="large">
                  <Link className={classes.anchor} to='/agenda'>Agenda</Link> 
              </CustomButton>
              <CustomButton size="large">
                  <Link className={classes.anchor} to='/rules'>Reglement</Link> 
              </CustomButton>
              <CustomButton size="large">
                  <Link className={classes.anchor} to='/sponsors'>Sponsoren</Link> 
              </CustomButton>
              <CustomButton size="large">
                  <Link className={classes.anchor} to='/contact'>Contact</Link> 
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

    // <div>
    //     <nav>
    //         <ul>
    //             <li>
    //                 <Link to="/">Home</Link>
    //             </li>
    //             <li>
    //                 <Link to="/lessons">Ablessonsout</Link>
    //             </li>
    //             <li>
    //                 <Link to="/management">management</Link>
    //             </li>
    //             <li>
    //                 <Link to="/members">members</Link>
    //             </li>
    //             <li>
    //                 <Link to="/agenda">agenda</Link>
    //             </li>
    //             <li>
    //                 <Link to="/sponsors">sponsors</Link>
    //             </li>
    //             <li>
    //                 <Link to="/contact">contact</Link>
    //             </li>
    //         </ul>
    //     </nav>
    // </div>
    
    
    )
}

export default NavBar;