import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";

export function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} state={route.state} routes={route.routes} />
            )}
        />
    );
}

export function MapRoutes(props){
    let mapRoutes = props.routes.map((route, i) => (
        <RouteWithSubRoutes state={props.state} key={i} {...route} />
    ));
    return (
        <Switch>
            {mapRoutes}
        </Switch>
    )
}
