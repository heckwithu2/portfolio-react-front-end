import React, {useState} from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useStyles } from "./styles";
import LinearBarProgress from "../../Components/LinearBarProgress";
import PropTypes from 'prop-types';
import MenuItem from "../menuItem";
import {HOME,CV, PROJECTS, ABOUT} from '../../routes';
import Tabs from '@material-ui/core/Tabs';
import {Grid} from "@material-ui/core";
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { connect } from 'react-redux';
import { changeTheme } from "../../Redux/init/actions";

const Menu = (props) => {
  const { menuTitle, theme, changeTheme} = props;
    const classes = useStyles(); 

    return (
        <AppBar position="sticky">
          <LinearBarProgress/>

            <Grid container className={classes.toolbar}>
              <Grid
              item
              xs={12}
              sm={6}
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Toolbar >
                <Tabs
                  variant="fullWidth"
                >
                  <MenuItem link={`${HOME}#${ABOUT}`}>{menuTitle[0]} </MenuItem>
                </Tabs>
                <Tabs
                  variant="fullWidth"
                >
                  <MenuItem link={`${HOME}#${CV}`}>{menuTitle[1]}</MenuItem>
                </Tabs>
                <Tabs
                  variant="fullWidth"
                >
                  {console.log(window.innerWidth)}
                  <MenuItem link={`${HOME}#${PROJECTS}`}>{menuTitle[2]} </MenuItem>
                </Tabs>
              </Toolbar>
            </Grid>
            <Grid
              item
              sm={6}
              xs={12}
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              className={classes.iconRow}
            >
              <Toolbar >
                <Tabs
                  variant="fullWidth"
                >
                  <MenuItem link={`https://www.linkedin.com/in/jeremiah-heck-498b1a184/`} image={`LinkedIn`}/>
                </Tabs>
                <Tabs
                  variant="fullWidth"
                >         
                  <MenuItem link={`https://github.com/heckwithu2`} image={`GitHub`}/>
                </Tabs>
              </Toolbar>
              {localStorage.getItem("theme") === "Dark" 
              ? <NightsStayIcon onClick={() => changeTheme("Light")} className={classes.themeIconDark}/> 
              : <WbSunnyIcon onClick={() => changeTheme("Dark")} className={classes.themeIconLight}/>}
            </Grid>
          </Grid>
      </AppBar>
    )
}

Menu.propTypes = {
  menuTitle: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
}

Menu.defaultProps = {
  theme: localStorage.getItem("theme"),
  menuTitle: [ 
    "About",
    "Curriculum Vitae",
    "Projects"  
  ],
}

function mapStateToProps(state) {
  return {
    theme: state.init.theme,
  };
}


const mapDispatchToProps = dispatch => {
  return {
    changeTheme: payload => dispatch(changeTheme(payload)),
  }
}

;export default connect(mapStateToProps, mapDispatchToProps)(Menu);