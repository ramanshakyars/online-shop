import './App.css';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <Router>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <AppRoutes searchText={searchText} setSearchText={setSearchText} />
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;
