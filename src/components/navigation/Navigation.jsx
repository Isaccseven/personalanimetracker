import React from 'react';
import AuthHandler from "../auth/AuthHandler";


const Navigation = () => {

    return (
        <nav className="navbar navbar-expand-lg justify-content-evenly navbar-light bg-primary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">
                                <h3>Home</h3>
                            </a>
                        </li>
                    </ul>
                    <AuthHandler/>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
