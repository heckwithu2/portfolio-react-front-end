import React from "react";
import {useStyles} from "./styles";
import {Grid} from "@material-ui/core";
import PropTypes from 'prop-types';
import Message from "../message";
import Skill from "../skill";

const Header = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.header}>
            <Grid item xs={12}>
                <Message/>
            </Grid>
            <Grid item xs={12}>
                <Skill/>
            </Grid>
        </Grid>
    )
}


export default Header;