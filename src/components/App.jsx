import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Todos from "./Todos/";

class App extends Component {

  render() {
    return (
      <Switch>
        <Route path={'/'} component={Todos} />
      </Switch>
    );
  }
}

export default App;
