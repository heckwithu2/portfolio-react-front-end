import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useStyles } from "./styles";
import LinearBarProgress from "../../Components/LinearBarProgress";
import PropTypes from 'prop-types';
import MenuItem from "../menuItem";
import {HOME,CV, PROJECTS, ABOUT} from '../../routes';
import Tabs from '@material-ui/core/Tabs';
import {Grid} from "@material-ui/core";
import { 
  FiMoon as Dark,
  FiSun as Light,
} from 'react-icons/fi';
import Tab from '@material-ui/core/Tab';


const Menu = (props) => {
  const { menuTitle, theme } = props;
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
                <Tabs
                className={classes.themeIcon}
                variant="fullWidth"
                >         
                  <Tab className={theme === "Dark" ? classes.moon : classes.sun}  icon={<Dark/>}/>
                </Tabs>
              </Toolbar>
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
  theme: "Dark",
  menuTitle: [ 
    "About",
    "Curriculum Vitae",
    "Projects"  
  ],
}

export default Menu;