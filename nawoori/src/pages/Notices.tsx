import React from 'react'

const NOTICES = [
  {
    tag: '예배 안내',
    title: '2025년 성탄절 예배 안내',
    desc: '올해 성탄 연합 예배는 12월 25일(수) 오전 10시에 본당에서 드립니다. 온 가족이 함께 참여해 주세요.',
    date: '2025.12.10',
  },
  {
    tag: '행사',
    title: '2025 교회 가족 수련회 신청 안내',
    desc: '8월 중 진행 예정인 교회 가족 수련회 참가 신청을 받습니다. 교회 사무실 또는 홈페이지를 통해 신청해 주세요.',
    date: '2025.07.20',
  },
  {
    tag: '모집',
    title: '주일학교 교사 모집',
    desc: '유·초등부 주일학교 교사를 모집합니다. 다음 세대를 위해 섬기고 싶으신 분은 교육부로 연락 바랍니다.',
    date: '2025.06.01',
  },
  {
    tag: '공지',
    title: '교회 리모델링 공사 안내',
    desc: '본당 냉난방 시설 교체 및 화장실 리모델링 공사가 진행됩니다. 공사 기간 중 일부 공간 사용이 제한될 수 있습니다.',
    date: '2025.05.15',
  },
  {
    tag: '예배 안내',
    title: '추수감사절 예배 및 감사 헌금 안내',
    desc: '추수감사절 연합 예배를 11월 둘째 주일 2부 예배로 드립니다. 자세한 내용은 주보를 확인해 주세요.',
    date: '2025.11.01',
  },
]

const Notices: React.FC = () => {
  return (
    <main>
      <div className="page-hero">
        <h1>공지사항</h1>
        <p>나우리교회의 새로운 소식을 전합니다</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="card-grid">
            {NOTICES.map((n, i) => (
              <div className="card" key={i} style={{ cursor: 'pointer' }}>
                <div className="card-tag">{n.tag}</div>
                <h3 className="card-title">{n.title}</h3>
                <p className="card-desc">{n.desc}</p>
                <p className="card-date">{n.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Notices
