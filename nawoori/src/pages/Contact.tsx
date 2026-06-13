import React, { useState } from 'react'
import './Contact.css'

const INFO_ITEMS = [
  { icon: '📍', label: '주소', value: '서울특별시 OO구 OO로 000' },
  { icon: '📞', label: '전화', value: '02-0000-0000' },
  { icon: '✉️', label: '이메일', value: 'info@nauri-church.kr' },
  { icon: '🕐', label: '사무실 운영', value: '월 – 금  09:00 – 17:00' },
]

const SERVICES = [
  { name: '주일 1부 예배', time: '09:00' },
  { name: '주일 2부 예배', time: '11:00' },
  { name: '수요 예배',      time: '수 19:30' },
  { name: '금요 기도회',    time: '금 21:00' },
]

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 실제 백엔드 연동 시 여기에 API 호출 추가
    setSent(true)
  }

  return (
    <main>
      <div className="page-hero">
        <h1>Contact</h1>
        <p>나우리교회로 연락하세요</p>
      </div>

      <section className="section">
        <div className="container contact-layout">

          {/* Left: Info */}
          <div className="contact-info-col">
            <h2 className="contact-heading">교회 안내</h2>

            <div className="info-cards">
              {INFO_ITEMS.map((item) => (
                <div className="info-card" key={item.label}>
                  <span className="info-card-icon">{item.icon}</span>
                  <div>
                    <p className="info-card-label">{item.label}</p>
                    <p className="info-card-value">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-divider" />

            <h3 className="contact-subheading">예배 시간</h3>
            <div className="service-list">
              {SERVICES.map((s) => (
                <div className="service-row" key={s.name}>
                  <span>{s.name}</span>
                  <span className="service-time">{s.time}</span>
                </div>
              ))}
            </div>

            <div className="contact-divider" />

            {/* Map placeholder */}
            <h3 className="contact-subheading">오시는 길</h3>
            <div className="map-placeholder">
              <span>지도 (Google Maps 또는 카카오맵 연동)</span>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-col">
            <h2 className="contact-heading">문의하기</h2>
            <p className="contact-form-desc">
              궁금한 점이나 교회 방문 전 문의하실 내용을 남겨 주세요.<br />
              담당자가 확인 후 연락드리겠습니다.
            </p>

            {sent ? (
              <div className="form-success">
                <div className="form-success-icon">✓</div>
                <h3>문의가 접수되었습니다</h3>
                <p>빠른 시일 내에 답변 드리겠습니다. 감사합니다.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">이름 *</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="홍길동"
                      value={form.name} onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">이메일 *</label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="example@email.com"
                      value={form.email} onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">문의 유형</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                    <option value="">선택해 주세요</option>
                    <option value="visit">교회 방문 문의</option>
                    <option value="worship">예배 문의</option>
                    <option value="event">행사 문의</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">문의 내용 *</label>
                  <textarea
                    id="message" name="message" required rows={6}
                    placeholder="문의하실 내용을 자유롭게 작성해 주세요."
                    value={form.message} onChange={handleChange}
                  />
                </div>

                <button type="submit" className="form-submit">문의 보내기</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
