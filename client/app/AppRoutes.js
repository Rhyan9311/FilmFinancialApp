import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import InvPrefForm from "../features/investmentPreferences/InvPrefForm";
// import AllFilmmakers from "../features/filmmaker/AllFilmmakers";
// import Filmmaker from "../features/filmmaker/filmmaker";
// import { fetchAllFilmmakersAsync } from "../features/filmmaker/allFilmmakers";
// import { fetchSingleFilmmakerAsync } from "../features/filmmaker/filmmaker";
import { me } from "./store";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
    // dispatch(fetchAllFilmmakersAsync());
    // dispatch(fetchSingleFilmmakerAsync());
  }, [dispatch]);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/investmentPreferences" element={<InvPrefForm />} />
          {/* <Route path="/filmmakers" element={<AllFilmmakers />} /> */}
          {/* <Route path="/filmmakers/:id" element={<Filmmaker />} /> */}
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
