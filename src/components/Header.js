import React from 'react'
import {Link} from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>
        {/*<nav>*/}
        {/*<ul>*/}
        {/*<li><Link to='/'>Home</Link></li>*/}
        {/*<li><Link to='/roster'>Roster</Link></li>*/}
        {/*<li><Link to='/schedule'>Schedule</Link></li>*/}
        {/*</ul>*/}
        {/*</nav>*/}

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/*<a className="navbar-brand" href="#">Navbar</a>*/}
            <Link className="navbar-brand" to='/'>ThanksRouter</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
                    aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        {/*<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        {/*<a className="nav-link" href="#">Features</a>*/}
                        <Link className="nav-link" to='/roster'>Roster</Link>
                    </li>
                    <li className="nav-item">
                        {/*<a className="nav-link" href="#">Pricing</a>*/}
                        {/*<div className="nav-link">*/}
                        {/*<Link to='/schedule'>Schedule</Link>*/}
                        {/*</div>*/}
                        <Link className="nav-link" to='/schedule'>Schedule</Link>
                    </li>
                    {/*<li className="nav-item">*/}
                        {/*<a className="nav-link" href="#">About</a>*/}
                    {/*</li>*/}
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                    {/*</input>*/}
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </header>
)

export default Header
