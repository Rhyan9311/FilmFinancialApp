import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setInvestmentPreferences } from "./invPrefSlice";

const InvPrefForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    age: "",
    riskTolerance: "",
    investmentAmount: "",
    investmentLength: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setInvestmentPreferences(formData));
    setFormData({
      age: "",
      riskTolerance: "",
      investmentAmount: "",
      investmentLength: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Investment Preferences</h2>
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        onChange={handleChange}
        value={formData.age}
      />

      <label htmlFor="riskTolerance">Risk Tolerance:</label>
      <select
        id="riskTolerance"
        name="riskTolerance"
        value={formData.riskTolerance}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <label htmlFor="investmentAmount">Investment Amount:</label>
      <input
        type="number"
        id="investmentAmount"
        name="investmentAmount"
        onChange={handleChange}
        value={formData.investmentAmount}
      />

      <label htmlFor="investmentLength">Investment Length (in years):</label>
      <input
        type="number"
        id="investmentLength"
        name="investmentLength"
        onChange={handleChange}
        value={formData.investmentLength}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default InvPrefForm;
