import React, { useState } from 'react';
import axios from 'axios';
import { Download, User, Building2, Mail, Phone, Globe, FileText } from 'lucide-react';

const VCardCreator = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    title: '',
    email: '',
    phone: '',
    url: '',
    note: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/api/vcard/generate', formData);
      if (response.data.success) {
        window.open(`http://localhost:3001${response.data.downloadUrl}`, '_blank');
      }
    } catch (error) {
      console.error('Error generating VCard:', error);
      alert('Failed to generate VCard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="vcard-container">
      <div className="vcard-header">
        <h1 style={{ fontWeight: 800, fontSize: '2rem' }}>VCard Creator</h1>
        <p style={{ color: '#666' }}>Generate professional contact files instantly.</p>
      </div>

      <div className="vcard-content">
        <form onSubmit={handleSubmit} className="vcard-form">
          <div className="form-grid">
            <div className="input-group">
              <label><User size={16} /> First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" />
            </div>
            <div className="input-group">
              <label><User size={16} /> Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" />
            </div>
            <div className="input-group">
              <label><Building2 size={16} /> Organization</label>
              <input type="text" name="organization" value={formData.organization} onChange={handleChange} placeholder="Agency Co." />
            </div>
            <div className="input-group">
              <label><FileText size={16} /> Job Title</label>
              <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Creative Director" />
            </div>
            <div className="input-group">
              <label><Mail size={16} /> Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
            </div>
            <div className="input-group">
              <label><Phone size={16} /> Phone</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 890" />
            </div>
            <div className="input-group full-width">
              <label><Globe size={16} /> Website</label>
              <input type="url" name="url" value={formData.url} onChange={handleChange} placeholder="https://example.com" />
            </div>
            <div className="input-group full-width">
              <label><FileText size={16} /> Note</label>
              <textarea name="note" value={formData.note} onChange={handleChange} placeholder="Additional info..." rows={3} />
            </div>
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Generating...' : <><Download size={20} /> Generate .VCF</>}
          </button>
        </form>

        <div className="vcard-preview">
          <div className="iphone-mockup">
            <div className="iphone-screen">
              <div className="iphone-header">
                <div className="iphone-time">9:41</div>
                <div className="iphone-status">...</div>
              </div>
              <div className="contact-card">
                <div className="contact-avatar">
                  {formData.firstName?.[0] || 'J'}{formData.lastName?.[0] || 'D'}
                </div>
                <h2 className="contact-name">
                  {formData.firstName || 'John'} {formData.lastName || 'Doe'}
                </h2>
                <p className="contact-org">{formData.organization || 'Organization'}</p>
                <div className="contact-actions">
                  <div className="action-item"><Phone size={20} /><span>call</span></div>
                  <div className="action-item"><Mail size={20} /><span>mail</span></div>
                  <div className="action-item"><Globe size={20} /><span>web</span></div>
                </div>
                <div className="contact-details">
                  <div className="detail-item">
                    <span className="detail-label">mobile</span>
                    <span className="detail-value text-blue">{formData.phone || '+1 (555) 000-0000'}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">email</span>
                    <span className="detail-value text-blue">{formData.email || 'hello@example.com'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .vcard-container { max-width: 1200px; margin: 0 auto; }
        .vcard-header { margin-bottom: 3rem; }
        .vcard-content { display: grid; grid-template-columns: 1fr 400px; gap: 4rem; }
        .vcard-form { background: white; padding: 2.5rem; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
        .input-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .input-group.full-width { grid-column: span 2; }
        .input-group label { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; font-weight: 600; color: #444; }
        .input-group input, .input-group textarea {
          padding: 0.8rem 1rem;
          border: 1px solid #ddd;
          border-radius: 10px;
          font-size: 1rem;
          transition: border-color 0.2s;
        }
        .input-group input:focus { outline: none; border-color: var(--blue); }
        .submit-btn {
          margin-top: 2rem;
          width: 100%;
          background: var(--blue);
          color: white;
          padding: 1rem;
          border-radius: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-size: 1.1rem;
          transition: transform 0.2s;
        }
        .submit-btn:hover { transform: translateY(-2px); }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        /* iPhone Mockup */
        .iphone-mockup {
          width: 320px;
          height: 650px;
          background: #1a1a1a;
          border-radius: 50px;
          padding: 12px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          position: sticky;
          top: 2rem;
          margin: 0 auto;
        }
        .iphone-screen {
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 40px;
          overflow: hidden;
          position: relative;
        }
        .iphone-header {
          height: 44px;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          font-weight: 600;
        }
        .contact-card { padding: 2rem 1.5rem; text-align: center; }
        .contact-avatar {
          width: 90px;
          height: 90px;
          background: #eee;
          border-radius: 50%;
          margin: 0 auto 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: 600;
          color: #888;
        }
        .contact-name { font-size: 1.5rem; font-weight: 700; margin-bottom: 0.25rem; }
        .contact-org { color: #666; font-size: 0.9rem; margin-bottom: 1.5rem; }
        .contact-actions { display: flex; justify-content: space-around; margin-bottom: 2rem; }
        .action-item { display: flex; flex-direction: column; align-items: center; gap: 0.4rem; color: var(--blue); }
        .action-item span { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; }
        .contact-details { text-align: left; background: #f8f8f8; border-radius: 15px; padding: 1rem; }
        .detail-item { padding: 0.75rem 0; border-bottom: 1px solid #eee; }
        .detail-item:last-child { border-bottom: none; }
        .detail-label { display: block; font-size: 0.75rem; color: #888; margin-bottom: 0.2rem; }
        .detail-value { font-size: 0.95rem; font-weight: 500; }
      `}</style>
    </div>
  );
};

export default VCardCreator;
