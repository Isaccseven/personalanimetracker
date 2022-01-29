import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Auth0Provider} from "@auth0/auth0-react";
import {Provider} from "react-redux";

ReactDOM.render(
    <Auth0Provider
        domain="isaccseven.eu.auth0.com"
        clientId="QajI9bYodNgtB5qlqVLZ8V88M3OXXnM9"
        redirectUri={window.location.origin}
    >
        <Provider store={store}>
            <App/>
        </Provider>
    </Auth0Provider>,
    document.getElementById('root')
)
