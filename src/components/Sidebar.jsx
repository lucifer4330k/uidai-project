
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Map, TrendingUp, ShieldAlert, Route, Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { path: '/', icon: LayoutDashboard, label: 'Overview' },
        { path: '/geo', icon: Map, label: 'Geospatial' },
        { path: '/forecast', icon: TrendingUp, label: 'Forecaster' },
        { path: '/watchtower', icon: ShieldAlert, label: 'Watchtower' },
        { path: '/optimizer', icon: Route, label: 'Route Optimizer' },
    ];

    return (
        <>
            <button
                className="mobile-menu-btn"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="logo-icon">
                        <img src="https://uidai.gov.in/images/logo/aadhaar_english_logo.svg" alt="Aadhaar" className="aadhaar-logo" />
                    </div>
                    <div className="brand-text">
                        <h2>Aadhaar Ops</h2>
                        <span>Command Center</span>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            <item.icon size={20} />
                            <span>{item.label}</span>
                            {item.path === '/watchtower' && <span className="nav-badge red">3</span>}
                        </NavLink>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <div className="user-profile">
                        <div className="avatar">A</div>
                        <div className="user-info">
                            <span className="name">Admin User</span>
                            <span className="role">Regional Ops</span>
                        </div>
                    </div>
                    <button className="logout-btn">
                        <LogOut size={18} />
                    </button>
                </div>
            </aside>

            {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />}
        </>
    );
}
