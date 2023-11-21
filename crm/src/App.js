import { Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';
import Navbar from './component/Navbar';
import AddCustomer from './component/addcust';
import Custdetail from './component/custdetail';
import { addCustomer, getCustomers, deleteCustomer } from './component/userdb';
import React, { useState, useEffect } from 'react';
import Terms from './component/Terms';




function App() {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const storedCustomers = getCustomers();
    setCustomers(storedCustomers);
  }, []);

  const handleAddCustomer = (customerData) => {
    const updatedCustomers = addCustomer(customerData);
    setCustomers(updatedCustomers);
  };

  const handleDeleteCustomer = (index) => {
    const updatedCustomers = deleteCustomer(index);
    setCustomers(updatedCustomers);
  };



  return (
    <div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/add-customer" element={<AddCustomer onAddCustomer={handleAddCustomer} />} />
        <Route path="/customer-details" element={<Custdetail  customers={customers} onDeleteCustomer={handleDeleteCustomer} />} />

      </Routes>
    </div>
  );
}

export default App;