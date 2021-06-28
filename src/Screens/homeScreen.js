import React from "react";
import { useHistory } from "react-router";
import {useStyles} from "../Themes/styles";
import {Grid} from "@material-ui/core";

const HomeScreen = (props) => {
    const history = useHistory();
    const classes = useStyles();

    return (
        <Grid container className={classes.main}>
            Hello main Screen
        </Grid>
    )
}

export default HomeScreen;