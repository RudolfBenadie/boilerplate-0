import "./App.css";
import "./assets/scss/main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BaseLayout from "./layout/Base";
import AuthLayout from "./layout/Auth";

function App() {
  let currentUser = {};
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <BaseLayout currentUser={currentUser} {...props} />} />
          <Route path="/auth" render={props => <AuthLayout currentUser={currentUser} {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
