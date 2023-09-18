"use client";

import Link from "next/link";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function NavBar() {
   return (
      <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
         <Container>
            <Navbar.Brand as={Link} href="/">
               Next JS Image Gallery
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
               <Nav>
                  <Nav.Link as={Link} href="/staticrenderingpage">
                     StaticRendering
                  </Nav.Link>
                  <Nav.Link as={Link} href="/dynamicrenderingpage">
                     DynamicRendering
                  </Nav.Link>
                  <Nav.Link as={Link} href="/staticrenderingpage">
                     IncrementalStaticRendering
                  </Nav.Link>
                  <NavDropdown title="Topics" id="topics-dropdown">
                     <NavDropdown.Item as={Link} href="/topics/nba">
                        NBA
                     </NavDropdown.Item>
                     <NavDropdown.Item as={Link} href="/topics/space">
                        Space
                     </NavDropdown.Item>
                     <NavDropdown.Item as={Link} href="/topics/coding">
                        Coding
                     </NavDropdown.Item>
                  </NavDropdown>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
}
