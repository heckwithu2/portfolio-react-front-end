import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from "./styles";
import LinearBarProgress from "../../Components/LinearBarProgress";

const Menu = () => {
    const classes = useStyles();

    return (
        <AppBar position="sticky">
          <LinearBarProgress/>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Jeremiah Heck
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    )
}


export default Menu;