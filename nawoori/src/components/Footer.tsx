import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-mark">✛</div>
            <span>나우리교회</span>
          </div>
          <p className="footer-tagline">하나님의 은혜 안에서 함께 나아가는 교회</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>교회 안내</h4>
            <ul>
              <li><Link to="/교회-소개">교회 소개</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>교회 소식</h4>
            <ul>
              <li><Link to="/교회-소식/공지사항">공지사항</Link></li>
              <li><Link to="/교회-소식/칼럼">칼럼</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>함께하는 이들</h4>
            <ul>
              <li><Link to="/함께하는-이들/담임목사">담임목사</Link></li>
              <li><Link to="/함께하는-이들/역대-목사">역대 목사</Link></li>
              <li><Link to="/함께하는-이들/사역자">사역자</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} 나우리교회. All rights reserved.</span>
      </div>
    </div>
  </footer>
)

export default Footer
