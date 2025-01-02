import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
  const [fuelData, setFuelData] = useState({
    petrolstock: 0,
    petroldensity: 0,
    petrolrate: 0,
    dieselstock: 0,
    dieseldensity: 0,
    dieselrate: 0,
  });

  useEffect(() => {
    // Fetch data from API
    const fetchFuelData = async () => {
      try {
        const response = await axios.get("fuel-data");
        setFuelData(response.data);
      } catch (error) {
        console.error("Error fetching fuel data:", error);
      }
    };

    fetchFuelData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload(); 
    }, 30000); 

    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="container">
      <div className="header">
        <img src="petrol.png" alt="Petrol Icon" />
        <img src="jiologo.png" alt="Jio BP Logo" />
      </div>
      <table className="pricing-table">
        <thead>
          <tr>
            <th></th>
            <th>Stock (KL)</th>
            <th>Density (Kg/m<sup>3</sup>)</th>
            <th>Rate (₹/L)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Petrol</td>
            <td>
              <span className="highlight">{fuelData.petrolstock}</span>
            </td>
            <td>
              <span className="highlight">{fuelData.petroldensity}</span>
            </td>
            <td>
              <span className="highlight">{fuelData.petrolrate}</span>
            </td>
          </tr>
          <tr>
            <td>Diesel</td>
            <td>
              <span className="highlight">{fuelData.dieselstock}</span>
            </td>
            <td>
              <span className="highlight">{fuelData.dieseldensity}</span>
            </td>
            <td>
              <span className="highlight">{fuelData.dieselrate}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="footer">
        <p>
          Reliance BP Mobility Limited
          <br />
          GSTIN: 27AAKCR8762R127
          <br />
          PESO Lic. No: P/WC/MH/14/5268(P161970)
          <br />
          Valid Upto: 31.12.2031
        </p>
        <p className="emergency">In case of emergency:</p>
        <p>
          Police: 100 | Fire: 101 | Hospital: 102
        </p>
        <div className="contacts">
          <p>
            Manager: Ms Kavita Yadav, Mob: 9372419087
            <br />
            Operator: Mr. Ilyas Mulla, Mob: 8369909191
          </p>
          <p>
            For feedback: 1800-191-9023
            <br />
            customercare.petroleum@jiobp.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
