import React, {useContext} from 'react';
import {AuthContext} from "../middleware/auth";

/**
 * @author João Ponte
 * @returns {JSX.Element}
 * @constructor
 */
export default function Logoutbutton() {
    const {authenticated, logout} = useContext(AuthContext);
    const handleLogout = async e => {
        e.preventDefault();
        await logout();
    }
    if (authenticated)
        return (
            <button
                className="btn btn-danger btn-block"
                onClick={handleLogout}>
                Log Out
            </button>
        );
}
