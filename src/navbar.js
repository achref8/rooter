  
import React from 'react';

import {  Link,withRouter } from "react-router-dom";


class Navbar extends React.Component {
    render() {

        return (
            <>
            <Link  to="/">home</Link>
            <Link  to="/profile">profile</Link>
            <Link  to="/contact">contact</Link>
            </>
        )
    }
}

export default withRouter(Navbar);