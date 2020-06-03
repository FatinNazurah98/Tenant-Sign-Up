import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './component/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
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
import Navbar2 from './TenantSignUp/Navbar2';
import Dummy2 from './TenantSignUp/Dummy2';
import SignIn from './TenantSignUp/SignIn';
import UserForm from './react_step_form-master/UserForm';
import StepperExample from './component/StepperExample';
import HorizontalLinearStepper from './component/HorizontalLinearStepper';
import Report2 from './SystemAdmin/Report2';

function App() {
  return (
    <React.Fragment>
      <Router>
        {/* <NavigationBar/>
        <Sidebar/> */}

        {/* <SideBar /> */}

        <Jomedic />
        {/* <TenantSignup/> */}

        {/* <UserForm /> */}

        {/* <StepperExample /> */}

        {/* <HorizontalLinearStepper/> */}

        <Switch>
          {/* <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} /> */}


          {/* <Route exact path="/" component={Dashboard2} />
          <Route path="/LTenant" component={LTenant} />
          <Route path="/LCustomer" component={LCustomer} />
          <Route path="/UpdateTenant" component={UpdateTenant} />
          <Route path="/UpdateCustomer" component={UpdateCustomer} />
          <Route path="/Report" component={Report} /> */}

          <Route exact path="/" component={TenantSignup} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/PersonalInfo" component={PersonalInfo} />
          <Route path="/HealthCF" component={HealthCF} />
          <Route path="/ClinicSchedule" component={ClinicSchedule} />
          <Route path="/Dummy" component={Dummy} />

        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
