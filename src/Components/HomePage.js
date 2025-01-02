import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HomePage.css'; // Optional: Place CSS styles here if needed

const HomePage = () => {
  const [data, setData] = useState({
    petrolstock: 0,
    petroldensity: 0,
    petrolrate: 0,
    dieselstock: 0,
    dieseldensity: 0,
    dieselrate: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload(); 
    }, 30000); 
   return () => clearInterval(interval);
  }, []); 
  // Fetch data from the FastAPI backend
  const fetchData = async () => {
    try {
      const response = await axios.get('/fuel-data'); 
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Update data using the FastAPI backend
  const updateData = async (newData) => {
    try {
      const response = await axios.post('/fuel-data', newData); // Update with your API URL
      setData(response.data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  return (
    <div className="container">
      <div className="header">
        <img src="jiologo.png" alt="Jio BP Logo" style={{ float: 'right', height: '150px' }} />
        <img src="petrol.png" alt="Jio BP Logo" style={{ float: 'left', height: '150px' }} />
      </div>
      <table className="pricing-table" style={{ height: '400px', border: 'none', borderRadius: '20px' }}>
        <thead>
          <tr>
            <th style={{ fontSize: 'xx-large' }}></th>
            <th style={{ fontSize: 'xx-large' }}>Stock (KL)</th>
            <th style={{ fontSize: 'xx-large' }}>Density (Kg/m³)</th>
            <th style={{ fontSize: 'xx-large' }}>Rate (₹/L)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ fontSize: 'xx-large' }}>Petrol</td>
            <td style={{ backgroundColor: '#000' }}>
              <span className="highlight">{data.petrolstock}</span>
            </td>
            <td style={{ backgroundColor: '#000' }}>
              <span className="highlight">{data.petroldensity}</span>
            </td>
            <td style={{ backgroundColor: '#000' }}>
              <span className="highlight">{data.petrolrate}</span>
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: 'xx-large' }}>Diesel</td>
            <td style={{ backgroundColor: '#000' }}>
              <span className="highlight">{data.dieselstock}</span>
            </td>
            <td style={{ backgroundColor: '#000' }}>
              <span className="highlight">{data.dieseldensity}</span>
            </td>
            <td style={{ backgroundColor: '#000' }}>
              <span className="highlight">{data.dieselrate}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="footer">
        <p style={{ backgroundColor: '#caf2cf', borderRadius: '20px', padding: '40px' }}>
          Reliance BP Mobility Limited<br />
          GSTIN: 27AAKCR8762R127<br />
          RBML Solutions India Limited<br />
          GSTIN: 27AAKCR8762R127<br />
          PESO Lic. No: P/WC/MH/14/5268(P161970)<br />
          Valid Upto: 31.12.2031
        </p>
        <p className="emergency" style={{ fontWeight: 'bold', color: '#308aff' }}>In case of emergency:</p>
        <p style={{ fontWeight: 'bold', color: '#ff0000' }}>Police: 100 | Fire: 101 | Hospital: 102</p>
        <div className="contacts">
          <p>
            <span style={{ fontWeight: 'bold', color: '#308aff' }}>Manager:</span> Ms Kavita Yadav, Mob: 9372419087<br />
            <span style={{ fontWeight: 'bold', color: '#308aff' }}>Operator:</span> Mr. Ilyas Mulla, Mob: 8369909191
          </p>
          <p>
            <span style={{ fontWeight: 'bold', color: '#308aff' }}>Internal Complaints Committee</span><br />
            rbml.diversity@gmail.jiobp.com<br />
            022-31158910
          </p>
          <p style={{ backgroundColor: '#caf2cf', borderRadius: '20px' }}>
            For feedback 1800-191-9023<br />
            customercare.petroleum@jiobp.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
