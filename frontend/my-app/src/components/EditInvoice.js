import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchInvoice, updateInvoice } from '../api';

function EditInvoice() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState({
    invoice_number: '',
    customer_name: '',
    date: '',
    details: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchInvoice(id).then((res) => setInvoice(res.data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInvoice(id, invoice).then(() => {
      navigate('/');
    });
  };

  return (
    <div>
      <h1>Edit Invoice</h1>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditInvoice;
