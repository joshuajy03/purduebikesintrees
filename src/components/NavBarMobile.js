import React from 'react'
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Toolbar, Typography, AppBar, IconButton, Drawer, ClickAwayListener } from '@material-ui/core'
import { Link, withRouter } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import './NavBar.css';
import logo from '../purdue.png';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    color: "#000000",
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: '#d0ba92'
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#d0ba92',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#d0ba92',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },


  bar: {
    paddingTop: "0rem",
    backgroundColor: "#d0ba92",
    ["@media (max-width: 900px)"]: {
      paddingLeft: 10,
    },
  },
  logo: {
    height: "50px",
  },
  title: {
    flexGrow: 1,
    color: "#000000"
  },
  menuItem: {
    cursor: "pointer",
    backgroundColor: "#d0ba92",
    textAlign: "left",
    paddingLeft: "16px",
    marginBottom: 16,
    "&:hover": {
      color: "#CFD2B2"
    },
    ['@media (max-width: 900px)']: {
      paddingBottom: "0rem"
    }
  },
}));


function NavBarMobile() {
  const classes = styles()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    console.log("open");
  };

  const handleDrawerClose = () => {
    if ({open}.open) {
      setOpen(false);
      console.log("close");
    }
  };

  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar color="rgba(75, 59, 71, 0.87)" className={classes.bar}>
          <Link style={{ textDecoration: 'none' }, {color : "#000000"}} to="/">
            <img src={logo} className={classes.logo} />
          </Link>
          <Typography variant="h6" noWrap className={classes.title}>
            <h3>Bikes In Trees</h3>
          </Typography>
          <ClickAwayListener onClickAway={handleDrawerClose} touchEvent={false} >
            <IconButton
              color="default"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="end"
              className={clsx(open && classes.hide), classes.menuButton}>
              <MenuIcon />
            </IconButton>
          </ClickAwayListener>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon style={{ color: "#000000"}} /> : <ChevronRightIcon style={{ color: "#000000" }} />}
          </IconButton>
        </div>
          <Typography variant="h6" className={classes.menuItem}>
            <Link style={{ textDecoration: 'none' }, {color : "#000000"}} to="/">
              Home
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.menuItem}>
            <Link style={{ textDecoration: 'none' }, {color : "#000000"}} to="/post">
              Post
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.menuItem}>
            <Link style={{ textDecoration: 'none' }, {color : "#000000"}} to="/map">
              Map
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.menuItem}>
            <Link style={{ textDecoration: 'none' }, {color : "#000000"}} to="/about">
              About
            </Link>
          </Typography>
      </Drawer>

    </React.Fragment>
  )
}

export default NavBarMobile