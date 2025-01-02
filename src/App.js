import './App.css';
import Home from './Component/Pages/home';
import AdminLogin from './Component/Admin/adminlogin';
import AdminDashboard from "./Component/Admin/admindashboard";
import ContactUs from './Component/Pages/contactus';
import ProductView from './Component/Pages/productview';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import PageNotFound from './Component/Pages/404';
import ConsoleList from './Component/Pages/consolelist'
import Login from './Component/Pages/login';
import CategoryView from './Component/Pages/categoryview';
import SignUp from './Component/Pages/signup';
import Forgot from "./Component/Pages/forgotpasswort";
import ShowCart from './Component/Pages/showcart';
import MakePayment from './Component/Pages/makepayment';
import SignIn from './Component/Pages/signin';
import Registration from './Component/Pages/registration';
import PaymentGateway from './Component/Pages/paymentgateway'
import UserProfile from './Component/Pages/USERPROFILE/userprofile'
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
      <Route   path="/productview" exact component={ProductView } />
      <Route   path="/categoryview" exact component={CategoryView } history={props.history} />
      <Route   path="/signup" exact  component={SignUp} history={props.history}/>
      <Route   path="/forgotpasswort" exact  component={Forgot} history={props.history}/>
      <Route   path="/showcart" exact  component={ShowCart} history={props.history}/>
      <Route   path="/makepayment" exact  component={MakePayment} history={props.history}/>
      <Route   path="/signin" exact  component={SignIn} history={props.history}/>
      <Route   path="/registration" exact  component={Registration} history={props.history}/>
      <Route   path="/paymentgateway" exact  component={PaymentGateway} history={props.history}/>
      <Route   path="/userprofile" exact  component={UserProfile} history={props.history}/>


      <Route component={PageNotFound } />
      </Switch>  
    </Router>
        
    </div>

  );
}

export default App;
