import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainUI from './MainUI';
import CreateUser from './Components/CreateUser';
import NGODashBoard from './Components/NGOdashboard';
import SignIn from './Components/SignIn';
import UserDashBoard from './Components/Userdashboard';
import AboutUs from "./Components/AboutUS"

const App = () => {
  const [role, setRole] = React.useState('');

  return (
    <React.Fragment>
      <MainUI role={role} />
      <Switch>
        <Route path="/createuser" component={CreateUser} />
        <Route path="/signin" render={(props) => <SignIn {...props} setRole={setRole} />} />
        <Route path="/dashboardUser" component={UserDashBoard} />
        <Route path="/dashboardNGO" component={NGODashBoard} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
