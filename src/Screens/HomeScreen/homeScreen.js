import React from "react";
import {useStyles} from "./styles";
import {Grid} from "@material-ui/core";
import Category from "../../Components/category";
import PropTypes from 'prop-types';
import Header from "../../Components/header";

const HomeScreen = (props) => {
    const { categories } = props;
    const classes = useStyles();
    
    const renderCategories = (categories) => {
        return (
            <Grid  item xs={12} container className={classes.categoriesSection}>
                {categories.map((category) => 
                    <Grid item xs={4}>
                        <Category 
                            alignText={"center"}
                            key={category.id} 
                            title={category}
                        />
                    </Grid>
                )}
            </Grid>
        );
    }

    return (
        <Grid justify="center" alignItems="center" container className={classes.home}>
             
            {/* header */}
            <Grid item xs={12} container>
                <Header/>
            </Grid>

            {/* categories */}
            {renderCategories(categories)}
            
        </Grid>
    )
}


HomeScreen.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
}

HomeScreen.defaultProps = {
    categories: [
        "Web Apps",
        "Mobile Apps",
        "Graphics Programming"
    ]
}


export default HomeScreen;