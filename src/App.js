import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Lessons from './components/Lessons';
import Management from './components/Management';
import Members from './components/Members';
import Agenda from './components/Agenda';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
const App = () => {
  return (
    <div >
        <Router>
           <NavBar/>
            <Switch>
               <Route  exact path='/' component={Home}/>
               <Route  path='/lessons' component={Lessons}/>
               <Route  path='/management' component={Management}/>
               <Route  path='/members' component={Members}/>
               <Route  path='/agenda' component={Agenda}/>
               <Route  path='/sponsors' component={Sponsors}/>
               <Route  path='/contact' component={Contact}/>
               <Route path="*">
                 <Redirect to="/"/>
               </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
