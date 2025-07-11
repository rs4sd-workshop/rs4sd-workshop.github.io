import * as React from "react";
import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Team from "./pages/team";

const App = () => {
    return (
        <Router>
            <RoutedApp />
        </Router>
    );
};

const RoutedApp = () => {
    return (
        <>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/team" element={<Team />} />
                {/*<Route path="/activities" element={<Projects />} />*/}
                {/*<Route path="/resources" element={<Resources />} />*/}

            </Routes>
        </>
    );
};

export default App;