import './App.css';
import Home from './Component/Pages/home';
import AdminLogin from './Component/Admin/adminlogin';
import AdminDashboard from "./Component/Admin/admindashboard";
import ContactUs from './Component/Pages/contactus';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import PageNotFound from './Component/Pages/404';
import ConsoleList from './Component/Pages/consolelist'
import Login from './Component/Pages/login';
import CategoryView from './Component/Pages/categoryview';
function App(props) {
  return (
    <div>
      
    <Router>
      <Switch>
      <Route   path="/" exact component={Home} history={props.history} />
      <Route   path="/home" exact component={Home} history={props.history} />
      <Route   path="/adminlogin" exact component={AdminLogin} history={props.history}/>
      <Route   path="/consolelist" exact component={ConsoleList} history={props.history}/> 
      <Route   path="/admindashboard" exact component={AdminDashboard } history={props.history} /> 
      <Route   path="/login" exact  component={Login} history={props.history}/>
      <Route   path="/contact" exact component={ContactUs } />
      <Route   path="/categoryview" exact component={CategoryView } history={props.history} />

      <Route component={PageNotFound } />
      </Switch>  
    </Router>
        
    </div>

  );
}

export default App;
