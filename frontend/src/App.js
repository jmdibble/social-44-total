import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

// Components
import Navbar from './components/Navbar';

// Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';

const theme = createMuiTheme({
  palette: {
    common: { black: '#000', white: '#fff' },
    background: { paper: '#fff', default: '#fafafa' },
    primary: {
      light: 'rgba(138, 138, 138, 1)',
      main: 'rgba(43, 43, 43, 1)',
      dark: 'rgba(74, 74, 74, 1)',
      contrastText: '#fff'
    },
    secondary: {
      light: 'rgba(229, 229, 229, 1)',
      main: 'rgba(106, 106, 106, 1)',
      dark: 'rgba(111, 111, 111, 1)',
      contrastText: 'rgba(220, 220, 220, 1)'
    },
    error: {
      light: 'rgba(124, 115, 229, 1)',
      main: 'rgba(28, 14, 186, 1)',
      dark: 'rgba(77, 47, 211, 1)',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    },
    typography: {
      useNextVariants: true
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className='App'>
          <Router>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={home} />
                <Route exact path='/login' component={login} />
                <Route exact path='/signup' component={signup} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
