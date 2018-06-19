import React from "react";
import { NavLink as RRNavLink } from 'react-router-dom';
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
           <Navbar color="light" light expand="md">
             <NavbarBrand activeClassName="active" tag={RRNavLink} to="/">
                <img src={require('../../assets/images/logo.png')} style={{height: "40px"}} />
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
                       MEDICAL FACIALS & EXFOLIATIONS
                     </DropdownItem>
                     <DropdownItem>
                       IPL TREATMENT
                     </DropdownItem>
                     <DropdownItem>
                       PERMANENT LASER HAIR REMOVAL
                     </DropdownItem>
                     <DropdownItem>
                       SKIN REJUVENATION
                     </DropdownItem>
                     <DropdownItem divider />
                     <DropdownItem>
                       ORGANIC TEETH WHITENING
                     </DropdownItem>
                   </DropdownMenu>
                 </UncontrolledDropdown>
                 <NavItem>
                   <NavLink activeClassName="active" tag={RRNavLink} to="/Promotions">PROMOTIONS</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink activeClassName="active" tag={RRNavLink} to="/About/">ABOUT</NavLink>
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
