# 라우터 프로젝트 🗺️

React Router를 활용해 멀티 페이지 구조를 구현한 프로젝트입니다.

## 📌 프로젝트 소개
홈 / 소개 / 회사 / 게시판 페이지를 라우팅으로 연결하고
Header / Footer 공통 레이아웃을 유지하면서 페이지 간 이동을 구현했습니다.

## ⚙️ 주요 기능
- NavLink 활성 페이지 스타일 자동 적용
- 동적 라우팅 (useParams로 URL 파라미터 추출)
- 홈 Swiper 슬라이더 (Navigation / Pagination / Autoplay)
- 게시판 목록 데이터 렌더링
- 404 NotFound 페이지 처리

## 📁 페이지 구조
```
/           → 홈 (Swiper 슬라이더)
/about      → 소개
/about/:id  → 소개 상세
/board      → 게시판 목록
/board/:id  → 게시글 상세
/company    → 회사 소개
*           → 404 NotFound
```

## 🛠 사용 기술
- React
- React Router DOM
- Swiper
- Vite
- CSS

## 🚀 실행 방법
```bash
npm install
npm run dev
```
