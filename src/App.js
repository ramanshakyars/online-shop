import './App.css';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
