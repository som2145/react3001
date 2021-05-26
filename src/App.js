import React from "react";
import{BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Reference from "./components/pages/Reference";
import Youtube from "./components/pages/Youtube";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Script from "./components/pages/Script";

function App(){
    return(
        <Router>
        <Route path="/" exact component={Main}/>
        <Route path="/about" component={About}/>
        <Route path="/reference" component={Reference}/>
        <Route path="/youtube" component={Youtube}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/script" component={Script}/>
        </Router>
    )


}

export default App;