import React, { useEffect, useState } from 'react';
import { fetchInvoices, deleteInvoice } from '../api';
import { Link } from 'react-router-dom';

function InvoiceList() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetchInvoices().then((res) => setInvoices(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteInvoice(id).then(() => {
      setInvoices(invoices.filter((invoice) => invoice.id !== id));
    });
  };

  return (
    <div>
      <h1>Invoices</h1>
      <Link to="/create">Create New Invoice</Link>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            {invoice.invoice_number} - {invoice.customer_name} - {invoice.date}
            <Link to={`/edit/${invoice.id}`}>Edit</Link>
            <button onClick={() => handleDelete(invoice.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceList;
