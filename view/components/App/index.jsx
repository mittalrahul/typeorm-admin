import React from "react"
import {Route, Switch} from "react-router-dom";

import LoginComponent from "../Login";
// import AdminDashboard from "../Dashboard";

function App() {
    return (
        <Route path="/login" component={LoginComponent} />
    );
}

export default App;