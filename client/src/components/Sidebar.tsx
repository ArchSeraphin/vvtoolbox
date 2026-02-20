import { NavLink } from 'react-router-dom';
import { CreditCard, QrCode, Instagram, Mail, LayoutDashboard } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' },
    { icon: <CreditCard size={20} />, label: 'VCard Creator', path: '/vcard' },
    { icon: <QrCode size={20} />, label: 'QR Generator', path: '/qr' },
    { icon: <Mail size={20} />, label: 'Email Signature', path: '/signature' },
    { icon: <Instagram size={20} />, label: 'Insta Splitter', path: '/insta' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="text-blue" style={{ fontWeight: 900, fontSize: '1.5rem' }}>VV.TOOLBOX</span>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <style>{`
        .sidebar {
          width: 260px;
          height: 100vh;
          border-right: 1px solid #eee;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
        }
        .sidebar-logo {
          padding-left: 1rem;
          margin-bottom: 3rem;
        }
        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          color: #666;
          transition: all 0.2s ease;
          font-weight: 500;
        }
        .nav-item:hover {
          background-color: #f5f5ff;
          color: var(--blue);
        }
        .nav-item.active {
          background-color: var(--blue);
          color: white;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
