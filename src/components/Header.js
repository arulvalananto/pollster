// import React, { Component } from "react";
// import "./Header.css";

// import { connect } from "react-redux";

// class Header extends Component {
// renderContent() {
//     switch (this.props.auth.data) {
//         case null:
//             return "Still deciding";
//         case "":
//             return "im loggedout";
//         default:
//             return "im loggedin";
//     }
// }
//     render() {
//         return (
//             <nav>
//                 <div className="nav-wrapper header">
//                     <a href="" className="left brand-logo">
//                         Pollster
//                     </a>
//                     <ul className="right">
//                         {this.renderContent()}
//                         {/* <li>
//                             <a href="">Login With Google</a>
//                         </li> */}
//                     </ul>
//                 </div>
//             </nav>
//         );
//     }
// }

// function mapStateToProps({ auth }) {
//     return { auth: auth };
// }

// export default connect(mapStateToProps)(Header);

import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import { CircularProgress, IconButton, Tooltip } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";

const Header = () => {
    // const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const renderContent = () => {
        switch (auth) {
            case undefined:
                return (
                    <CircularProgress
                        size="20px"
                        style={{ color: "black", fontSize: "10px" }}
                    />
                );
            case false:
                return (
                    <a href="/auth/google" className="header__link">
                        Login With Google
                    </a>
                );
            default:
                return (
                    <div className="header__right">
                        <Payments />
                        <Tooltip title="Credits" arrow>
                            <div className="header__credit">
                                <p>{auth?.credits}</p>
                                <DonutSmallIcon />
                            </div>
                        </Tooltip>
                        <a href="/api/logout" className="header__rightLink">
                            <Tooltip title="Logout" arrow>
                                <IconButton>
                                    <ExitToAppIcon className="header__navigator" />
                                </IconButton>
                            </Tooltip>
                        </a>
                    </div>
                );
        }
    };

    return (
        <div className={`header ${auth && "header__features"}`}>
            <div className="header__left">
                <Link to={auth ? "/surveys" : "/"}>
                    <p>_Pollster</p>
                </Link>
            </div>
            <div>{renderContent()}</div>
        </div>
    );
};

export default Header;
