import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar'
import NavBarMobile from './components/NavBarMobile'
import { Route, Switch } from "react-router-dom";
import { HashRouter} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Home, Post, Map, About, RealHome } from "./components";


const displayDesktop = () => {
  return (
    <NavBar />
  );
};

const displayMobile = () => {
  return (
    <NavBarMobile />
  );
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App() {

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1000
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <div className="App">
      <header>
        
      </header>
        <HashRouter basename="/">
          {mobileView ? displayMobile() : displayDesktop()}
          <Switch>
            <Route path="/" exact component={() => <RealHome />} />
            <Route path="/post" exact component={() => <Post />} />
            <Route path="/map" exact component={() => <Map />} />
            <Route path="/about" exact component={() => <About />} />
          </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
