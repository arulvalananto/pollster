import React from "react";
import "./DashBoard.css";

// MaterialUi
import { Tooltip } from "@material-ui/core";
import Add from "@material-ui/icons/Add";

//React Router
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";


const Dashboard = () => {
    
    return (
        <div className="dashboard">
            <SurveyList />
            <Tooltip title="Create Survey">
                <div className="fixed-action-btn">
                    <Link to="/surveys/new" className="btn-floating pink">
                        <i className="material-icons">
                            <Add />
                        </i>
                    </Link>
                </div>
            </Tooltip>
        </div>
    );
};

export default Dashboard;
