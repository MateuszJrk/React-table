import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import MovieForm from "./components/common/MovieFrom";
import Movies from "./components/Movies";
import ThemeSettings from "./components/ThemeSettings";
import Dashboard from "./components/Dashboard";
import Catalogs from "./components/Catalogs";
import Filters from "./components/Filters";
import DatePicker from "./components/DatePicker";
import notFound from "./components/NotFound";
import LoginForm from "./components/common/LoginForm";

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col">
          <main className="container">
            <Switch>
              <Route path="/login" component={LoginForm} />
              <Route path="/movies/:id" component={MovieForm} />
              <Route path="/movies" component={Movies} />
              <Route path="/settings" component={ThemeSettings} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/catalogs" component={Catalogs} />
              <Route path="/filters" component={Filters} />
              <Route path="/date" component={DatePicker} />
              <Route path="/notfound" component={notFound} />
              <Redirect from="/" exact to="/movies" />
              <Redirect to="/notfound" />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
