import "./App.css";
import "bootstrap/dist/css/bootstrap.css"
import "./assets/scss/main.scss";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import BaseLayout from "./layout/Base";
import AuthLayout from "./layout/Auth";

function App() {
  let currentUser = {};
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/terminal" render={props => <BaseLayout currentUser={currentUser} {...props} />} />
          <Route path="/auth" render={props => <AuthLayout currentUser={currentUser} {...props} />} />
          {currentUser ? <Redirect to="/terminal/dashboard" /> : <Redirect to="/uath" />}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
