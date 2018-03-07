import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import SearchForm from './SearchForm'
import NavPiece from "./NavPiece";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

const BootstrapHeader = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/*<a className="navbar-brand" href="#">Navbar</a>*/}
      <Link className="navbar-brand" to='/'>BootstrapHeader</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
              aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/*<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
            <Link to='/'>Home</Link>
            {/*<Link className="nav-link" to='/'>Home</Link>*/}
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
            <Link className="nav-link" to='/sched'>Sched</Link>
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


class OldReactStrapHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="inverse" dark expand="md">
        <NavbarBrand href="/">ReactStrapHeader</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <NavItem active={true}>
              {/*<Link to='roster'>*/}
              <NavLink tag={Link} to='/query'>
                Query Page
              </NavLink>
              {/*</Link>*/}
            </NavItem>

            <NavItem>
              {/*<NavLink href="/components/">Components</NavLink>*/}
              {/*<Link className="nav-link" to='roster'>Roster</Link>*/}
              <Link to='roster'>
                <NavLink>
                  Roster
                </NavLink>
              </Link>
            </NavItem>

            <NavItem>
              <Link to='about'><NavLink>About</NavLink></Link>
            </NavItem>
            <NavItem>
              {/*<NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>*/}
              <Link to='/schedule'>
                <NavLink>
                  Schedule
                </NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>

        <SearchForm/>

      </Navbar>
    )
  }
}


class OkReactStrapHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="faded" dark expand="md">
        <NavbarBrand href="/">ReactStrapHeader</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>

            {/*<NavItem active={true}>*/}
            <NavItem>
              <NavLink tag={Link} to='/query'>
                Query Page
              </NavLink>
            </NavItem>

            <NavPiece to='/query' text="Query Page"/>

            <NavItem>
              <NavLink tag={Link} to='/roster'>
                Roster
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to='/about'>
                About
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to='/schedule'>
                Schedule
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>

        <SearchForm/>

      </Navbar>
    )
  }
}


class ReactStrapHeader extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="faded" dark expand="md">
        <NavbarBrand href="/">ReactStrapHeader</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <NavPiece to='/query' text="Query Page"/>
            <NavPiece to='/roster' text="Roster Page"/>
            <NavPiece to='/about' text="About"/>
            <NavPiece to='/schedule' text="Schedule"/>

          </Nav>
        </Collapse>

        <SearchForm/>

      </Navbar>
    )
  }
}

export {Header}
export {BootstrapHeader}
export {OldReactStrapHeader}
export {OkReactStrapHeader}
export default ReactStrapHeader
