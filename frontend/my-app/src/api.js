import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/', // Ensure this matches your backend's URL
});

export default API;
export const fetchInvoices = () => API.get('invoices/');
export const fetchInvoice = (id) => API.get(`invoices/${id}/`);
export const createInvoice = (data) => API.post('invoices/', data);
export const updateInvoice = (id, data) => API.put(`invoices/${id}/`, data);
export const deleteInvoice = (id) => API.delete(`invoices/${id}/`);
