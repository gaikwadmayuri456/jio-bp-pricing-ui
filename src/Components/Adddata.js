import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Adddata.css";

const Adddata = () => {
  const [formData, setFormData] = useState({
    petrolstock: "",
    petroldensity: "",
    petrolrate: "",
    dieselstock: "",
    dieseldensity: "",
    dieselrate: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch initial data from the API
  useEffect(() => {
    const fetchFuelData = async () => {
      try {
        const response = await axios.get("/fuel-data");
        setFormData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching fuel data:", error);
        setLoading(false);
      }
    };

    fetchFuelData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/update-fuel-data", formData);
      alert("Fuel data updated successfully!");
    } catch (error) {
      console.error("Error updating fuel data:", error);
      alert("Failed to update fuel data.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form className="fuel-form" onSubmit={handleSubmit}>
      <h2>Update Fuel Data</h2>
      <div className="form-group">
        <label>Petrol Stock (KL):</label>
        <input
          type="number"
          name="petrolstock"
          value={formData.petrolstock}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Petrol Density (Kg/m³):</label>
        <input
          type="number"
          name="petroldensity"
          value={formData.petroldensity}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Petrol Rate (₹/L):</label>
        <input
          type="number"
          name="petrolrate"
          value={formData.petrolrate}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Diesel Stock (KL):</label>
        <input
          type="number"
          name="dieselstock"
          value={formData.dieselstock}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Diesel Density (Kg/m³):</label>
        <input
          type="number"
          name="dieseldensity"
          value={formData.dieseldensity}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Diesel Rate (₹/L):</label>
        <input
          type="number"
          name="dieselrate"
          value={formData.dieselrate}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Update Fuel Data</button>
    </form>
  );
};

export default Adddata;