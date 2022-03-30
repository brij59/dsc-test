import React, { useState } from "react";
import { Navbar, Nav, Form, Container } from 'react-bootstrap'
// import { Link } from "react-router-dom";
import { useHistory, Link } from "react-router-dom";
import CustomButtons from "../CustomButtons/Button";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ROUTES } from "../../constants/routes";
import logo from '../../assets/images/logo/dsc-logo1.png';

const useStyles = makeStyles((theme: any) => ({
  header: {
    backgroundColor: '#ededed !important',
    boxShadow: '0 0 0.2em #dddddd',
  },
  navLinksStyle: {
    padding: "0.5rem",
    color: "#0000008c",
    textDecoration: "none"
  },
  navLinkHoverEffect: {
    "&:hover": {
      backgroundColor: "transparent",
      color: "#00a651",
    }
  },

}));

function Header() {

  const history = useHistory();
  const classes = useStyles();

  return (
    <Navbar bg="light" className={classes.header} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/project/dsc/" ><img src={logo} /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="Navbar">
            <Link className={`nav-links ${classes.navLinksStyle} ${classes.navLinkHoverEffect}`} to={ROUTES.home}>Home</Link>
            <Link className={`nav-links ${classes.navLinksStyle} ${classes.navLinkHoverEffect}`} to={ROUTES.home}>Featurs</Link>
            <Link className={`nav-links ${classes.navLinksStyle} ${classes.navLinkHoverEffect}`} to={ROUTES.home}>Plans</Link>
            <Link className={`nav-links ${classes.navLinksStyle} ${classes.navLinkHoverEffect}`} to={ROUTES.home}>Download</Link>
          </Nav>
          <Form className="d-flex">
            <CustomButtons.ColorButton onClick={() => history.push('get-started')}>Get started</CustomButtons.ColorButton>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
export default Header;
