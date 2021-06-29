import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from "./styles";
import LinearBarProgress from "../../Components/LinearBarProgress";
import PropTypes from 'prop-types';

const Menu = (props) => {
  const { menuTitle } = props;
    const classes = useStyles();

    return (
        <AppBar position="sticky">
          <LinearBarProgress/>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            {menuTitle}
          </Typography>
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
  menuTitle: "Portfolio | Curriculum Vitae",
}

export default Menu;