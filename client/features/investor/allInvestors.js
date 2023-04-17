import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllInvestors } from "./allInvestorsSlice";
import Investor from "./investor";

const AllInvestors = () => {
  const dispatch = useDispatch();
  const investors = useSelector((state) => state.investor.investors);


  useEffect(() => {
    dispatch(fetchAllInvestors());
  }, [dispatch]);

return (
    <ul>
      <h1>All Investors</h1>
      {Array.isArray(investors) &&
        investors.map((investor) => (
          <li key={investor.id}>
            <Link to={`/investors/${investor.id}`}>
              <h3>{investor.name}</h3>
            </Link>
          </li>
        ))}
    </ul>
  );
};
export default AllInvestors;



