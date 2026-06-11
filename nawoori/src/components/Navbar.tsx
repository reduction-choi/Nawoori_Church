import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

interface DropdownItem {
  label: string
  to: string
}

interface NavItem {
  label: string
  to?: string
  dropdown?: DropdownItem[]
}

const NAV_ITEMS: NavItem[] = [
  { label: '교회 소개', to: '/교회-소개' },
  {
    label: '교회 소식',
    dropdown: [
      { label: '공지사항', to: '/교회-소식/공지사항' },
      { label: '칼럼',    to: '/교회-소식/칼럼' },
    ],
  },
  {
    label: '함께하는 이들',
    dropdown: [
      { label: '담임목사', to: '/함께하는-이들/담임목사' },
      { label: '역대 목사', to: '/함께하는-이들/역대-목사' },
      { label: '사역자',   to: '/함께하는-이들/사역자' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close on route change
  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-mark">✛</div>
          <span className="logo-text">나우리교회</span>
        </Link>

        {/* Desktop menu */}
        <ul className="nav-list">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}
              onMouseEnter={() => item.dropdown && setOpenMenu(item.label)}
              onMouseLeave={() => item.dropdown && setOpenMenu(null)}
            >
              {item.to ? (
                <Link
                  to={item.to}
                  className={`nav-link ${location.pathname === item.to ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  className={`nav-link nav-link-btn ${
                    item.dropdown?.some((d) => location.pathname.startsWith(d.to.split('/')[1] ? '/' + d.to.split('/')[1] : ''))
                      ? 'active'
                      : ''
                  }`}
                  aria-haspopup="true"
                  aria-expanded={openMenu === item.label}
                >
                  {item.label}
                  <span className="chevron" aria-hidden>▾</span>
                </button>
              )}

              {item.dropdown && (
                <div className={`dropdown ${openMenu === item.label ? 'open' : ''}`}>
                  <ul className="dropdown-list">
                    {item.dropdown.map((d) => (
                      <li key={d.label}>
                        <Link to={d.to} className="dropdown-link">
                          {d.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="mobile-nav-group">
              {item.to ? (
                <Link to={item.to} className="mobile-nav-link">{item.label}</Link>
              ) : (
                <>
                  <div className="mobile-nav-label">{item.label}</div>
                  {item.dropdown?.map((d) => (
                    <Link key={d.label} to={d.to} className="mobile-nav-link mobile-nav-sub">
                      {d.label}
                    </Link>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
