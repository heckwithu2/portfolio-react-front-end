import Router from "./router";
import {MuiThemeProvider} from "@material-ui/core";
import {lightTheme, darkTheme} from "./Themes";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

function App(props) {
  const {history, theme} = props;
  const globalLoadingProgressDynamic = 0;

  return (
   
      <MuiThemeProvider
        progress={globalLoadingProgressDynamic}
        theme={
          theme === "Light"
          ? lightTheme
          : darkTheme}>
              <Router history={history}/>
      </MuiThemeProvider>
  );
}

App.propTypes = {
  history: PropTypes.any,
  theme: PropTypes.string.isRequired,
}

App.defaultProps = {
  history: null,
  theme: null,
}

function mapStateToProps(state) {
  return {
    theme: state.init.theme,
  };
}

export default connect(mapStateToProps)(App);
