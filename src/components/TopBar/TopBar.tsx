import * as React from "react";
import { TopBarState } from "./common";
import { IndexLink, Link } from "react-router";
const logoImage = require("file-loader!../../images/logo.png");
import { hashHistory } from 'react-router';

export class TopBar extends React.Component <TopBarState, {}> {
    render() {
        var self = this;
        const  pathname  = hashHistory.getCurrentLocation().pathname
        const homeClass = pathname == "/" ? 'active' : '';

        const providerClass = pathname.match(/^\/login/) ? 'active' : '';
        const patientClass = pathname.match(/^\/patient/) ? 'active' : '';

        const defaultDropdownLabel = 'More'
        var dropDownLabel = defaultDropdownLabel
        var dropDownClass = ''
        var aboutClass = ''; 
        if (pathname.match(/^\/about/)){
            aboutClass = 'active';
            dropDownLabel = 'About Us'
        }
        var faqClass = ''
        if (pathname.match(/^\/faq/)){
            faqClass = 'active';
            dropDownLabel = 'F.A.Q.'
        }
        var tosClass = ''
        if (pathname.match(/^\/tos/)){
            tosClass = 'active';
            dropDownLabel = 'Terms and Conditions'
        }
        var privacyClass = ''
        if (pathname.match(/^\/privacy/)){
            privacyClass = 'active';
            dropDownLabel = 'Privacy'
        }
        var contactClass = ''
        if (pathname.match(/^\/contact/)){
            contactClass = 'active';
            dropDownLabel = 'Contact Us'
        }
        var dashClass = ''
        if (pathname.match(/^\/home/)){
            dashClass = 'active';
        }
        var userInfo = ''
        if (pathname.match(/^\/userinfo/)){
            userInfo = 'active';
        }

        var loginButtons = (
        <ul className="nav navbar-nav navbar-right">
            <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
            <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
        </ul>);

        dropDownClass = dropDownLabel === defaultDropdownLabel? 'dropdown' : 'dropdown active';
    
        const dropDown = 
        <li className={dropDownClass}>
            <IndexLink to="/" 
                className="dropdown-toggle" 
                data-toggle="dropdown" 
                role="button" 
                aria-haspopup="true" 
                aria-expanded="false"> {dropDownLabel} 
                <span className="caret"></span>
            </IndexLink>
            <ul className="dropdown-menu">
                <li className={aboutClass}><Link to="/about">About Us</Link></li>
                <li className={faqClass}><Link to="/faq">F.A.Q.</Link></li>
                <li role="separator" className="divider"></li>
                <li className={tosClass}><Link to="/tos">Terms and Conditions</Link></li>
                <li className={privacyClass}><Link to="/privacy">Privacy Policy</Link></li>
                <li className={contactClass}><Link to="/contact">Contact Us</Link></li>
            </ul>
        </li>

        const mainMenu = 
        <ul className="nav navbar-nav">
            <li className={homeClass}>
                <IndexLink to="/">Home</IndexLink>
            </li>
            {dropDown}
        </ul>

        const authenticatedMenu = (
        <ul className="nav navbar-nav">
            <li className={dashClass}>
                <IndexLink to="/home">Dashboard</IndexLink>
            </li>
            <li className={userInfo}>
                <IndexLink to ="/userinfo">User Info</IndexLink>
            </li>
        </ul>
        )

        return (
            <nav className="navbar navbar-fixed-top navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span> 
                        </button>
                        <a className="navbar-brand" href="#">
                            <img alt="Bites" src={logoImage} className="logoImage"/>
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="myNavbar">
                        {/* Main menu */}
                        {mainMenu}
                        {/* Right navbar */}
                        {/* loginButtons */}
                    </div>
                </div>
            </nav>
        )
    }
}
export default TopBar