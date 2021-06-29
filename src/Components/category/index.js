import React from 'react';
import { useStyles } from './styles';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/typography';

const Category = (props) => {
    const {title} = props;
    const classes = useStyles();


    return (
        <Grid className={`${classes.category}`}>
            <Grid className={classes.categoryTitle} >
                <Typography>{title}</Typography>
            </Grid>
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