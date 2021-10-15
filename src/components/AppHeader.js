import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './AppHeader.css';



const AppHeader = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div >
      <Navbar color="Blue" light>
        <NavbarBrand href="/" className="app-header" >SUGGEST K-Series</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="app-header" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Jaopang">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div>
      </div>
    </div>
    
  );
}


export default AppHeader;






// import './AppHeader.css';

// function AppHeader() {
//     return (
//         <header className="app-header">
//           <h1  style={{color: "pine"}}>SUGGEST K-Series</h1>
//         </header>
//     )
// }

// export default AppHeader;