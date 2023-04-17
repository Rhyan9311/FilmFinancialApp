import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Investor() {
  const [investor, setInvestor] = useState(null);
  const { investorId } = useParams();

  useEffect(() => {
    fetch(`/api/investors/${investorId}`)
      .then((res) => res.json())
      .then((data) => setInvestor(data))
      .catch((err) => console.error(err));
  }, [investorId]);

  if (!investor) {
    return <div>Loading...</div>;
  }

  const pastProjects = investor.Users.map((user) => (
    <li key={user.id}>{user.projectName}</li>
  ));

  return (
    <div>
      <h2>{investor.name}</h2>
      <p>Risk Tolerance: {investor.riskTolerance}</p>
      <p>Investment Amount: ${investor.investmentAmount}</p>
      <p>Investment Length: {investor.investmentLength} months</p>
      <h3>Past Projects</h3>
      <ul>
        {pastProjects.length ? pastProjects : <li>No past projects found.</li>}
      </ul>
      <Link to={`/investor/${investor.id}/edit`}>Edit Investor</Link>
    </div>
  );
}

export default Investor;
