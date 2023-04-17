import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <h1>Welcome To Filmvestor!</h1>
      <nav>
        {isLoggedIn ? (
          <div id="navbar" className="row">
            <NavLink to="/" className="active">
              Home
            </NavLink>
            &nbsp;
            <NavLink to="/investmentPreferences" className="active">
              Investment Preferences
            </NavLink>
            &nbsp;
            <NavLink to="/investors" className={"active"}>
              Investors
            </NavLink>
            &nbsp;
            <NavLink to="/filmmakers" className="active">
              Filmmakers
            </NavLink>
            &nbsp;
            {/* <NavLink to="/addStudentForm" className={"active"}>
              New Student
            </NavLink> */}
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
          </div>
        ) : (
          // <div>
          //   {/* The navbar will show these links after you log in */}
          //   <Link to="/">Home</Link>
          //   <Link to="/investmentPreferences">Investment Preferences</Link>
          // <button type="button" onClick={logoutAndRedirectHome}>
          //   Logout
          // </button>
          // </div>
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
