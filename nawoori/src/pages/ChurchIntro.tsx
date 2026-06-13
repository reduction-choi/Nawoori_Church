import React from 'react'
import './ChurchIntro.css'

const HISTORY = [
  { year: '2005', event: '나우리교회 설립', detail: '소수의 성도들과 함께 첫 예배를 드리며 교회를 세웠습니다.' },
  { year: '2010', event: '현 예배당으로 이전', detail: '교회 성장과 함께 더 넓은 예배 공간으로 이전하였습니다.' },
  { year: '2015', event: '창립 10주년 기념', detail: '10년의 은혜를 감사하며 지역 사회 섬김 사역을 강화하였습니다.' },
  { year: '2020', event: '온라인 예배 도입', detail: '비대면 상황에서도 말씀이 끊이지 않도록 온라인 예배를 시작했습니다.' },
  { year: '2025', event: '창립 20주년', detail: '20년의 하나님 은혜를 기리며 새로운 비전을 선포하였습니다.' },
]

const ChurchIntro: React.FC = () => {
  return (
    <main>
      <div className="page-hero">
        <h1>교회 소개</h1>
        <p>나우리교회를 소개합니다</p>
      </div>

      <section className="section">
        <div className="container">
          {/* Photo placeholder */}
          <div className="photo-placeholder">
            <span>교회 사진</span>
          </div>

          <div className="intro-header">
            <h2 className="church-name-large">나우리교회</h2>
            <p className="church-name-en">Nauri Church</p>
          </div>

          <div className="cross-divider"><span>✛</span></div>

          <div className="intro-body">
            <div className="intro-text">
              <h3 className="intro-section-heading">교회 소개</h3>
              <p>
                나우리교회는 하나님의 말씀 위에 굳건히 세워진 신앙 공동체입니다.
                "나우리"라는 이름은 '우리가 함께 나아간다'는 뜻을 담고 있으며,
                모든 성도가 하나 되어 하나님 나라를 향해 걸어가는 교회를 꿈꿉니다.
              </p>
              <p style={{ marginTop: '16px' }}>
                우리 교회는 예배, 말씀, 기도, 교제, 전도의 다섯 가지 사명 위에 서 있습니다.
                지역 사회와 함께 호흡하며 그리스도의 사랑을 나누는 열린 교회로,
                남녀노소 누구든 환영받는 공동체를 지향합니다.
              </p>
            </div>

            <div className="intro-meta">
              <h3 className="intro-section-heading">교회 정보</h3>
              <dl className="info-table">
                <div className="info-row">
                  <dt>설립일</dt>
                  <dd>2005년 3월 첫째 주일</dd>
                </div>
                <div className="info-row">
                  <dt>담임목사</dt>
                  <dd>홍길동 목사</dd>
                </div>
                <div className="info-row">
                  <dt>주일예배</dt>
                  <dd>1부 09:00 / 2부 11:00</dd>
                </div>
                <div className="info-row">
                  <dt>주소</dt>
                  <dd>서울특별시 OO구 OO로 000</dd>
                </div>
                <div className="info-row">
                  <dt>연락처</dt>
                  <dd>02-0000-0000</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="cross-divider"><span>✛</span></div>

          {/* History timeline */}
          <h3 className="intro-section-heading" style={{ marginBottom: '32px' }}>약력 및 연혁</h3>
          <div className="timeline">
            {HISTORY.map((h, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-year">{h.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <strong>{h.event}</strong>
                  <p>{h.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ChurchIntro
