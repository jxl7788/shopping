import React, { Component } from 'react';
import {Route,Switch,Redirect} from "react-router-dom";
import Footer from "./Footer"
import Home from "./Home"
import Shop from "./Shop"
import Details from "./Details"
import Car from "./Car"
import Login from "./Login"
import Error from "./Error"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
           <Route path="/home" component={Home}/>
           <Route path="/shop" component={Shop}/>
           <Route path="/details" component={Details}/>
           <Route path="/car" component={Car}/>
           <Route path="/login" component={Login}/>
           <Redirect from="/" to="/home"/>
           <Route component={Error}/>
        </Switch> 
        <Footer/>
      </React.Fragment>                          
    )
  }
}
export default App;
