import Typography from '@material-ui/core/Typography';
import React from "react";
import {useStyles} from "./styles";
import PropTypes from 'prop-types';

const Message = (props) => {
    const { body } = props;
    const classes = useStyles();

    return (
        <Typography align={"center"} className={classes.message} variant={'h5'}>
            {body}
        </Typography>
    )
}

Message.propTypes = {
    body: PropTypes.string.isRequired,
}

Message.defaultProps = {
    body: "My name's Jeremiah, I'm a Software Engineer with experience developing for warehouses-management-software, eCommerce sites, and other sites such as lumapr. Thanks for spending time to view my Portfolio.",
}
export default Message;