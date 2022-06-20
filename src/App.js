import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import FarmsList from './pages/FarmsList';
import FarmView from './pages/FarmView';
import Index from './pages/Index';
import Login from './pages/Login';

export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/farms" element={<FarmsList />}></Route>
          <Route path="/farm/:id" element={<FarmView />}></Route>
        </Routes>
      </Router>
    )
}