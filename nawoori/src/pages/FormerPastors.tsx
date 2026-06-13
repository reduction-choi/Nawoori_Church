import React from 'react'
import './Pastor.css'

const FORMER_PASTORS = [
  {
    name: '김OO',
    role: '2대 담임목사',
    period: '2010 – 2018',
    desc: '8년간 나우리교회를 섬기며 교회 성장과 지역 선교에 헌신하셨습니다. 현재 OO선교회 대표로 사역 중이십니다.',
  },
  {
    name: '박OO',
    role: '3대 담임목사',
    period: '2018 – 2022',
    desc: '청년 사역과 말씀 훈련에 특화된 사역으로 교회의 다음 세대를 세우는 데 힘쓰셨습니다.',
  },
  {
    name: '이OO',
    role: '임시 담임목사',
    period: '2022 – 2023',
    desc: '과도기적 시기에 교회를 안정적으로 이끌며 성도들이 하나 될 수 있도록 섬기셨습니다.',
  },
]

const FormerPastors: React.FC = () => {
  return (
    <main>
      <div className="page-hero">
        <h1>역대 목사</h1>
        <p>나우리교회를 섬긴 목사님들을 소개합니다</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            {FORMER_PASTORS.map((p, i) => (
              <div className="card" key={i}>
                <div className="person-card-photo">
                  <span>사진</span>
                </div>
                <div className="card-tag">{p.role}</div>
                <h3 className="card-title">{p.name} 목사</h3>
                <p className="card-desc">{p.desc}</p>
                <p className="card-date">재임 기간: {p.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default FormerPastors
