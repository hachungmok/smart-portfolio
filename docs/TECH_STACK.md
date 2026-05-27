# 프로젝트 기술 스택 (TECH_STACK)

Smart Portfolio 프로젝트를 위한 최적의 기술 스택입니다. 요구사항(Vercel, Supabase, Gemini AI 필수 포함, 무료/저비용 운영, Antigravity 호환)을 모두 충족하며, 2026년 5월 기준 최신 안정화 버전을 반영했습니다.

---

## 1. 프론트엔드 프레임워크 (Frontend Framework)
- **기술 이름과 버전**: Next.js (v16.2.6) + React 19
- **역할**: 서버 사이드 렌더링(SSR), 라우팅 및 전반적인 웹 애플리케이션 UI 구성
- **필요한 npm 패키지**: `next`, `react`, `react-dom`
- **선정 이유**: Vercel에 최적화되어 있으며, App Router를 활용해 SEO와 로딩 속도를 극대화할 수 있기 때문입니다.

## 2. 배포 플랫폼 (Deployment Platform)
- **기술 이름과 버전**: Vercel (Latest)
- **역할**: Next.js 프로젝트의 원클릭 빌드, CI/CD, 전역 엣지 네트워크 호스팅
- **필요한 npm 패키지**: `vercel` (CLI용, 전역 설치)
- **필요한 환경 변수**: Vercel 연동 시 자동 생성 (별도 수동 변수 불필요)
- **선정 이유**: Next.js와의 완벽한 호환성을 자랑하며, 무료(Hobby) 티어로도 개인 포트폴리오를 충분히 안정적으로 무중단 배포할 수 있기 때문입니다.

## 3. 인증 (Authentication)
- **기술 이름과 버전**: Supabase Auth (via `@supabase/supabase-js` v2.106.2)
- **역할**: 관리자 페이지 접근을 위한 이메일/비밀번호 인증 처리 및 권한 제어
- **필요한 npm 패키지**: `@supabase/supabase-js`
- **필요한 환경 변수**: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **선정 이유**: 무료 티어에서 무제한 인증을 제공하며, 세션 관리 및 데이터베이스 보안 정책(RLS) 설정이 매우 직관적이기 때문입니다.

## 4. 데이터베이스 (Database)
- **기술 이름과 버전**: Supabase PostgreSQL (via `@supabase/supabase-js` v2.106.2)
- **역할**: 프로젝트, 이력서, 프로필 정보, 챗봇 대화 로그 등 관계형 데이터 저장
- **필요한 npm 패키지**: `@supabase/supabase-js`
- **필요한 환경 변수**: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY` (서버 전용)
- **선정 이유**: 무료 티어에서 강력한 PostgreSQL을 사용할 수 있고, REST/GraphQL API를 자동 생성하여 빠른 개발(Antigravity 활용)에 압도적으로 유리하기 때문입니다.

## 5. 파일 스토리지 (File Storage)
- **기술 이름과 버전**: Supabase Storage
- **역할**: 프로젝트 썸네일, 프로필 사진 등 이미지 에셋 저장 및 고속 CDN 배포
- **필요한 npm 패키지**: `@supabase/supabase-js`
- **필요한 환경 변수**: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **선정 이유**: 데이터베이스와 동일한 생태계(Supabase) 내에서 파일 접근 권한 관리가 쉽고, 무료 용량 한도가 넉넉하기 때문입니다.

## 6. AI 챗봇 및 RAG (AI Chatbot Pipeline)
- **기술 이름과 버전**: Google Gemini AI (`@google/genai` v1.51.0)
- **역할**: 방문자의 질문을 분석하고 포트폴리오 지식 기반(RAG)으로 맥락에 맞는 자연스러운 답변 생성
- **필요한 npm 패키지**: `@google/genai`
- **필요한 환경 변수**: `GEMINI_API_KEY`
- **선정 이유**: 뛰어난 자연어 처리 성능을 무료(또는 저비용) API로 사용할 수 있으며, 2026년 최신 통합 SDK(`@google/genai`)를 통해 RAG 파이프라인 구축이 매우 간편해졌기 때문입니다.

## 7. 스타일링 (Styling)
- **기술 이름과 버전**: Tailwind CSS (v4.3.0)
- **역할**: 유틸리티 클래스 기반의 빠르고 직관적인 UI 스타일링 및 다크 모드/반응형 구현
- **필요한 npm 패키지**: `tailwindcss`, `@tailwindcss/postcss`, `postcss`
- **선정 이유**: 별도의 CSS 파일 전환 없이 컴포넌트 내부에서 즉시 스타일링이 가능하여, AI 코딩 어시스턴트(Antigravity)를 활용한 UI/UX 구현 속도를 극대화할 수 있기 때문입니다.
