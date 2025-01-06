import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
  const [fuelData, setFuelData] = useState({
    petrolstock: 50,
    petroldensity: 0.8,
    petrolrate: 105,
    dieselstock: 30,
    dieseldensity: 0.8,
    dieselrate: 90,
  });

  useEffect(() => {
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
    <>
      <div className="container">
        <div className="header">
          <img
            src="petrol.png"
            alt="Petrol Icon"
            style={{ maxWidth: "38%", height: "auto" }}
          />
          <img src="jiologo.png" alt="Jio BP Logo" />
        </div>
        <table className="pricing-table">
          <thead>
            <tr>
              <th></th>
              <th>Stock (KL)</th>
              <th>
                Density (Kg/m<sup>3</sup>)
              </th>
              <th>Rate (₹/L)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontSize: "2rem" }}>Petrol</td>
              <td
                style={{
                  backgroundColor: "#000",
                  borderRadius: "30px",
                  borderWidth: "10px",
                  borderColor: "#ffffff",
                  margin: "10px",
                }}
              >
                <span className="highlight" id="petrolstock">
                  {fuelData.petrolstock}
                </span>
              </td>
              <td
                style={{
                  backgroundColor: "#000",
                  borderRadius: "30px",
                  borderWidth: "10px",
                  borderColor: "#ffffff",
                }}
              >
                <span className="highlight" id="petroldensity">
                  {fuelData.petroldensity}
                </span>
              </td>
              <td
                style={{
                  backgroundColor: "#000",
                  borderRadius: "30px",
                  borderWidth: "10px",
                  borderColor: "#ffffff",
                }}
              >
                <span className="highlight" id="petrolrate">
                  {fuelData.petrolrate}
                </span>
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "2rem" }}>Diesel</td>
              <td
                style={{
                  backgroundColor: "#000",
                  borderRadius: "30px",
                  borderWidth: "10px",
                  borderColor: "#ffffff",
                }}
              >
                <span className="highlight" id="dieselstock">
                  {fuelData.dieselstock}
                </span>
              </td>
              <td
                style={{
                  backgroundColor: "#000",
                  borderRadius: "30px",
                  borderWidth: "10px",
                  borderColor: "#ffffff",
                }}
              >
                <span className="highlight" id="dieseldensity">
                  {fuelData.dieseldensity}
                </span>
              </td>
              <td
                style={{
                  backgroundColor: "#000",
                  borderRadius: "30px",
                  borderWidth: "10px",
                  borderColor: "#ffffff",
                }}
              >
                <span className="highlight" id="dieselrate">
                  {fuelData.dieselrate}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <footer className="footer">
          <p
            style={{
              backgroundColor: "#caf2cf",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            Reliance BP Mobility Limited
            <br />
            <span style={{ color: "#004aad" }}>GSTIN: {fuelData.gstno}</span>
            <br />
            <span>RBML Solutions India Limited</span>
            <br />
            <span style={{ color: "#004aad" }}>GSTIN: {fuelData.gstno}</span>
            <br />
            PESO Lic. No: {fuelData.pesono}
            <br />
            Valid Upto: {fuelData.gstvalidity}
          </p>
          <p className="emergency">
            In case of emergency:
            <br />
            <span style={{ color: "red", fontWeight: "bold" }}>
              Police: 100 | Fire: 101 | Hospital: 102
            </span>
          </p>
          <div className="contacts">
            <div className="contact-column" style={{ paddingLeft: "100px" }}>
              <p>
                <span style={{ color: "#000" }}>Manager</span>
                <br />
                {fuelData.manager}
                <br />
                Mob: {fuelData.managerconatct}
              </p>
            </div>
            <div className="contact-column" style={{ paddingRight: "100px" }}>
              <p>
                <span style={{ color: "#000" }}>Operator</span>
                <br />
                {fuelData.operator}
                <br />
                Mob: {fuelData.operatorcontact}
              </p>
            </div>
          </div>
          <p>
            <span style={{ color: "#000000" }}>
              Internal Complaints Committee
            </span>
            <span style={{ color: "#ff0000" }}>
              <br />
              rbml.diversity@gmail.jiobp.com
              <br />
              Contact: 022-31158910
            </span>
          </p>
          <p
            style={{
              backgroundColor: "black",
              color: "white",
              margin: "10px",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            For feedback: 1800-191-9023
            <br />
            customercare.petroleum@jiobp.com
          </p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
