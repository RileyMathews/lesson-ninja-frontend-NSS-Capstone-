import React, { Component } from 'react';
import './App.css';
import { Provider } from './Provider';
import NavBar from './nav/Navbar';
import ApplicationViews from './ApplicationViews';
import { Container } from 'bloomer/lib/layout/Container';

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Provider>
            <NavBar />
            <Container>
            <h1>This is lesson ninja</h1>
            <ApplicationViews />
            </Container>
          </Provider>
        </React.Fragment>
      </div>
    );
  }
}

export default App;