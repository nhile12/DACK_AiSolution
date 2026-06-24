import { BrowserRouter, Routes, Route } from "react-router-dom";

import PurchaseRequest from "../pages/PurchaseRequest";
import Dashboard from "../pages/Dashboard";
import Approval from "../pages/Approval";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PurchaseRequest />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/approval" element={<Approval />} />
      </Routes>
    </BrowserRouter>
  );
}