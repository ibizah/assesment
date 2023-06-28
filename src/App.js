import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import axios from 'axios';
 function MinimumAbsDifferenceForm() {
  const [nums, setNums] = useState("");
  const [result, setResult] = useState(null);
   const handleInputChange = (event) => {
    setNums(event.target.value);
  };
   function minimumAbsDifference(nums) {
    const n = nums.length / 2;
    const sum = nums.reduce((acc, num) => acc + num, 0);
     const dp = new Array(n + 1)
      .fill(null)
      .map(() => new Array(sum + 1).fill(false));
    dp[0][0] = true;
     for (let i = 0; i < nums.length; i++) {
      for (let j = n; j >= 1; j--) {
        for (let k = sum; k >= nums[i]; k--) {
          dp[j][k] = dp[j][k] || dp[j - 1][k - nums[i]];
        }
      }
    }
     let minDiff = Infinity;
    for (let k = sum / 2; k >= 0; k--) {
      if (dp[n][k]) {
        minDiff = sum - 2 * k;
        break;
      }
    }
     return minDiff;
  }
   const handleSubmit = async (event) => {
    event.preventDefault();
    const parsedNums = nums.split(",").map((num) => parseInt(num.trim(), 10));
    const minDiff = minimumAbsDifference(parsedNums);
    setResult(minDiff);
     try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/examples`, {
        minDiff: minDiff,
      });
      console.log('minDiff value stored in the database');
    } catch (error) {
      console.error('Error storing minDiff value:', error);
    }
  };
   return ( 
    <div className="form-container">
      <h4>Ibrahim Izah's Assessment</h4>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="form-title">Minimum Absolute Difference Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Enter the numbers (comma-separated):
          <input
            type="text"
            value={nums}
            onChange={handleInputChange}
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">
          Calculate
        </button>
      </form>
      {result !== null && (
        <p className="form-result">
          The minimum absolute difference is: {result}
        </p>
      )}
    </div>
  );
}
 export default MinimumAbsDifferenceForm;