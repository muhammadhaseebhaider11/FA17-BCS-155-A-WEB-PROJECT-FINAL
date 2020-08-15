import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainPage from "../Pages/MainPage";
import EveryDay from "../Pages/EveryDay";
import NightDeals from "../Pages/NightDeals";
import Bucket from "../Pages/Bucket";
import Error from "../Pages/Error";
import Admin from "../Pages/Admin";
import Adddeal from "../Pages/Adddeal";
import Adminview from "../Pages/Adminview";
import Admindel from "../Pages/Admindel";
import Adminrecord from "../Pages/Adminrecord";
import Register from "../Pages/Register";
export default function CustomeRoute() {
  return (
    <Router>
      
      <div>
        <Switch>
          <Route path="/adminlogin" component={Admin}/>
          <Route path="/Adddeal" component={Adddeal}/>
          <Route path="/" exact component={MainPage} />
          <Route path="/everyday" component={EveryDay} />
          <Route path="/NightDeals" component={NightDeals} />
          <Route path="/bucket" component={Bucket} />
          <Route path="/Adminview" component={Adminview} />
          <Route path="/Admindel" component={Admindel} />
          <Route path="/Adminrecord" component={Adminrecord}/>
          <Route path="/Register" component={Register}/>

          <Route path="*">
            <Error />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}
