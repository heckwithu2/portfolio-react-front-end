import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from "./styles";
import LinearBarProgress from "../../Components/LinearBarProgress";
import PropTypes from 'prop-types';
import MenuItem from "../menuItem";
import {HOME,CV, PROJECTS, ABOUT} from '../../routes';
import {Grid} from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Menu = (props) => {
  const { menuTitle } = props;
    const classes = useStyles();

    return (
        <AppBar position="sticky">
          <LinearBarProgress/>
        <Toolbar className={classes.toolbar}>
          <Tabs
            aria-label="disabled tabs example"
          >
            <MenuItem link={`${HOME}#${ABOUT}`}>{menuTitle[0]} </MenuItem>
            <MenuItem link={`${HOME}#${CV}`}>{menuTitle[1]}</MenuItem>
            <MenuItem link={`${HOME}#${PROJECTS}`}>{menuTitle[2]} </MenuItem>
            <MenuItem link={`https://www.linkedin.com/in/jeremiah-heck-498b1a184/`} image={`LinkedIn`}/>
            <MenuItem link={`https://github.com/heckwithu2`} image={`GitHub`}/>
          </Tabs>


          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div> */}
          
        </Toolbar>
      </AppBar>
    )
}

Menu.propTypes = {
  menuTitle: PropTypes.string.isRequired,
}

Menu.defaultProps = {
  menuTitle: [ 
    "About",
    "Curriculum Vitae",
    "Projects"  
  ],
}

export default Menu;