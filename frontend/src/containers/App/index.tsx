import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import "./index.scss";

function App() {
  return (
    <Router>
      <div className="ms-app">
        {/*Navigation*/}
        <div className="ms-app__page">
          <Switch>
            <Route path={ROUTES.APP} component={ROUTES.APP_PAGE_CONTAINER} />
            <Route
              exact
              path={ROUTES.LANDING}
              component={ROUTES.LANDING_PAGE_CONTAINER}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
