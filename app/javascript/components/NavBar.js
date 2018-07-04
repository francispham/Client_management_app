import React from "react";
import { NavLink as RRNavLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


class NavBar extends React.Component {
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
      <div>
           <Navbar className="fixed-top navbar-default" light expand="md">
             <NavbarBrand activeClassName="active" tag={RRNavLink} to="/">
                <img src={require('../../assets/images/logo.png')} style={{height: "70px"}} />
             </NavbarBrand>
             <NavbarToggler onClick={this.toggle} />
             <Collapse isOpen={this.state.isOpen} navbar>
               <Nav className="ml-auto" navbar>
                 <NavItem>
                   <NavLink activeClassName="active" tag={RRNavLink} to="/">HOME</NavLink>
                 </NavItem>
                 <UncontrolledDropdown nav inNavbar>
                   <DropdownToggle nav caret>
                       SERVICES
                   </DropdownToggle>
                   <DropdownMenu right>
                     <DropdownItem>
                       <NavLink activeClassName="active" tag={RRNavLink} to="/Skincare">SKINCARE</NavLink>
                     </DropdownItem>
                     <DropdownItem>
                       <NavLink activeClassName="active" tag={RRNavLink} to="/LaserHairRemoval">PERMANENT LASER HAIR REMOVAL</NavLink>
                     </DropdownItem>
                     <DropdownItem>
                       <NavLink activeClassName="active" tag={RRNavLink} to="/OrganicTeethWhitening">ORGANIC TEETH WHITENING</NavLink>
                     </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>NEW SERVICES!!!</DropdownItem>
                   </DropdownMenu>
                 </UncontrolledDropdown>
                 <NavItem>
                   <NavLink activeClassName="active" tag={RRNavLink} to="/LatestNews">LASTEST NEWS</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink activeClassName="active" tag={RRNavLink} to="/About/">ABOUT US</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink activeClassName="active" tag={RRNavLink} to="/FindUs/">FIND US</NavLink>
                 </NavItem>
               </Nav>
             </Collapse>
           </Navbar>
         </div>
    );
  }
}

export { NavBar };
