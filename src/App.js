import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';


const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;


// notes - the arrow function above for input is the same as writing
// const name = function(input) {
//   this.input = input;
// }


// class Welcome extends Component {
//   render() {
//     // object destructuring
//     const { text } = this.props;

//     return (
//       <h1 className="App-title">{text}</h1> // because we've defined variable just above
//     )
//   }
// }
