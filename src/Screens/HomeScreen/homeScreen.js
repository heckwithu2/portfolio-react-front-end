import React from "react";
import {useStyles} from "./styles";
import {Grid} from "@material-ui/core";
import Category from "../../Components/category";

const HomeScreen = (props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.home}>
            <Grid item xs={4}>
                <Category/>
            </Grid>
            <Grid item xs={4}>
                <Category/>
            </Grid>
            <Grid item xs={4}>
                <Category/>
            </Grid>
        </Grid>
    )
}

export default HomeScreen;