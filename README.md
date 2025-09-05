# My Developer Portfolio

## 소개

이 프로젝트는 **권태준** 개발자의 개인 포트폴리오 웹사이트입니다. React를 사용하여 개발되었으며, 저의 기술 역량, 주요 프로젝트 경험, 그리고 개발자로서의 철학을 효과적으로 보여주기 위해 제작되었습니다.

## 주요 기능

이 포트폴리오는 다음과 같은 섹션으로 구성되어 있습니다:

-   **홈 (Hero Section):** 저를 소개하는 간결한 슬로건과 핵심 메시지.
-   **소개 (About Me):** 저의 개발 여정, 강점, 개발 철학에 대한 상세한 설명.
-   **기술 스택 (Skills):** 제가 다룰 수 있는 다양한 기술 스택을 카테고리별로 분류하여 제시.
-   **프로젝트 (Projects):** 학원 관리 서비스, 슈어모빌리티 프로젝트 (캐디미, 타고가), 슈어소프트테크 프로젝트 (ZET, VDMS) 등 주요 프로젝트에 대한 상세한 설명 (개요, 기술 스택, 역할, 구현 상세, 성과 및 배운 점).
-   **연락처 (Contact):** 저에게 연락할 수 있는 방법 (이메일, GitHub 등).

## 사용된 기술 스택

-   **Frontend:** React, JavaScript, HTML5, CSS3
-   **Backend:** Node.js, Express.js, Python, Django REST Framework (DRF), Celery, RabbitMQ
-   **Database:** PostgreSQL, MongoDB, Redis, MySQL
-   **Infrastructure & DevOps:** AWS (EC2, RDS, DocDB, S3, CloudFront, ECS Fargate), Docker, Jenkins, CI/CD (AWS CodePipeline), ELK
-   **Tools & Others:** Github, Bitbucket, Postman, ESLint, Swagger, Jira, Slack

## 시작하기

이 프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요.

### 1. 저장소 클론

```bash
git clone https://github.com/do-develop-space/my-portfolio.git
cd my-portfolio
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm start
```

프로젝트가 `http://localhost:3000`에서 실행됩니다.

## 배포

이 프로젝트는 GitHub Pages를 통해 배포됩니다.

### 1. `gh-pages` 설치

```bash
npm install --save-dev gh-pages
```

### 2. `package.json` 설정

`package.json` 파일에 `homepage`와 `scripts`를 다음과 같이 설정합니다.

```json
  "homepage": "http://do-develop-space.github.io/my-portfolio",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
```

### 3. 배포 실행

```bash
npm run deploy
```

배포가 완료되면 `http://do-develop-space.github.io/my-portfolio`에서 포트폴리오를 확인할 수 있습니다. (배포 후 활성화까지 몇 분 소요될 수 있습니다.)

## 연락처

-   **이메일:** tjkueon0309@gmail.com
-   **GitHub:** [https://github.com/do-develop-space](https://github.com/do-develop-space)

## 라이선스

이 프로젝트는 MIT 라이선스에 따라 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.