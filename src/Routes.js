import { Switch, Route } from 'react-router-dom';
import Login from './login/Login';

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/home">
                <Home/>
            </Route>
        </Switch>
    );
}