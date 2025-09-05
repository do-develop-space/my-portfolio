export const skills = {
  backend: ['Python', 'Django REST Framework (DRF)', 'Node.js', 'Express.js', 'Celery', 'RabbitMQ', 'PM2'],
  frontend: ['JavaScript', 'React'],
  database: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'OracleDB'],
  infra: ['AWS (EC2, RDS, DocDB, ElasticCache, S3, CloudFront, ECS Fargate)', 'Docker', 'CI/CD (AWS CodePipeline, Jenkins)'],
  tools: ['Git', 'Bitbucket', 'Postman', 'ESLint', 'Swagger', 'Jira', 'Slack'],
};

export const projects = [
  {
    title: '학원 관리 서비스',
    period: '2024.11 ~ 2025.07',
    overview: '기존 수작업 기반의 학원 관리 프로세스를 디지털화하여 운영 효율성을 극대화하고, 선생님, 학생, 학부모 간의 원활한 소통 및 과제 관리를 자동화한 풀스택 웹 서비스입니다.',
    techStack: 'Node.js, Express.js, PostgreSQL, MongoDB, Redis, AWS, Docker, PM2',
    role: '풀스택 개발',
    details: [
      'Node.js와 Express.js 기반의 RESTful API를 구현하고, JWT 인증 시스템을 구축하여 사용자 보안을 강화했습니다.',
      'PostgreSQL 데이터베이스를 설계하고 복잡한 관계형 쿼리를 최적화하여 데이터 처리 효율을 높였습니다.',
      '반응형 웹 애플리케이션을 구현했으며, 모바일 친화적인 UI/UX를 설계하여 모바일 사용률을 60% 증가시켰습니다.',
      'AWS 클라우드 환경(EC2, RDS, DocDB, S3, CloudFront)을 설계하고 운영했으며, Docker를 활용한 멀티 컨테이너 환경 구축 및 CI/CD 파이프라인을 자동화했습니다.',
    ],
    achievements: [
      '관리 업무 처리 시간을 40% 단축(기존 일 3시간 → 1.5-2시간)하여 운영 효율성을 크게 개선했습니다.',
      '학부모 만족도를 25% 향상시키고, 검색 엔진 최적화(SEO)를 통해 자연 유입 트래픽을 300% 증가시켰습니다.',
      '프로젝트를 통해 풀스택 개발 역량을 강화하고, 실제 사용자 피드백을 반영하여 서비스를 개선하는 경험을 쌓았습니다.',
    ],
  },
  {
    title: '슈어모빌리티(주) - 캐디미 서비스',
    period: '2023.01 ~ 2024.10',
    overview: '전동 골프 카트 서비스를 위한 백엔드 시스템 개발 및 운영 프로젝트로, Django RESTful API 구현 및 DB 최적화를 목표로한 서비스입니다.',
    techStack: 'Python, Django REST Framework (DRF), PostgreSQL, MongoDB, Redis, Celery, RabbitMQ, AWS, Docker',
    role: '백엔드 개발 및 운영',
    details: [
        '안정적이고 확장 가능한 백엔드 API를 설계하고 구현했습니다.',
        'PostgreSQL, MongoDB를 활용하여 복잡한 쿼리 및 인덱스 최적화를 통해 API 응답 속도를 70% 단축했습니다.',
        'Celery 워커 구조를 개선하고 Redis 캐싱을 도입하여 응답 시간을 40% 단축했습니다.',
    ],
    achievements: [
        'API 응답 속도 개선 및 운영 비용 절감을 통해 서비스의 효율성과 안정성을 크게 향상시켰습니다.',
        '대규모 데이터 처리 및 실시간 서비스 운영에 대한 깊이 있는 경험을 쌓았습니다.',
    ],
  },
    {
    title: '슈어모빌리티(주) - 타고가 서비스',
    period: '2021.01 ~ 2024.10',
    overview: '대규모 전동 킥보드 실시간 위치 추적 시스템의 개발 및 운영 프로젝트로,  Django RESTful API 구현 및 DB 최적화를 통해 API 응답 속도를 개선하고 GPS를 활용한 지역 관리 시스템을 도입하여 운영 효율성을 높였습니다.',
    techStack: 'Python, Django REST Framework (DRF), PostgreSQL, MongoDB, Redis, Celery, RabbitMQ, AWS, Docker',
    role: '백엔드 개발 및 운영',
    details: [
        'Celery를 Multi Worker 구조로 전환하여 부하 분산 및 처리 속도를 향상시켰습니다.',
        'Redis 캐싱을 도입하여 반복적인 요청에 대한 응답 속도 개선 및 서버 부하를 완화했습니다.',
        'MongoDB 인덱싱 최적화 및 시간 기반 버킷팅 전략을 적용하여 조회 성능을 향상시키고 데이터를 분산 저장했습니다.',
        'Geometry 기반으로 금지구역 및 주차구역 관리 시스템을 도입하여 운영 시간/비용을 30% 절감했습니다.',
    ],
    achievements: [
        'Mult Worker 구조 적용으로 부하 분산 및 처리 속도를 향상시키고, 수평 확장을 통해 동시 요청 수를 증가시켰습니다.',
        'Redis 캐싱을 통해 반복 요청을 최적화하고 과도한 요청 수를 감소시켰습니다.',
        '시스템 구조 개선을 통해 서비스 안정성과 확장성을 강화하고, MongoDB 쿼리 성능 향상 및 스토리지 효율성을 확보했습니다.',
    ],
  },
  {
    title: '슈어소프트테크(주) - ZET 서비스',
    period: '2019.11 ~ 2020.12',
    overview: '전동 킥보드 서비스의 백엔드 시스템 개발 및 유지보수 프로젝트입니다. Java 기반의 Spring Boot를 활용하여 관제 서버를 개발하고, Jenkins를 통한 CI/CD 파이프라인 구축 및 Elastic을 활용한 데이터 처리 및 시각화를 담당했습니다.',
    techStack: 'SpringBoot, Java, MySQL, MongoDB, Redis, AWS, Jenkins, ElasticSearch',
    role: '백엔드 개발 및 DevOps',
    details: [
      'Java 기반 Spring Boot를 사용하여 전동 킥보드 관제 서버를 개발하고 유지보수했습니다.',
      'Jenkins를 활용하여 CI/CD 파이프라인을 구축하고 배포 자동화를 구현했습니다.',
      'ElasticSearch를 활용하여 대규모 데이터를 처리하고 시각화 시스템을 구축했습니다.',
    ],
    achievements: [
      'Java 기반 백엔드 개발 및 대규모 데이터 처리 시스템 구축 경험을 쌓았습니다.',
      'CI/CD 자동화를 통해 개발 생산성 및 배포 안정성을 향상시키는 데 기여했습니다.',
    ],
  },
  {
    title: '슈어소프트테크(주) - VDMS 프로젝트',
    period: '2019.03 ~ 2019.10',
    overview: '현대자동차의 EV 데이터 전처리, 분석 및 시각화를 위한 데이터 개발 프로젝트입니다. Python을 활용하여 데이터 전처리 프로세스를 구축하고, Java, Hive, Spotfire 등을 사용하여 데이터 분석 및 시각화를 수행했습니다.',
    techStack: 'SpringBoot, Java, OracleDB, HIVEDB, Python, Spotfire',
    role: '데이터 개발',
    details: [
      'Python을 활용하여 대규모 EV 데이터를 효율적으로 전처리하는 프로세스를 개발했습니다.',
      'Java, Hive, Spotfire 등을 사용하여 전처리된 데이터를 분석하고 시각화하여 의미 있는 인사이트를 도출했습니다.',
    ],
    achievements: [
      '대규모 데이터 처리 및 분석 파이프라인 구축 경험을 쌓았습니다.',
      '다양한 데이터 기술 스택을 활용하여 실제 비즈니스 문제를 해결하는 역량을 강화했습니다.',
    ],
  },
];