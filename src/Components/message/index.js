import Typography from '@material-ui/core/Typography';
import React from "react";
import {useStyles} from "./styles";


const Message = () => {
    const classes = useStyles();

    return (
        <Typography align={"center"} className={classes.message} variant={'h5'}>
            My name is Jeremiah, I'm a Web developer with experiences in Laravel, React, Redux, Material-UI, BootStrap, HTML, CSS and more.
        </Typography>
    )
}


export default Message;