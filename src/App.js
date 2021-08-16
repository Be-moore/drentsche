import { ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from "./components/About";
import Lessons from './components/Lessons';
import Management from './components/Management';
import Members from './components/Members';
import Agenda from './components/Agenda';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Rules from "./components/Rules";
import {useWrapperStyles} from './styles/overRides'
import {theme} from './styles/theme'
const App = () => {
  const classes = useWrapperStyles();
  return (
    <ThemeProvider theme={theme} >
    <div className={classes.root}>
        <Router>
           <NavBar/>
            <Switch>
               <Route  exact path='/' component={Home}/>
               <Route  path='/about' component={About}/>
               <Route  path='/lessons' component={Lessons}/>
               <Route  path='/management' component={Management}/>
               <Route  path='/members' component={Members}/>
               <Route  path='/agenda' component={Agenda}/>
               <Route  path='/sponsors' component={Sponsors}/>
               <Route  path='/rules' component={Rules}/>
               <Route  path='/contact' component={Contact}/>
               <Route path="*">
                 <Redirect to="/"/>
               </Route>
            </Switch>
        </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
