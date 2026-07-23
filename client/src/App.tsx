import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./features/landing/LandingPage";
import LoginPage from "./features/auth/LoginPage";
import DashboardPage from "./features/dashboard/DashboardPage";
import StoreDrilldownPage from "./features/store-drilldown/StoreDrilldownPage";
import CostEntryPage from "./features/cost-entry/CostEntryPage";
import BalanceSheetPage from "./features/balance-sheet/BalanceSheetPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/store/:storeId" element={<StoreDrilldownPage />} />
        <Route path="/store/:storeId/costs" element={<CostEntryPage />} />
        <Route path="/balance-sheet" element={<BalanceSheetPage />} />
      </Routes>
    </BrowserRouter>
  );
}
