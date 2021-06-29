import React from "react";
import {useStyles} from "./styles";
import {Grid} from "@material-ui/core";
import Project from "../../Components/project";
import PropTypes from 'prop-types';
import Header from "../../Components/header";
import Event from "../../Components/event";

const HomeScreen = (props) => {
    const { categories, cvEntries } = props;
    const classes = useStyles();
    
    const renderCV = (cvEntries) => {
        return (
            <Grid  item xs={12} container className={classes.cv}>
                {cvEntries.map((entry) => 
                    <Grid item xs={10}
                        container
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <Event 
                            key={entry.id} 
                            alignText={"center"}
                            title={entry.title}
                            body={entry.body}
                            date={entry.date}
                            image={entry.image}
                        />
                        {entry.id !== cvEntries.length - 1 && <Event/>}
                    </Grid>
                )}
            </Grid>
        );
    }

    const renderCategories = (categories) => {
        return (
            <Grid  item xs={12} container className={classes.categoriesSection}>
                {categories.map((category) => 
                    <Grid item xs={4}>
                        <Project 
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
            
            {/* {CV} */}
            {renderCV(cvEntries)}

            {/* categories */}
            {renderCategories(categories)}
            
        </Grid>
    )
}


HomeScreen.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
    cvEntries: PropTypes.arrayOf(PropTypes.object),
}

HomeScreen.defaultProps = {
    categories: [
        "Club website",
        "Ios To-Do App",
        "Legacy Portfolio",
        "Ios Triangle Game",
        "OpenGL Project",
        "Game Jam Game 2019",
        "Game Jam Game 2020",
        "Spring Crud App",
        "Tic Tac Toe with React"
    ],
    cvEntries : [
        {
            id: 0,
            title: "Areatrend Internship",
            body: "THis was an awesome experience to be sure, blah blah blah..",
            date: "5/15/2018",
            image: "No Image Yet",
        },
        {
            id: 1,
            title: "Areatrend Internship",
            body: "This was an awesome experience to be sure, blah blah blah..This was an awesome experience to be sure, blah blah blah..This was an awesome experience to be sure, blah blah blah..This was an awesome experience to be sure, blah blah blah..",
            date: "5/15/2018",
            image: "No Image Yet",
        },
        {
            id: 2,
            title: "Areatrend Internship",
            body: "THis was an awesome experience to be sure, blah blah blah..",
            date: "5/15/2018",
            image: "No Image Yet",
        },
        {
            id: 3,
            title: "Areatrend Internship",
            body: "THis was an awesome experience to be sure, blah blah blah..",
            date: "5/15/2018",
            image: "No Image Yet",
        },
        {
            id: 4,
            title: "Areatrend Internship",
            body: "This was an awesome experience to be sure, blah blah blah..This was an awesome experience to be sure, blah blah blah..THis was an awesome experience to be sure, blah blah blah..",
            date: "5/15/2018",
            image: "No Image Yet",
        },
    ]
}


export default HomeScreen;