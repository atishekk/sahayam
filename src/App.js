import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainUI from './MainUI';
import CreateUser from './Components/CreateUser';
import NGODashBoard from './Components/NGOdashboard';
import SignIn from './Components/SignIn';
import UserDashBoard from './Components/Userdashboard';
import AboutUs from "./Components/AboutUS"

const App = () => {
    return (
        <React.Fragment>
            <MainUI/>
            <Switch>
                <Route exact path="/" component={AboutUs} />
                <Route path="/createuser" component={CreateUser}/>
                <Route path="/signin" component={SignIn} />
                <Route path="/dashboardUser" component={UserDashBoard} />
                <Route path="/dashboardNGO" component={NGODashBoard} />
            </Switch>
        </React.Fragment>
    )
}

export default App;
