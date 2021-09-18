import React from 'react'
import logo from '../purdue.png'
import { Toolbar, Typography, AppBar } from '@material-ui/core'
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import './NavBar.css';

const styles = makeStyles({
    bar: {
        paddingTop: "0rem",
        backgroundColor: "#d0ba92",
    },
    logo: {
        width: "75px",
    },
    menuItem: {
        cursor: "pointer",
        marginRight: 24,
        "&:hover": {
            color: "#CFD2B2"
        },
    },

    space: {
        flexGrow: 1,
        color: "#000000",
        justifyContent: 'center',
    },
})


function NavBar() {
    const classes = styles()

    return (
        <AppBar position="sticky">
            <Toolbar color="rgba(75, 59, 71, 0.87)" className={classes.bar}>
                <Link style={{ textDecoration: 'none' }, {color : "#000000"}}  to="/">
                    <img src={logo} className={classes.logo} />
                </Link>
                <Typography variant="h6" className={classes.space}>
                    <h3>Purdue Bikes In Trees</h3>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link style={{color : "#000000"}}  to="/">
                        Home
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link style={{ textDecoration: 'none' }, {color : "#000000"}}  to="/post">
                        Post
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link style={{ textDecoration: 'none' }, {color : "#000000"}}  to="/map">
                        Map
                    </Link>
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    <Link style={{ textDecoration: 'none' }, {color : "#000000"}}  to="/about">
                        About
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar