import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createInvoice } from '../api';

function CreateInvoice() {
  const [invoice, setInvoice] = useState({
    invoice_number: '',
    customer_name: '',
    date: '',
    details: [],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createInvoice(invoice).then(() => {
      navigate('/');
    });
  };

  return (
    <div>
      <h1>Create Invoice</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="invoice_number"
          placeholder="Invoice Number"
          value={invoice.invoice_number}
          onChange={handleChange}
        />
        <input
          type="text"
          name="customer_name"
          placeholder="Customer Name"
          value={invoice.customer_name}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={invoice.date}
          onChange={handleChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateInvoice;
