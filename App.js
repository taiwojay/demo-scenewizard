import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Grid from './components/Grid/Grid';
import Nav from './components/Nav/Nav';
//import Cover from './components/Cover/Cover';
import Footer from './components/Footer/Footer';



import Series from './components/categories/Series'
import Animations from './components/categories/Animations'
import Movies from './components/categories/Movies'
import Games from './components/categories/Games'
import MarvelDC from './components/categories/MarvelDC'


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
