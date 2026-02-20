import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import VCardCreator from './pages/VCardCreator';
import { CreditCard, QrCode, Instagram, Mail } from 'lucide-react';

const Home = () => (
  <div className="home-container">
    <div className="home-header">
      <h1 style={{ fontWeight: 900, fontSize: '3rem' }}>STUDIO<span className="text-blue">TOOLBOX</span></h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1rem' }}>Premium agency tools for high-end digital workflows.</p>
    </div>
    
    <div className="tool-grid">
      <Link to="/vcard" className="tool-card">
        <div className="tool-icon bg-blue"><CreditCard color="white" size={32} /></div>
        <h3>VCard Creator</h3>
        <p>Generate professional .vcf files with iPhone preview.</p>
      </Link>
      <div className="tool-card disabled">
        <div className="tool-icon" style={{ background: '#eee' }}><QrCode color="#888" size={32} /></div>
        <h3>QR Generator</h3>
        <p>Coming soon: Vector SVG QR codes.</p>
      </div>
      <div className="tool-card disabled">
        <div className="tool-icon" style={{ background: '#eee' }}><Mail color="#888" size={32} /></div>
        <h3>Email Signature</h3>
        <p>Coming soon: Inline HTML snippets.</p>
      </div>
      <div className="tool-card disabled">
        <div className="tool-icon" style={{ background: '#eee' }}><Instagram color="#888" size={32} /></div>
        <h3>Insta Splitter</h3>
        <p>Coming soon: Lossless image slicing.</p>
      </div>
    </div>

    <style>{`
      .home-container { max-width: 1000px; padding: 2rem 0; }
      .home-header { margin-bottom: 4rem; }
      .tool-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; }
      .tool-card {
        background: white;
        padding: 2rem;
        border-radius: 24px;
        text-decoration: none;
        color: inherit;
        transition: all 0.3s ease;
        border: 1px solid transparent;
      }
      .tool-card:hover:not(.disabled) {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0,0,255,0.08);
        border-color: rgba(0,0,255,0.1);
      }
      .tool-icon {
        width: 64px;
        height: 64px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
      }
      .tool-card h3 { font-size: 1.25rem; margin-bottom: 0.5rem; font-weight: 700; }
      .tool-card p { color: #666; font-size: 0.95rem; line-height: 1.5; }
      .tool-card.disabled { opacity: 0.6; cursor: not-allowed; }
    `}</style>
  </div>
);

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vcard" element={<VCardCreator />} />
          {/* Other routes will be added as implemented */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
