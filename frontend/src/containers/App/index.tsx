import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import "./index.scss";
import { AuthContextProvider, useAuthState } from "../../contexts/AuthContext";

import Navigation from "../../components/Navigation";

interface authProps {
  component: any;
  path: string;
  exact?: boolean;
}
const AuthenticatedRoute: React.FC<authProps> = ({
  component: C,
  ...props
}) => {
  const { isAuthenticated } = useAuthState();
  console.log(`AuthenticatedRoute: ${isAuthenticated}`);
  return (
    <Route
      {...props}
      render={(routeProps) =>
        isAuthenticated ? <C {...routeProps} /> : <Redirect to="/login" />
      }
    />
  );
};

const UnauthenticatedRoute: React.FC<authProps> = ({
  component: C,
  ...props
}) => {
  const { isAuthenticated } = useAuthState();
  console.log(`UnauthenticatedRoute: ${isAuthenticated}`);
  return (
    <Route
      {...props}
      render={(routeProps) =>
        !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
};

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div className="ms-app">
          <Navigation />

          <div className="ms-app__page">
            <Switch>
              <UnauthenticatedRoute
                exact
                path={ROUTES.SETSU_AI}
                component={ROUTES.SETSU_AI_PAGE_CONTAINER}
              />
              <UnauthenticatedRoute
                path={ROUTES.APP}
                component={ROUTES.APP_PAGE_CONTAINER}
              />
              <UnauthenticatedRoute
                exact
                path={ROUTES.LANDING}
                component={ROUTES.LANDING_PAGE_CONTAINER}
              />
              <UnauthenticatedRoute
                exact
                path={ROUTES.VIDEO_CHAT}
                component={ROUTES.VIDEO_CHAT_PAGE_CONTAINER}
              />
              <Route component={ROUTES.NOTFOUND_PAGE_CONTAINER} />
            </Switch>
          </div>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
