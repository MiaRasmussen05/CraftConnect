import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      // console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active} to="/posts/create"
    >
      <i className="far fa-plus-square"></i>Add post
    </NavLink>
  );
  const loggedInIcons = (
    <>
      <NavLink
        className={`${styles.NavLink} d-md-none`}
        to={`/profiles/${currentUser?.profile_id}`}
      ><i className="fas fa-user"></i> Profiles
      </NavLink>
      <NavLink className={`${styles.NavLink} d-md-none`}
        activeClassName={styles.Active} to="/feed"
      >
        <i className="fas fa-stream"></i>Feed
      </NavLink>
      <NavLink
        className={`${styles.NavLink} d-md-none`}
        activeClassName={styles.Active} to="/liked"
      >
        <i className="fas fa-heart"></i>Liked
      </NavLink>
      <NavLink
        className={`${styles.NavLink} d-md-none`}
        activeClassName={styles.Active} to="/tasks"
      >
        <i className="fas fa-list-ul"></i>Tasks
      </NavLink>
      <NavLink
        className={`${styles.NavLink} d-md-none`}
        activeClassName={styles.Active} to="/events"
      >
        <i className="fas fa-calendar-alt"></i>Events
      </NavLink>
      <NavDropdown.Divider />
      <NavLink className={`${styles.NavLink} d-md-none mt-5`} to="/" onClick={handleSignOut}>
        <i className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>

      <NavDropdown title={<Avatar src={currentUser?.profile_image} text="Profile" height={40} />} className="d-none d-md-block" id="basic-nav-dropdown">
        <NavDropdown.Item className={styles.NavLink}
        href={`/profiles/${currentUser?.profile_id}`}><i className="fas fa-user"></i> Profile</NavDropdown.Item>
        <NavDropdown.Item className={styles.NavLink}
        activeClassName={styles.Active} href="/feed"><i className="fas fa-stream"></i> Feed</NavDropdown.Item>
        <NavDropdown.Item className={styles.NavLink}
        activeClassName={styles.Active} href="/liked"><i className="fas fa-heart"></i> Liked</NavDropdown.Item>
        <NavDropdown.Item className={styles.NavLink}
        activeClassName={styles.Active} href="/events"><i className="fas fa-calendar-alt"></i> Events</NavDropdown.Item>
        <NavDropdown.Item className={styles.NavLink}
        activeClassName={styles.Active} href="/tasks"><i className="fas fa-list-ul"></i> Ideas</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item className={`${styles.NavLink} mt-5`}>
          <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
            <i className="fas fa-sign-out-alt"></i>Sign out
          </NavLink>
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
  const loggedOutIcons = (
    <>
      <NavLink to="/signin" className={`${styles.NavLink} pt-2 `} 
        activeClassName={styles.Active}>
        <i className='fas fa-sign-in-alt'></i>Sign in
      </NavLink>
      <NavLink to="/signup" className={`${styles.NavLink} pt-2 `} 
        activeClassName={styles.Active}>
        <i className='fas fa-user-plus'></i>Sign up
      </NavLink>
    </>
  );
  
  return (
    <Navbar expanded={expanded} className={`${styles.NavBar} pb-1`}
      expand="md" fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt='logo' height='75' />Craft|Hub
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle ref={ref} onClick={() => 
          setExpanded(!expanded)} aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <NavLink to="/" exact activeClassName={styles.Active} className="pt-2">
              <i className='fas fa-home'></i>Home
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar