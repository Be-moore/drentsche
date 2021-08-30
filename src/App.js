import { ThemeProvider } from '@material-ui/core/styles';
import {lazy,Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {useWrapperStyles} from './styles/overRides'
import theme from './styles/theme'

const NavBar = lazy(()=> import('./components/NavBar'));
const Home = lazy(()=> import('./components/Home'));
const About = lazy(()=> import('./components/About'));
const Lessons = lazy(()=> import('./components/Lessons'));
const Management = lazy(()=> import('./components/Management'));
const Members = lazy(()=> import('./components/Members'));
const Agenda = lazy(()=> import('./components/Agenda'));
const Sponsors = lazy(()=> import('./components/Sponsors'));
const Contact = lazy(()=> import('./components/Contact'));
const Rules = lazy(()=> import('./components/Rules'));



const App = () => {
  const classes = useWrapperStyles();
  return (
      <Suspense fallback={<div>... Loading .... </div>} >
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
      </Suspense>
  );
}

export default App;
