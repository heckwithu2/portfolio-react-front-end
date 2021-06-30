import React from "react";
import {useStyles} from "./styles";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';


const SectionTitle = (props) => {
    const { title, inPageLink } = props;
    const classes = useStyles();

    return (
        <div>
            {inPageLink 
            ? <a id={inPageLink}>
            <Typography variant={`h6`} className={classes.sectionTitles}>
                {title}
            </Typography>
            </a>
            :<Typography variant={`h6`} className={classes.sectionTitles}>
            {title}
            </Typography>}
        </div>

        
    )
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    inPageLink: PropTypes.string,
}

SectionTitle.defaultProps = {
    title: null,
    inPageLink: null,
}

export default SectionTitle;