import React from 'react'
import './Pastor.css'

const WORKERS = [
  {
    name: '이OO',
    role: '교육 사역자',
    desc: '주일학교 및 청소년부를 담당하며 다음 세대 신앙 교육에 힘쓰고 있습니다.',
  },
  {
    name: '최OO',
    role: '찬양 사역자',
    desc: '예배 찬양팀을 이끌며 성도들이 하나님께 더 가까이 나아가는 예배를 돕고 있습니다.',
  },
  {
    name: '정OO',
    role: '선교 사역자',
    desc: '국내외 선교 사역을 지원하고 선교사 파송 및 후원 업무를 담당하고 있습니다.',
  },
  {
    name: '강OO',
    role: '행정 사역자',
    desc: '교회 행정 전반을 관리하며 성도들이 불편함 없이 교회 생활을 할 수 있도록 섬기고 있습니다.',
  },
  {
    name: '윤OO',
    role: '청년 사역자',
    desc: '청년부 모임을 이끌며 청년들이 신앙 안에서 성장하고 공동체를 이룰 수 있도록 돕고 있습니다.',
  },
  {
    name: '조OO',
    role: '복지 사역자',
    desc: '지역 사회 봉사 및 소외 이웃 섬김 사역을 담당하며 교회의 사회적 역할을 실천합니다.',
  },
]

const Ministers: React.FC = () => {
  return (
    <main>
      <div className="page-hero">
        <h1>사역자</h1>
        <p>나우리교회와 함께 섬기는 사역자들을 소개합니다</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            {WORKERS.map((w, i) => (
              <div className="card" key={i}>
                <div className="person-card-photo">
                  <span>사진</span>
                </div>
                <div className="card-tag">{w.role}</div>
                <h3 className="card-title">{w.name} 사역자</h3>
                <p className="card-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Ministers
