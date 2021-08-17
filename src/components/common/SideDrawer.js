import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { withRouter } from "react-router";


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  listText: {
    color: 'black',
    fontWeight: "bold",
  },
})



const SideDrawer = ({ state, toggleDrawer,history }) => {
  
  const classes = useStyles()

  const handleRoute = (route) => {
    history.push(route);
  }
  const links = [
    {path:'/home',text:'Home'},
    {path:'/about',text:'Over ons'},
    {path:'/management',text:'Bestuur'},
    {path:'/lessons',text:'Lessen'},
    {path:'/members',text:'Lidmaatschap'},
    {path:'/agenda',text:'Agenda'},
    {path:'/rules',text:'Reglement'},
    {path:'/sponsors',text:'Sponsoren'},
    {path:'/contact',text:'Contact'},
  ]
  
  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={() => toggleDrawer("right", false)}
      onKeyDown={() => toggleDrawer("right", false)}
    >
      <List>
        {links.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText
                onClickCapture={toggleDrawer('right',false)}
                onClick={()=>handleRoute(item.path)} 
                className={classes.listText}
               >
             {item.text}
           </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <React.Fragment key={"right"}>
        <Drawer
          anchor={"right"}
          open={state.right}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  )
}

export default withRouter(SideDrawer)