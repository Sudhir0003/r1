import React from "react";
import Login from "./Components/Login";
import About from "./Components/About";
import Illustration from "./Components/Illustration";
import Upload from "./Components/Upload";
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(){
  return(
  <>
  <Router>
  <Switch>
    <Route exact path="/"><Login/></Route>
    <Route exact path="/about"><About/></Route> 
    <Route exact path="/illustration"><Illustration/></Route>
    <Route exact path="/upload"><Upload/></Route>
    <Route exact path="/login"><Login/></Route>
  </Switch>
  </Router>
  </>)
}
export default App;