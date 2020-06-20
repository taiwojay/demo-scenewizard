import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Grid from './Grid';
import Nav from './Nav';
import Footer from './Footer';



import Series from './Series'
import Animations from './Animations'
import Movies from './Movies'
import Games from './Games'
import MarvelDC from './MarvelDC'


class App extends React.Component{ n
  render(){
      return (
        <Router>
            <div className="App">
           <Nav />
          
           
            <Switch>
                <Route path ='/' exact component={Grid} />         
                <Route path ='/series' exact component={Series} />
                <Route path ='/animations' exact component={Animations} />
                <Route path ='/movies' exact component={Movies} />
                <Route path ='/marveldc' exact component={MarvelDC} />
                <Route path ='/games' exact component={Games} />      
             </Switch>
              <Footer />
              
            </div>
            
        </Router>
      );
  }
}


export default App;
