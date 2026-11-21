import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ClassPage from "./pages/Class";
import StudentsPage from "./pages/Students";
import FinancePage from "./pages/Finance";
import StaffPage from "./pages/Staff";
import RegistrationPage from "./pages/Registration";

function App() {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <Sidebar />

        {/* Main content */}
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/class" element={<ClassPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/staff" element={<StaffPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;