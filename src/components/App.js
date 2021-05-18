import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

import { fetchUser } from "../store/actions";

// import { Component } from "react";
// import { connect } from "react-redux";
// import * as actions from "../store/actions";

import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

// class App extends Component {
//     componentDidMount() {
//         this.props.fetchUser();
//     }
//     render() {
//         return (
//             <BrowserRouter>
//                 {/* <Header /> */}
//                 <Route path="/" component={Header} />
//             </BrowserRouter>
//         );
//     }
// }

// export default connect(null, actions)(App);

const App = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Header />
            {!auth ? (
                <Route exact path="/" component={Landing} />
            ) : (
                <Redirect to="/surveys" />
            )}
            {auth && <Route exact path="/surveys" component={Dashboard} />}
            <Route exact path="/surveys/new" component={SurveyNew} />
        </BrowserRouter>
    );
};

export default App;
