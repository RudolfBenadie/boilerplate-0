import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BaseLayout from "./layout/Base";
import AuthLayout from "./layout/Auth";

function App() {
  let currentUser = {};
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" render={props => <BaseLayout currentUser = {currentUser} { ...props } />} />
            <Route path="/auth" render={props => <AuthLayout currentUser = {currentUser} {...props} />} />
         </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
