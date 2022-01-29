import React from 'react';
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import {useAuth0} from "@auth0/auth0-react";

const AuthHandler = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();

    return (
        <>
            {isLoading && (
                <p className="placeholder-glow">
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                </p>
            )}
            {isAuthenticated && (
                <div className="d-flex justify-content-center align-items-center">
                    <img src={user.picture} width={40} className="rounded-circle m-1" alt={user.name}/>
                    <h4 className="m-1 text-white">{user.name}</h4>
                    <form className="form-check">
                        <LogoutButton/>
                    </form>
                </div>
            )}
            {!isAuthenticated && (
                <LoginButton/>
            )}
        </>
    );
};

export default AuthHandler;
