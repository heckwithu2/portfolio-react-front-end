import React, {useEffect, useState} from "react";
import {useStyles} from "./styles";
import Link from "../link";
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';

const MenuItem = (props) => {
    const { image, link, children, urlCheck } = props;
    const classes = useStyles();
    const [urlCheckState, setUrlCheckState] = useState(urlCheck);

    const checker = window.location.pathname;
    if (checker === link ) {
        setUrlCheckState(true);
    }

    return (
        <Tab className={classes.item} 
            value={urlCheckState}
            label={image 
            ? <Link icon={true} decoration={false} destination={link} image={image}/>
            : <a  href={link} className={classes.neDecor}>
                <Typography className={urlCheckState ? classes.titleActive : classes.title} variant="h6" noWrap>{children}</Typography>
                </a>}
               
        />
    )
}

MenuItem.propTypes = {
    image: PropTypes.string,
    link: PropTypes.string.isRequired,
    urlCheck: PropTypes.bool.isRequired,
}

MenuItem.defaultProps = {
    image: null,
    link: null,
    urlCheck: false,
}

export default MenuItem;