import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllFilmmakers } from "./allFilmmakersSlice";

const AllFilmmakers = () => {
  const dispatch = useDispatch();
  const { filmmakers, status } = useSelector((state) => state.allFilmmakers);

  useEffect(() => {
    dispatch(fetchAllFilmmakers());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>All Filmmakers</h1>
      <ul>
        {filmmakers.map((f) => (
          <li key={f.id}>
            <Link to={`/filmmaker/${f.id}`}>{f.fullName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllFilmmakers;
