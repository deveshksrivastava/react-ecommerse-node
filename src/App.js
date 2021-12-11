import './App.css';
import Home from './Component/Pages/home';
import AdminLogin from './Component/Admin/adminlogin';
import AdminDashboard from "./Component/Admin/admindashboard";
import ContactUs from './Component/Pages/contactus';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageNotFound from './Component/Pages/404';
import ConsoleList from './Component/Pages/consolelist'
import Login from './Component/Pages/login';
import CategoryView from './Component/Pages/categoryview';
import SignUp from './Component/Pages/sign_up';
function App(props) {
  return (
    <div>
      
    <Router>
      <Route strict exact component={Home} path="/" history={props.history} />
      <Route strict exact component={Home} path="/home" history={props.history} />
      <Route  strict exact component={AdminLogin}path="/adminlogin" history={props.history}/>
      <Route strict exact component={ConsoleList} path="/consolelist" history={props.history}/> 
      <Route path="/admindashboard" component={AdminDashboard }  history={props.history} /> 
      <Route strict exact path="/login"  component={ Login} history={props.history}/>
      <Route strict exact path="/contact"  component={ContactUs } />
      <Route path="/categoryview" exact component={CategoryView } history={props.history} />
      <Route strict exact path="/sign_up"  component={ SignUp} history={props.history}/>
      <Route component={PageNotFound } />  
    </Router>
        
    </div>

  );
}

export default App;
