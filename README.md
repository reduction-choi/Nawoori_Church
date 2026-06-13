# 나우리교회 웹사이트

나우리교회 공식 웹사이트 프로토타입입니다.  
React + TypeScript + Vite로 구성된 순수 프론트엔드 프로젝트입니다.

---

## 🚀 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview
```

---

## 📁 파일 트리

```
nauri-church/
├── index.html                    # 앱 진입 HTML (Google Fonts 로드 포함)
├── package.json                  # 의존성 및 스크립트 정의
├── vite.config.ts                # Vite 번들러 설정
├── tsconfig.json                 # TypeScript 컴파일러 설정 (src 대상)
├── tsconfig.node.json            # TypeScript 설정 (vite.config.ts 대상)
│
└── src/
    ├── main.tsx                  # ReactDOM 렌더 진입점, global.css 임포트
    ├── App.tsx                   # BrowserRouter + Routes 정의 (라우팅 허브)
    │
    ├── styles/
    │   ├── global.css            # 디자인 토큰(CSS 변수), 공통 레이아웃,
    │   │                         #   .section / .container / .card / .page-hero
    │   │                         #   .cross-divider / .person-card-photo 등
    │   └── person-card.css       # (참고용) person-card 스타일 초안 — global.css에 통합됨
    │
    ├── components/
    │   ├── Navbar.tsx            # 상단 네비게이션 바
    │   │                         #   - 로고(클릭 시 홈 이동)
    │   │                         #   - 교회 소개 / 교회 소식(드롭다운) /
    │   │                         #     함께하는 이들(드롭다운) / Contact
    │   │                         #   - 모바일 햄버거 메뉴
    │   ├── Navbar.css            # Navbar 전용 스타일 (드롭다운 애니메이션 포함)
    │   ├── Footer.tsx            # 하단 푸터 (링크 모음, 교회 정보)
    │   └── Footer.css            # Footer 전용 스타일
    │
    └── pages/
        ├── Home.tsx              # 메인 페이지
        │                         #   - Hero 섹션 (교회 소개 CTA)
        │                         #   - 교회 특징 4개 하이라이트 카드
        │                         #   - 예배 시간 안내
        │                         #   - 교회 소식 배너
        ├── Home.css              # Home 전용 스타일 (hero, highlights, schedule 등)
        │
        ├── ChurchIntro.tsx       # 교회 소개 페이지
        │                         #   - 교회 사진 영역(placeholder)
        │                         #   - 교회명 / 영문명 / 소개글
        │                         #   - 교회 기본 정보 테이블
        │                         #   - 연혁 타임라인
        ├── ChurchIntro.css       # ChurchIntro 전용 스타일 (타임라인, 정보 테이블 등)
        │
        ├── SeniorPastor.tsx      # 담임목사 페이지
        │                         #   - 목사 사진 영역(placeholder)
        │                         #   - 이름 / 직책 / 소개 성구
        │                         #   - 소개 글 / 학력 및 약력
        ├── Pastor.css            # SeniorPastor + FormerPastors + Ministers 공용 스타일
        │
        ├── FormerPastors.tsx     # 역대 목사 페이지
        │                         #   - 카드 그리드: 사진(placeholder) / 직책 / 이름 / 소개 / 재임 기간
        │
        ├── Ministers.tsx         # 사역자 페이지
        │                         #   - 카드 그리드: 사진(placeholder) / 직책 / 이름 / 소개
        │
        ├── Notices.tsx           # 공지사항 페이지 (/교회-소식/공지사항)
        │                         #   - 카드 그리드: 태그 / 제목 / 내용 요약 / 날짜
        │
        ├── Columns.tsx           # 칼럼 페이지 (/교회-소식/칼럼)
        │                         #   - 카드 그리드: 제목 / 내용 요약 / 저자 / 날짜
        │
        ├── Contact.tsx           # Contact 페이지
        │                         #   - 좌측: 주소·전화·이메일·운영시간 카드,
        │                         #           예배 시간표, 지도(placeholder)
        │                         #   - 우측: 문의 폼 (이름/이메일/유형/내용)
        │                         #           전송 후 성공 메시지 표시
        └── Contact.css           # Contact 전용 스타일 (폼, 인포카드, 지도 placeholder)
```

---

## 🗺️ 라우팅 구조

| URL | 페이지 |
|---|---|
| `/` | 메인 |
| `/교회-소개` | 교회 소개 |
| `/함께하는-이들/담임목사` | 담임목사 |
| `/함께하는-이들/역대-목사` | 역대 목사 |
| `/함께하는-이들/사역자` | 사역자 |
| `/교회-소식/공지사항` | 공지사항 |
| `/교회-소식/칼럼` | 칼럼 |
| `/contact` | Contact |

---

## 🎨 디자인 토큰

`src/styles/global.css`의 `:root`에 CSS 변수로 정의되어 있습니다.

| 변수 | 값 | 용도 |
|---|---|---|
| `--color-primary` | `#2D5016` | 딥 포레스트 그린 — 주조색 |
| `--color-accent` | `#C8902A` | 골든 앰버 — 포인트 |
| `--color-bg` | `#FAFAF7` | 따뜻한 아이보리 — 배경 |
| `--color-sage` | `#E8EEE1` | 세이지 그린 — 서브 배경 |
| `--font-serif` | Noto Serif KR | 제목 서체 |
| `--font-sans` | Noto Sans KR | 본문 서체 |

---

## 📌 향후 추가 예정 (백엔드 연동 시)

- 공지사항 / 칼럼 실제 데이터 연동 (REST API 또는 CMS)
- Contact 폼 이메일 발송 (백엔드 API)
- 지도 연동 (카카오맵 or Google Maps API)
- 사진 업로드 및 S3/CDN 연동
- 관리자 페이지 (게시글 CRUD)
