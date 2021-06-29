import React from 'react';
import { useStyles } from './styles';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const Category = (props) => {
    const {title} = props;
    const classes = useStyles();


    return (
        <Grid className={classes.category}>
            {title}
        </Grid>
    )
}

Category.propTypes = {
    title: PropTypes.string.isRequired,
}

Category.defaultProps = {
    title: "Category Title",
}

export default Category;