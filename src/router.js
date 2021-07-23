import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import { 
    HOME, UTILITY,LOGIN,
} from "./routes";
import HomeScreen from "./Screens/HomeScreen/homeScreen";
import BaseScreen from "./Screens/BaseScreen/baseScreen";
import UtilityScreen from "./Screens/UtilityScreen/utilityScreen";
import LoginScreen from "./Screens/LoginScreen/loginScreen";
import PropTypes from 'prop-types';

function Router({history, loggedIn}) {
    return (
        <ConnectedRouter history={history}>
            <BrowserRouter>
                {!loggedIn && (
                    <Switch>
                        <Route path={HOME}>
                            <BaseScreen screen={<HomeScreen/>}/>
                        </Route>
                        <Route exact path={"/"}>
                            <BaseScreen screen={<HomeScreen/>}/>
                        </Route>
                        <Route path={LOGIN}>
                            <BaseScreen screen={<LoginScreen/>}/>
                        </Route>
                        <Route path={UTILITY}>
                            <Redirect to={LOGIN}/>
                        </Route>
                    </Switch>
                )}
                {loggedIn && (
                    <Switch>
                        <Route path={HOME}>
                            <BaseScreen screen={<HomeScreen/>}/>
                        </Route>
                        <Route exact path={"/"}>
                            <BaseScreen screen={<HomeScreen/>}/>
                        </Route>
                        <Route path={LOGIN}>
                            <BaseScreen screen={<UtilityScreen/>}/>
                        </Route>
                        <Route path={UTILITY}>
                            <BaseScreen screen={<UtilityScreen/>}/>
                        </Route>
                    </Switch>
                )}
            </BrowserRouter>
        </ConnectedRouter>
    );
}


Router.propTypes = {
    history: PropTypes.any.isRequired,   
    loggedIn: PropTypes.bool.isRequired,     
}

Router.defaultProps = {   
    loggedIn: false,   
}

export default Router;