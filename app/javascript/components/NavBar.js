import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
             <NavbarBrand href="/">ST Medi Spa LOGO</NavbarBrand>
             <NavbarToggler onClick={this.toggle} />
             <Collapse isOpen={this.state.isOpen} navbar>
               <Nav className="ml-auto" navbar>
                 <NavItem>
                   <NavLink href="/HOME">HOME</NavLink>
                 </NavItem>
                 <UncontrolledDropdown nav inNavbar>
                   <DropdownToggle nav caret>
                     SERVICES
                   </DropdownToggle>
                   <DropdownMenu right>
                     <DropdownItem>
                       FACIAL
                     </DropdownItem>
                     <DropdownItem>
                       SKINCARE
                     </DropdownItem>
                     <DropdownItem divider />
                     <DropdownItem>
                       ORGANIC TEETH WHITENING
                     </DropdownItem>
                   </DropdownMenu>
                 </UncontrolledDropdown>
                 <NavItem>
                   <NavLink href="/Promotions">PROMOTIONS</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href="/About/">ABOUT</NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href="/FindUs/">FIND US</NavLink>
                 </NavItem>
               </Nav>
             </Collapse>
           </Navbar>
         </div>
    );
  }
}

export { NavBar };
