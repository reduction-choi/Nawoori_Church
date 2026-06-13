import React from 'react'
import './Pastor.css'

const CAREER = [
  { year: '1990', desc: 'OO신학대학교 신학과 졸업' },
  { year: '1994', desc: 'OO대학원 신학석사(M.Div) 졸업' },
  { year: '1995', desc: 'OO교회 전도사 부임' },
  { year: '1999', desc: '목사 안수' },
  { year: '2002', desc: 'OO교회 부목사' },
  { year: '2005', desc: '나우리교회 초대 담임목사 취임' },
]

const SeniorPastor: React.FC = () => {
  return (
    <main>
      <div className="page-hero">
        <h1>담임목사</h1>
        <p>나우리교회 담임목사를 소개합니다</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="pastor-layout">
            {/* Photo */}
            <div className="pastor-photo-wrap">
              <div className="pastor-photo-placeholder">
                <span>목사 사진</span>
              </div>
              <div className="pastor-name-card">
                <p className="pastor-title-badge">담임목사</p>
                <h2 className="pastor-name">홍길동</h2>
                <p className="pastor-verse">
                  "내가 선한 싸움을 싸우고 나의 달려갈 길을 마치고<br />믿음을 지켰으니" — 딤후 4:7
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="pastor-info">
              <h3 className="intro-section-heading">목사 소개</h3>
              <p className="pastor-bio">
                홍길동 목사님은 나우리교회의 초대 담임목사로, 2005년 교회 설립부터
                현재까지 한결같은 마음으로 교회를 섬기고 계십니다. 말씀과 기도에 힘쓰며
                성도들이 믿음 안에서 성장할 수 있도록 돕는 것을 사명으로 여기고 있습니다.
              </p>
              <p className="pastor-bio" style={{ marginTop: '12px' }}>
                지역 사회와의 연대를 소중히 여기며, 소외된 이웃을 섬기는 일에도
                적극적으로 참여하고 있습니다.
              </p>

              <div className="cross-divider"><span>✛</span></div>

              <h3 className="intro-section-heading">학력 및 약력</h3>
              <div className="career-list">
                {CAREER.map((c, i) => (
                  <div className="career-item" key={i}>
                    <span className="career-year">{c.year}</span>
                    <span className="career-desc">{c.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SeniorPastor
