import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import { 
    HOME,
} from "./routes";
import HomeScreen from "./Screens/homeScreen";

function Router({history}) {
    return (
        <ConnectedRouter history={history}>
            <BrowserRouter>
                <Switch>
                    <Route path={HOME}>
                        <HomeScreen/>
                    </Route>
                    <Route path={""}>
                        <Redirect to={HOME}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </ConnectedRouter>
    )
}

export default Router;