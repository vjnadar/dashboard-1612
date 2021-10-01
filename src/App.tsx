import { Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import DashboardLayout from "./components/DashboardLayout";
function App(): JSX.Element {
  return (
    <Switch>
      <Route path="/">
        <DashboardLayout />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}
export default App;
