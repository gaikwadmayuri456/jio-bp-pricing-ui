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
    manager: "Ms. Kavita Yadav",
    operator: " Mr. Ilyas Mulla",
    managerconatct: "9372419087",
    operatorcontact: "8369909191",
    pesono: "P/WC/MH/14/5268(P161970)",
    gstnoreliancebp: "27AAHCR2546N2ZV",
    gstvalidity: "31.12.2031",
    gstnorbml: "27AAKCR8762R127"
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
  <div className="header" style={{ position: 'relative', height: '15%' }}>
    <div
      style={{
        backgroundColor: '#53d9db',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '60%',
        zIndex: 2,
      }}
    ></div>
    <div
      style={{
        backgroundColor: '#ff9900',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    ></div>
    {/* Image */}
    <img
      style={{
        position: 'absolute',
        top: '50%',
        left: '72%',
        transform: 'translate(-50%, -50%)',
        zIndex: 3,
      }}
      src="jiologo.png"
      alt="Jio BP Logo"
    />
  </div>

  <table className="pricing-table">
    <thead>
      <tr>
        <th></th>
        <th
          style={{
            color: '#f4f4f4',
            textAlign: 'center',
            backgroundColor: '#53d9db',
            borderWidth: 10,
            borderColor: '#ffffff',
            margin: 10,
          }}
        >
          Petrol
        </th>
        <th
          style={{
            color: '#f4f4f4',
            textAlign: 'center',
            backgroundColor: '#2d2afc',
            borderWidth: 10,
            borderColor: '#ffffff',
            margin: 10,
          }}
        >
          Diesel
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ fontSize: '2rem' }}>Stock (KL)</td>
        <td
          style={{
            backgroundColor: '#000',
            borderWidth: 10,
            borderColor: '#ffffff',
            margin: 10,
          }}
        >
          <span className="highlight" id="petrolstock">
            {fuelData.petrolstock}
          </span>
        </td>
        <td
          style={{
            backgroundColor: '#000',
            borderWidth: 10,
            borderColor: '#ffffff',
          }}
        >
          <span className="highlight" id="dieselstock">
            {fuelData.dieselstock}
          </span>
        </td>
      </tr>
      <tr>
        <td style={{ fontSize: '2rem' }}>
          Density (Kg/m<sup>3</sup>)
        </td>
        <td
          style={{
            backgroundColor: '#000',
            borderWidth: 10,
            borderColor: '#ffffff',
          }}
        >
          <span className="highlight" id="petroldensity">
            {fuelData.petroldensity}
          </span>
        </td>
        <td
          style={{
            backgroundColor: '#000',
            borderWidth: 10,
            borderColor: '#ffffff',
          }}
        >
          <span className="highlight" id="dieseldensity">
            {fuelData.dieseldensity}
          </span>
        </td>
      </tr>
      <tr>
        <td style={{ fontSize: '2rem' }}>Rate (₹/L)</td>
        <td
          style={{
            backgroundColor: '#000',
            borderWidth: 10,
            borderColor: '#ffffff',
          }}
        >
          <span className="highlight" id="petrolrate">
            {fuelData.petrolrate}
          </span>
        </td>
        <td
          style={{
            backgroundColor: '#000',
            borderWidth: 10,
            borderColor: '#ffffff',
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
        backgroundColor: '#53d9db',
        // padding: '20px 0 20px 60px',
        color: '#FFFFFF'
        // borderRadius: 10,
      }}
    >
      <span style={{ fontWeight: 'bold', color: '#FFFFFF' }}>
        Reliance BP Mobility Limited
      </span>
      <br />
      <span style={{ color: '#004aad' }}>GSTIN: {fuelData.gstnoreliancebp}</span>
      <br />
      <span style={{ fontWeight: 'bold' ,color: '#FFFFFF'}}>RBML Solutions India Limited</span>
      <br />
      <span style={{ color: '#004aad' }}>GSTIN: {fuelData.gstnorbml}</span>
      <br />
      PESO Lic. No: {fuelData.pesono}
      <br />
      Valid Upto: {fuelData.gstvalidity}
    </p>
    <p className="emergency">
      In case of emergency:
      <br />
      <span style={{ color: 'red', fontWeight: 'bold' }}>
        Police: 100 | Fire: 101 | Hospital: 102
      </span>
    </p>
    <div className="contacts">
      <p>
        <span style={{ color: '#FFFFFF' }}>
          Name and Contact No. Area Manager
        </span>
        <br />
        {fuelData.manager}, Mob: {fuelData.managerconatct}
        <br />
        <span style={{ color: '#000' }}>
          Name and Contact No. Area Operator
        </span>
        <br />
        {fuelData.operator}, Mob: {fuelData.operator}
      </p>
    </div>
    <p>
      <span style={{ color: '#000000' }}>Internal Complaints Committee</span>
      <span style={{ color: '#ff0000' }}>
        <br />
        rbml.diversity@gmail.jiobp.com
        <br />
        Contact: 022-31158910
      </span>
    </p>
    <p
      style={{
        backgroundColor: '#53d9db',
        color: '#FFFFFF',
        // margin: '10px 10px 10px 10px',
        padding: '20px 0 20px 60px',
      }}
    >
      For feedback: 1800-191-9023
      <br />
      Customercare.petroleum@jiobp.com
    </p>
  </footer>
</div> </>
  );
};

export default HomePage;
