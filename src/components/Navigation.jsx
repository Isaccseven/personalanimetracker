import React from 'react';

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
                    <form className="form-check">
                        <button className="btn btn-outline-primary bg-white text-primary mx-2" type="submit">Login</button>
                        <button className="btn btn-outline-primary bg-white text-primary mx-2" type="submit">Register</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
