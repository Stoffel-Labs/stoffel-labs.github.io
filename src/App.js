import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <nav style={{
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem'
        }}>
          <Link to="/" style={{
            textDecoration: 'none',
            color: '#61dafb',
            fontSize: '1.1rem'
          }}>Home</Link>
          <Link to="/privacy" style={{
            textDecoration: 'none',
            color: '#61dafb',
            fontSize: '1.1rem'
          }}>Privacy Policy</Link>
          <Link to="/terms" style={{
            textDecoration: 'none',
            color: '#61dafb',
            fontSize: '1.1rem'
          }}>Terms & Conditions</Link>
        </nav>

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
