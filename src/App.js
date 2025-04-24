import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home.js/Home';
import { Fragment } from 'react';
import { Nav } from 'react-bootstrap';
import Navs from './component/Nav/Navs';

function App() {
  return (
    <Fragment>
      <Navs/>
      <Home/>
    </Fragment>

  );
}

export default App;
