import logo from './logo.svg';
import './App.css';
import AppRoutes from '../src/routes/AppRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <div >
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
