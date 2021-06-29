import Router from "./router";
import {MuiThemeProvider} from "@material-ui/core";
import {lightTheme, darkTheme} from "./Themes";

function App(props) {
  const {history, initTheme} = props;

  return (
   
      <MuiThemeProvider
        theme={
          initTheme === "Dark"
          ? lightTheme
          : darkTheme}>
              <Router history={history}/>
      </MuiThemeProvider>
  );
}

export default App;
