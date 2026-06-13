import React from 'react'

const COLUMNS = [
  {
    author: '홍길동 담임목사',
    title: '기도란 무엇인가 — 하나님과의 대화',
    desc: '기도는 단순한 소원 성취의 수단이 아닙니다. 기도는 하나님의 마음과 우리의 마음이 만나는 거룩한 시간입니다. 이번 칼럼에서는 기도의 본질을 함께 묵상합니다.',
    date: '2025.12.01',
  },
  {
    author: '이OO 교육 사역자',
    title: '다음 세대를 위한 신앙 교육의 중요성',
    desc: '아이들에게 신앙을 전수하는 것은 교회의 가장 중요한 사명 중 하나입니다. 가정과 교회가 함께 협력할 때 진정한 신앙 교육이 가능합니다.',
    date: '2025.11.15',
  },
  {
    author: '홍길동 담임목사',
    title: '고난 속에서 발견하는 하나님의 섭리',
    desc: '인생의 고난은 우리를 무너뜨리는 것이 아니라, 하나님의 더 깊은 뜻을 발견하게 하는 통로입니다. 욥의 이야기를 통해 고난의 의미를 되새겨 봅니다.',
    date: '2025.10.20',
  },
  {
    author: '최OO 찬양 사역자',
    title: '예배 안에서의 찬양 — 영혼의 언어',
    desc: '찬양은 단순한 음악이 아닙니다. 말로 표현할 수 없는 영혼의 깊은 곳에서 하나님께 올려드리는 경배입니다. 찬양이 가진 신학적 의미를 나눕니다.',
    date: '2025.09.05',
  },
]

const Columns: React.FC = () => {
  return (
    <main>
      <div className="page-hero">
        <h1>칼럼</h1>
        <p>말씀과 삶을 잇는 이야기</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            {COLUMNS.map((c, i) => (
              <div className="card" key={i}>
                <div className="card-tag">칼럼</div>
                <h3 className="card-title">{c.title}</h3>
                <p className="card-desc">{c.desc}</p>
                <p className="card-date" style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{c.author}</span>
                  <span>{c.date}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Columns
