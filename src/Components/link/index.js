import React from "react";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { useStyles } from "./styles";


const Link = (props) => {
    const {name, destination, target} = props;
    const classes = useStyles();

    return (
        <a
            href={destination}
            target={target && `blank`}
            className={classes.link}
        >
            <Typography>{name}</Typography>
        </a>
    )
}

Link.propTypes = {
    name: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    target: PropTypes.bool,
}

Link.defaultProps = {
    name: null,
    destination: null,
    target: true,
}

export default Link;