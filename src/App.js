import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TenantSignup from './TenantSignUp/TenantSignup';
import Sidebar from './component/Sidebar';
import LCustomer from './SystemAdmin/LCustomer';
import UpdateCustomer from './SystemAdmin/UpdateCustomer';
import LTenant from './SystemAdmin/LTenant';
import UpdateTenant from './SystemAdmin/UpdateTenant';
import Dashboard2 from './SystemAdmin/Dashboard2';
import SideBar from './SystemAdmin/SideBar';
import Report from './SystemAdmin/Report';
import HealthCF from './TenantSignUp/HealthCF';
import PersonalInfo from './TenantSignUp/PersonalInfo';
import ClinicSchedule from './TenantSignUp/ClinicShedule';
import Dummy from './TenantSignUp/Dummy';
import Jomedic from './TenantSignUp/Jomedic';
import SignIn from './TenantSignUp/SignIn';
import LocalStorage from './component/LocalStorage';

function App() {
  return (
    <React.Fragment>
      <Router>
        {/* <SideBar /> */}

        <Jomedic />

        {/* <LocalStorage/> */}

        <Switch>

          {/* <Route exact path="/" component={Dashboard2} />
          <Route path="/LTenant" component={LTenant} />
          <Route path="/LCustomer" component={LCustomer} />
          <Route path="/UpdateTenant" component={UpdateTenant} />
          <Route path="/UpdateCustomer" component={UpdateCustomer} />
          <Route path="/Report" component={Report} /> */}

          <Route exact path="/" component={SignIn} />
          <Route path="/TenantSignup" component={TenantSignup} />
          <Route path="/PersonalInfo" component={PersonalInfo} />
          <Route path="/HealthCF" component={HealthCF} />
          <Route path="/ClinicSchedule" component={ClinicSchedule} />

        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
