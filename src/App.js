import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const StatusOfBusinessInfo = Loadable({
  loader: () => import('./statusOfBusinessInfo'),
  loading: Loading,
});

const SystemOfClusterHealth = Loadable({
  loader: () => import('./systemOfClusterHealth'),
  loading: Loading,
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">Button</Button>

                    <Router>


                    <div>
                        <div>
                            <Link to="/statusOfBusinessInfo">statusOfBusinessInfo</Link>
                        </div>
                        <div>
                            <Link to="/systemOfClusterHealth">systemOfClusterHealth</Link>
                        </div>
                        <Route path="/statusOfBusinessInfo" component={StatusOfBusinessInfo}/>
                        <Route path="/systemOfClusterHealth" component={SystemOfClusterHealth}/>
                    </div>

                    </Router>




      </div>
    );
  }
}

export default App;
