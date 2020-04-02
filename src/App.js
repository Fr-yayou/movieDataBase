import React from 'react';
import './App.css';
import MovieList from './MovieList'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import MovieDetail from './MovieDetail'



const App = () => (
      <Router>
        <div className="App">
          <header className='header'>
        <Link className='a' to='/'><h1 className='title'>Movies DB</h1></Link>
          </header>
          <Switch>
        <Route exact path='/' component={MovieList}></Route>
        <Route path='/:id' component={MovieDetail}></Route>
        
          </Switch>
        </div>
      </Router>
)

export default App;

