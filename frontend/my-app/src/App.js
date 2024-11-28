import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvoiceList from './components/InvoiceList';
import CreateInvoice from './components/CreateInvoice';
import EditInvoice from './components/EditInvoice';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<InvoiceList />} />
          <Route path="/create" element={<CreateInvoice />} />
          <Route path="/edit/:id" element={<EditInvoice />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
