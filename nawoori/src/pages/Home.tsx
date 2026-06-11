import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const HIGHLIGHTS = [
  {
    icon: '🙏',
    title: '함께하는 예배',
    desc: '매 주일 말씀과 찬양으로 하나님께 영광을 돌리는 예배 공동체입니다.',
  },
  {
    icon: '📖',
    title: '말씀 중심',
    desc: '성경 말씀을 삶의 기준으로 삼고 깊이 있게 나누는 교회입니다.',
  },
  {
    icon: '🤝',
    title: '섬기는 교회',
    desc: '이웃과 지역 사회를 섬기며 그리스도의 사랑을 실천합니다.',
  },
  {
    icon: '✉️',
    title: '열린 공동체',
    desc: '누구든지 환영받는 따뜻하고 열린 신앙 공동체를 지향합니다.',
  },
]

const WORSHIP_SCHEDULE = [
  { name: '주일 1부 예배', time: '오전 9:00' },
  { name: '주일 2부 예배', time: '오전 11:00' },
  { name: '수요 예배',      time: '오후 7:30' },
  { name: '금요 기도회',    time: '오후 9:00' },
]

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">하나님의 은혜 안에서</p>
          <h1 className="hero-title">
            나우리교회에<br />오신 것을 환영합니다
          </h1>
          <p className="hero-sub">
            말씀과 기도, 사랑으로 세워가는 신앙 공동체
          </p>
          <div className="hero-ctas">
            <Link to="/교회-소개" className="btn-primary">교회 소개 보기</Link>
            <Link to="/contact" className="btn-outline">오시는 길</Link>
          </div>
        </div>
        <div className="hero-scroll-hint" aria-hidden>↓</div>
      </section>

      {/* Highlights */}
      <section className="section highlights-section">
        <div className="container">
          <p className="section-eyebrow">나우리교회는</p>
          <h2 className="section-title">믿음으로 함께 걷는 교회입니다</h2>
          <p className="section-subtitle">진정한 예배와 공동체의 삶을 함께 나눕니다</p>
          <div className="highlights-grid">
            {HIGHLIGHTS.map((h) => (
              <div className="highlight-card" key={h.title}>
                <div className="highlight-icon">{h.icon}</div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross divider */}
      <div className="container">
        <div className="cross-divider"><span>✛</span></div>
      </div>

      {/* Worship schedule */}
      <section className="section schedule-section">
        <div className="container schedule-inner">
          <div className="schedule-text">
            <p className="section-eyebrow">예배 안내</p>
            <h2 className="section-title">함께 드리는 예배</h2>
            <p className="schedule-desc">
              하나님께 드리는 예배는 우리 신앙의 중심입니다.<br />
              각 예배 시간에 함께해 주세요.
            </p>
            <Link to="/교회-소개" className="btn-primary" style={{ marginTop: '24px', display: 'inline-block' }}>
              자세히 보기
            </Link>
          </div>
          <div className="schedule-list">
            {WORSHIP_SCHEDULE.map((s, i) => (
              <div className="schedule-item" key={i}>
                <span className="schedule-name">{s.name}</span>
                <span className="schedule-time">{s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News banner */}
      <section className="news-banner">
        <div className="container news-banner-inner">
          <div>
            <p className="news-banner-label">최근 소식</p>
            <h3 className="news-banner-title">교회의 소식을 확인해 보세요</h3>
          </div>
          <div className="news-banner-links">
            <Link to="/교회-소식/공지사항" className="btn-outline-white">공지사항</Link>
            <Link to="/교회-소식/칼럼" className="btn-outline-white">칼럼</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
