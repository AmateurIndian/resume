
import React from 'react';
import { Container, Grid } from '@material-ui/core';

import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Portfolio from './pages/Portfolio/Portfolio'
import Speaking from './pages/Speaking/Speaking'
import Resume from './pages/Resume/Resume'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';




function App() {
  return (
    <Container className={'main_body'}>
      <Grid container spacing={7}>
        
        <Grid item xs={12} sm={12} md={3} lg={3}  >
          <Profile></Profile>
        </Grid>
        <Grid item xs>
          <Router>
          <Header/>

          <div className= 'main_content container_shadow'>
            <Switch>
              <Route path="/portfolio">
                <Portfolio></Portfolio>
              </Route>
              <Route path="/speaking">
                <Speaking></Speaking>
              </Route>
              <Route path="/">
                <Resume></Resume>
              </Route>
            </Switch>
          </div>

          </Router>

          <Footer/>
        </Grid>

      </Grid>
    </Container>
  );
}

export default App;
