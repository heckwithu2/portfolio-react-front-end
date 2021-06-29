import React from "react";
import {useStyles} from "./styles";
import {Grid} from "@material-ui/core";
import PropTypes from 'prop-types';
import { Typography } from "@material-ui/core";

const Event = (props) => {
    const { title, body,date, image } = props;
    const classes = useStyles();
    return (
        <Grid container className={classes.eventDecal} >
            <Grid item xs={12} className={classes.event}>
                <Typography className={classes.text}>{title}</Typography>
                <Typography className={classes.text}>{body}</Typography>
                <Typography className={classes.text}>{date}</Typography>
                <Typography>{image}</Typography>
            </Grid>
        </Grid>
        
    )
}

export default Event;