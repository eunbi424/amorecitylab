/**
 * 아모레시티랩 사이트 전역 목(mock) 데이터.
 * DB 없이 이 파일 하나만 수정하면 전체 사이트 콘텐츠가 갱신된다.
 */

export const site = {
  name: "아모레시티랩",
  nameEn: "AMORE CITY LAB",
  tagline: "정밀 진단 맞춤 뷰티 솔루션을 제공하는 도심 속 피부 연구소",
  taglineEn: "Precision diagnostics,\nPersonalized beauty solutions.",
  description:
    "정밀 진단 맞춤 뷰티 솔루션을 제공하는 도심 속 피부 연구소.\n피부와 두피를 측정하고, 데이터를 기반으로 개인 맞춤 솔루션을 설계합니다.",
  parent: "AMOREPACIFIC",
  venue: "AMORE YONGSAN",
  reservationNote: "아모레용산 예약 페이지 회원가입 후 예약 가능",
  phone: "02-6040-2557",
  email: "eunbi@amorepacific.com",
  address: "서울 용산구 한강대로 100 아모레퍼시픽 세계본사 2층 아모레용산 시티랩",
} as const;

/** 브랜드 이미지 자산 (원본 비율 그대로 next/image 에 전달) */
export const brand = {
  logoInk: { src: "/brand/citylab-logo-ink.png", width: 922, height: 268 },
  logoWhite: { src: "/brand/citylab-logo-white.png", width: 922, height: 268 },
  space: {
    src: "/brand/citylab-space.jpg",
    width: 3200,
    height: 2133,
    alt: "아모레시티랩 내부 — 유리 진열장과 화이트 톤 상담 데스크, 진단 부스",
  },
  leaflet: {
    src: "/brand/citylab-program-leaflet.jpg",
    width: 767,
    height: 1024,
    alt: "아모레시티랩 BASIC · INTENSIVE 프로그램 안내 리플릿",
  },
} as const;

export const navigation = [
  { href: "/philosophy", label: "시티랩 철학", labelEn: "Philosophy" },
  { href: "/history", label: "운영·연구 연혁", labelEn: "History" },
  { href: "/researchers", label: "연구원 소개", labelEn: "Researchers" },
  { href: "/programs", label: "진단 프로그램", labelEn: "Programs" },
  { href: "/location", label: "위치 및 공간", labelEn: "Location" },
  { href: "/news", label: "기사·소식", labelEn: "News" },
  { href: "/contact", label: "문의하기", labelEn: "Q&A" },
] as const;

/* ------------------------------------------------------------------ */
/* 1. Philosophy                                                       */
/* ------------------------------------------------------------------ */

export const philosophy = {
  eyebrow: "Our Philosophy",
  headline: "정밀 진단과\n홀리스틱 뷰티 솔루션",
  definition:
    "고객의 피부·두피·라이프스타일 데이터를 기반으로\n정밀 진단과 홀리스틱 뷰티 솔루션을 제안하는\n도심 속 피부 연구소, AMORE CITY Lab.",
  lead: "고객의 피부·두피·라이프스타일 데이터를 기반으로 정밀 진단과 홀리스틱 뷰티 솔루션을 제안합니다. 건강한 피부를 위해서는 타고난 성질과 현재 상태를 정확하고 객관적으로 진단하는 것이 우선입니다.",
  story: [
    "용산 본사에 자리한 아모레 시티랩은 그 어느 연구소보다 활짝 문을 열고 고객을 맞이합니다. 기기로 피부를 면밀히 진단하고 솔루션을 제공하는 것에서 더 나아가, 생활 습관과 주위 환경, 마음까지 함께 들여다보는 도심 속 뷰티 연구소입니다.",
    "피부 상담은 자연스럽게 삶과 고민을 나누는 시간이 됩니다. 나를 둘러싼 환경의 변화와 스트레스가 피부에 직간접적인 영향을 주기 때문입니다. 좋은 제품을 사용하는 것에서 더 나아가 라이프스타일을 바꾸고 마음을 돌보는 일이, 건강한 피부에 닿는다고 시티랩은 믿습니다.",
    "시티랩 연구원들은 “고객의 피부를 건강하게 만든다”는 공동의 미션을 나눕니다. 현장에서 고객의 고민을 듣고, 데이터를 기반으로 루틴을 설계하며, 고객의 삶이 긍정적인 방향으로 바뀌는 순간을 함께합니다.",
  ],
  source: {
    label: "아모레퍼시픽 스토리 · 시티랩 연구원 고은비",
    href: "https://stories.amorepacific.com/%EC%8B%9C%ED%8B%B0%EB%9E%A9-%EC%97%B0%EA%B5%AC%EC%9B%90-%EA%B3%A0%EC%9D%80%EB%B9%84/",
  },
  quote: {
    text: "고객의 피부를 건강하게 만든다",
    attribution: "Amore City Lab Mission",
  },
  pillars: [
    {
      no: "01",
      title: "데이터 기반 객관성",
      titleEn: "Objectivity",
      icon: "microscope" as const,
      body: "2014년부터 10년간 쌓아온 데이터를 반영하여, 과학적이고 전문적인 측정 결과보고서를 제공합니다.",
    },
    {
      no: "02",
      title: "피부에 대한 진정성",
      titleEn: "Sincerity",
      icon: "heart" as const,
      body: "고객의 피부와 라이프스타일을 과학적으로 심도 있게 파악하여 더 건강한 피부를 위해 연구합니다.",
    },
    {
      no: "03",
      title: "맞춤 솔루션 제공",
      titleEn: "Personalization",
      icon: "solution" as const,
      body: "고객의 피부 상태와 라이프스타일 데이터를 기반으로 미래의 피부를 예측하여 맞춤 솔루션을 제공합니다.",
    },
  ],
  stats: [
    { value: "2014", unit: "–", label: "측정 데이터 축적 시작" },
    { value: "10", unit: "년+", label: "데이터 기반 진단 헤리티지" },
    { value: "1:1", unit: "", label: "연구원 카운셀링" },
    { value: "약 10000", unit: "명", label: "시티랩이 만난 고객" },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* 1b. Service & Research History                                      */
/* ------------------------------------------------------------------ */

export type HistoryItem = {
  period: string;
  detail: string;
  outcome: string;
};

export const history = {
  eyebrow: "Service & Research History",
  title: "서비스 운영 및\n연구 히스토리",
  lead: "기술연구원의 피부 과학 성과가 아모레용산 시티랩의 1:1 진단 서비스로 이어진 기록입니다.",
  columns: { period: "기간", detail: "세부내용", outcome: "연구성과" },
  items: [
    {
      period: "2014",
      detail: "이화여대 아리따움 2층 바이오랩 오픈",
      outcome: "고객 피부 측정/상담 서비스 시작",
    },
    {
      period: "2016",
      detail: "명동 아이오페랩 오픈",
      outcome: "고객 유전자 분석/피부 측정/상담 서비스 제공",
    },
    {
      period: "2017",
      detail: "세계화장품학회 (IFSCC) 구두 발표 및 수상",
      outcome:
        "한국인 여성 411명 대상 전장유전체연관분석(GWAS) 기반 피부 특성의 유전형-표현형 상관관계 분석\n(Genotype–Phenotype Interaction Analysis of Skin Properties via Genome-Wide Association Studies in 411 Korean Females)",
    },
    {
      period: "2022",
      detail: "세계화장품학회 (IFSCC) 런던 구두 발표",
      outcome:
        "개인 피부 특성, 라이프스타일, 유전자 데이터 기반 진단 알고리즘 개발\n(Development of Diagnostic Algorithm Based on Individual Skin Properties, Lifestyle, and Genetic Data for Personalized Solutions)",
    },
    {
      period: "2025",
      detail: "세계화장품학회 (IFSCC) 칸느 구두 발표 및 포스터 발표",
      outcome:
        "피부 예측 알고리즘의 개인 맞춤형 스킨케어 서비스 적용과 임상적 결과\n(Application of a Skin Prediction Algorithm for Personalized Skincare Services with Clinical Outcomes)\n\n두피·모발 건강에 대한 통합적 접근: 새로운 유전적 지표 및 생활습관 요인 규명\n(A Holistic Approach to Scalp and Hair Health: Discovery of Novel Genetic Markers and Lifestyle Factors)",
    },
    {
      period: "2026.04 – 현재",
      detail: "세계 본사 아모레용산 리뉴얼 오픈, CITY LAB 진단 공간 신설",
      outcome:
        "축적된 피부 연구 데이터와 AI를 결합한 마이 스킨 퓨쳐 (My Skin Future) 진단 도입\n피부,두피 정밀 측정, 미래 피부 예측, 맞춤 솔루션 카운셀링을 연구원 상주로 진행",
    },
  ] as const satisfies readonly HistoryItem[],
} as const;

/* ------------------------------------------------------------------ */
/* 2. Researchers                                                      */
/* ------------------------------------------------------------------ */

export type Researcher = {
  id: string;
  name: string;
  nameEn: string;
  /** 카드에 표기된 직함 (Ph.D. / 측정 연구원) */
  credential: string;
  /** 공식 프로필 카드 상단 배지 */
  badge: string;
  /** 목록에서 쓰는 한 줄 전문 분야 요약 */
  specialty: string;
  portrait: string;
  card: string;
  education: readonly string[];
  research: readonly string[];
  certifications: readonly string[];
};

export const researchers: readonly Researcher[] = [
  {
    id: "ko-eunbi",
    name: "고은비",
    nameEn: "Ko Eun-bi",
    credential: "Ph.D.",
    badge: "Skin Expert",
    specialty: "피부 유전자 · 헤어 연구",
    portrait: "/researchers/portraits/ko-eunbi.jpg",
    card: "/researchers/cards/ko-eunbi.png",
    education: [
      "이화여자대학교 생명과학과 학사 졸업",
      "이화여자대학교 대학원 석사, 박사 졸업",
      "아모레퍼시픽 기술연구원 근무",
    ],
    research: [
      "활성산소의 피부 및 헤어 역할 연구",
      "호르몬 및 환경에 의한 피부 영향 연구",
      "한국인 여성 피부 유전자 연구",
      "피부 및 헤어 연구 3건의 국제학술지 논문 출판",
      "2017 세계화장품학회 (IFSCC) 구두 발표 및 수상",
      "2022. 2025 세계화장품학회 (IFSCC) 구두 발표",
    ],
    certifications: ["피부 미용사 국가기술자격증", "맞춤형 화장품 조제관리사 자격증", "DNA 컨설턴트 자격증"],
  },
  {
    id: "kim-jihye",
    name: "김지혜",
    nameEn: "Kim Ji-hye",
    credential: "Ph.D.",
    badge: "Skin Expert",
    specialty: "피부 혈관 · 유전자 연구",
    portrait: "/researchers/portraits/kim-jihye.jpg",
    card: "/researchers/cards/kim-jihye.png",
    education: [
      "연세대학교 생화학과 학사 졸업",
      "연세대학교 대학원 석사, 박사 졸업",
      "아모레퍼시픽 기술연구원 근무",
    ],
    research: [
      "한국인 여성 피부 유전자 연구",
      "아토피 유래 엑소좀에 의한 피부혈관연구",
      "혈관줄기세포를 이용한 신생혈관생성 연구",
      "동맥경화 혈전증 연구",
      "피부 및 혈관 연구 3건의 국제학술지 논문 출판",
      "2025 세계화장품학회 (IFSCC) 포스터 발표",
    ],
    certifications: ["맞춤형 화장품 조제관리사 자격증", "DNA 컨설턴트 자격증"],
  },
  {
    id: "jo-min",
    name: "조민",
    nameEn: "Cho Min",
    credential: "측정 연구원",
    badge: "Skin Expert",
    specialty: "맞춤형 화장품 · 피부 측정",
    portrait: "/researchers/portraits/jo-min.jpg",
    card: "/researchers/cards/jo-min.png",
    education: [
      "뷰티디자인 학사",
      "건국대학교 향장학과 석사",
      "건국대학교 화장품공학과 박사과정수료",
      "아모레퍼시픽 기술연구원 근무",
    ],
    research: ["맞춤형 화장품 학술지 논문 출판", "색조 제품 학술지 출판"],
    certifications: [
      "맞춤형 화장품 조제관리사 자격증",
      "미용(종합)면허증",
      "미용사 피부 자격증",
      "네일 자격증",
      "메이크업 2,3급 자격증",
      "두피관리사 자격증",
    ],
  },
  {
    id: "ko-sujeong",
    name: "고수정",
    nameEn: "Ko Soo Jeong",
    credential: "측정 연구원",
    badge: "Skin Expert",
    specialty: "피부 측정 · 뷰티 컨설팅",
    portrait: "/researchers/portraits/ko-sujeong.jpg",
    card: "/researchers/cards/ko-sujeong.png",
    education: ["뷰티디자인 학사", "아모레퍼시픽 기술연구원 근무"],
    research: [],
    certifications: [
      "맞춤형 화장품 조제관리사 자격증",
      "미용(종합) 면허증",
      "미용사 피부 자격증",
      "미용사 네일 자격증",
      "CS강사 자격증",
      "메이크업 2급 자격증",
      "DNA 컨설턴트 자격증",
      "두피관리 자격증",
      "발관리 자격증",
      "체형관리 자격증",
    ],
  },
  {
    id: "kang-jiye",
    name: "강지예",
    nameEn: "Kang Ji-ye",
    credential: "측정 연구원",
    badge: "Skin Expert",
    specialty: "피부 측정 · 메이크업",
    portrait: "/researchers/portraits/kang-jiye.jpg",
    card: "/researchers/cards/kang-jiye.png",
    education: ["화장품학 학사", "아모레퍼시픽 기술연구원 근무"],
    research: [],
    certifications: [
      "맞춤형 화장품 조제관리사 자격증",
      "미용(종합) 면허증",
      "미용사 피부 자격증",
      "메이크업 3급 자격증",
    ],
  },
] as const;

/* ------------------------------------------------------------------ */
/* 3. Programs                                                         */
/* ------------------------------------------------------------------ */

export type Program = {
  slug: "basic" | "intensive";
  no: string;
  name: string;
  nameEn: string;
  summary: string;
  summaryEn: string;
  duration: string;
  price: string;
  capacity: string;
  location: string;
  focus: string;
  services: readonly string[];
  conditions: readonly string[];
  steps: readonly { step: string; title: string; time: string; body: string }[];
  devices: readonly string[];
  notes: readonly string[];
  bookingUrl: string;
  bookingUrlGlobal: string;
};

export const programs: readonly Program[] = [
  {
    slug: "basic",
    no: "Program 01",
    name: "BASIC",
    nameEn: "Skin or Scalp Counseling",
    summary:
      "피부 또는 두피 중 한 가지를 선택하여 정밀 측정 후, 맞춤 솔루션을 제공하는 1:1 카운셀링 서비스입니다.",
    summaryEn:
      "This is a personalized 1:1 counseling service that provides an in-depth analysis of either the skin or scalp and offers tailored solutions.",
    duration: "약 30분",
    price: "아모레용산 10만원 이상 구매 시 상담 무료",
    capacity: "1인 · 사전 예약",
    location: "AMORE YONGSAN · 아모레시티랩",
    focus: "피부 또는 두피 중 1가지 선택",
    services: [
      "피부 또는 두피 중 한 가지를 선택해 정밀 측정",
      "피부 선택 시: 수분 · 유분 · 탄력 · 모공 · 색소 · 피부결 지표 측정",
      "두피 선택 시: 각질 · 유분 · 모공 · 모발 밀도 확대 관찰",
      "Skin Expert 연구원과의 1:1 카운셀링",
      "측정 결과 기반 맞춤 솔루션 제안",
    ],
    conditions: [
      "피부 또는 두피 중 한 가지만 선택합니다.",
      "아모레용산에서 10만원 이상 구매 시 상담이 무료로 제공됩니다.",
      "피부 측정 시 노메이크업 또는 베이스 메이크업만 권장합니다.",
    ],
    steps: [
      {
        step: "01",
        title: "영역 선택",
        time: "3분",
        body: "오늘 측정할 한 가지 — 피부 또는 두피 — 를 연구원과 함께 정합니다.",
      },
      {
        step: "02",
        title: "정밀 측정",
        time: "12분",
        body: "선택한 영역의 상태를 이미징·센서 장비로 기록합니다. 피부에 닿는 자극은 없습니다.",
      },
      {
        step: "03",
        title: "1:1 카운셀링",
        time: "10분",
        body: "측정 결과를 생활 습관과 함께 읽어, 지금 가장 먼저 다뤄야 할 한 가지를 설명합니다.",
      },
      {
        step: "04",
        title: "맞춤 솔루션",
        time: "5분",
        body: "결과에 맞는 케어 순서와 제품을 제안하고, 현장에서 직접 테스트할 수 있습니다.",
      },
    ],
    devices: ["멀티 이미징 스킨 애널라이저", "세보미터 유분 측정기", "200x 디지털 마이크로스코프"],
    notes: [
      "예약은 아모레용산 예약 페이지에서 회원가입 후 진행해 주세요. 국내 고객과 해외 고객용 QR이 각각 마련되어 있습니다.",
      "예약 변경 및 취소는 방문 1일 전까지 가능합니다.",
    ],
    bookingUrl: "https://www.amoremall.com/kr/ko/store/service/detail?storeCode=004&serviceNo=308",
    bookingUrlGlobal: "https://www.amoremall.com/kr/ko/store/foreigner/service?storeCode=004&serviceNo=308",
  },
  {
    slug: "intensive",
    no: "Program 02",
    name: "INTENSIVE",
    nameEn: "Integrated Skin & Scalp Solution",
    summary:
      "피부·두피 정밀 측정과 미래 피부 예측을 통해 맞춤 솔루션을 제공하는 1:1 프리미엄 서비스입니다.",
    summaryEn:
      "This is a premium 1:1 service that provides personalized solutions through in-depth skin and scalp analysis, along with future skin condition forecasting.",
    duration: "약 60분",
    price: "아모레용산 20만원 이상 구매 시 상담 무료",
    capacity: "1인 · 사전 예약",
    location: "AMORE YONGSAN · 아모레시티랩",
    focus: "피부와 두피 통합 솔루션",
    services: [
      "피부 정밀 측정 (수분 · 유분 · 탄력 · 모공 · 색소 · 피부결)",
      "두피 정밀 측정 (각질 · 유분 · 모공 · 모발 밀도)",
      "미래 피부 상태 예측 (future skin condition forecasting)",
      "피부와 두피를 함께 읽는 통합 솔루션 설계",
      "Skin Expert 연구원과의 1:1 프리미엄 카운셀링",
      "측정 결과 기반 맞춤 루틴 및 제품 제안",
    ],
    conditions: [
      "피부와 두피를 같은 세션에서 함께 측정합니다.",
      "아모레용산에서 20만원 이상 구매 시 상담이 무료로 제공됩니다.",
      "정확한 측정을 위해 노메이크업 또는 베이스 메이크업만 권장합니다.",
    ],
    steps: [
      {
        step: "01",
        title: "사전 문진",
        time: "5분",
        body: "피부·두피 고민, 사용 중인 제품, 생활 습관을 확인하며 오늘의 측정 기준선을 만듭니다.",
      },
      {
        step: "02",
        title: "피부 정밀 측정",
        time: "15분",
        body: "일정한 조도와 습도가 유지되는 부스에서 피부 지표를 이미징하고 수치로 기록합니다.",
      },
      {
        step: "03",
        title: "두피 정밀 측정",
        time: "15분",
        body: "정수리와 전두부 등 주요 부위를 확대해 각질·유분·모발 밀도를 함께 확인합니다.",
      },
      {
        step: "04",
        title: "예측 · 솔루션",
        time: "25분",
        body: "현재 데이터로 미래 피부 상태를 예측하고, 피부와 두피를 잇는 맞춤 솔루션을 설계합니다.",
      },
    ],
    devices: [
      "멀티 이미징 스킨 애널라이저",
      "코네오미터 수분 측정기",
      "큐토미터 탄력 측정기",
      "200x 디지털 마이크로스코프",
    ],
    notes: [
      "INTENSIVE는 피부와 두피를 한 번에 측정하므로 BASIC을 같은 날 추가로 예약할 필요는 없습니다.",
      "예약은 아모레용산 예약 페이지에서 회원가입 후 진행해 주세요.",
      "예약 변경 및 취소는 방문 1일 전까지 가능합니다.",
    ],
    bookingUrl: "https://www.amoremall.com/kr/ko/store/service/detail?storeCode=004&serviceNo=312",
    bookingUrlGlobal: "https://www.amoremall.com/kr/ko/store/foreigner/service?storeCode=004&serviceNo=312",
  },
] as const;

/* ------------------------------------------------------------------ */
/* 4. Location & Space                                                 */
/* ------------------------------------------------------------------ */

export const location = {
  eyebrow: "Location & Space",
  name: "아모레 시티랩",
  address: "서울특별시 용산구 한강대로 100 아모레퍼시픽 세계본사 2층 아모레용산 시티랩",
  addressEn: "2F, Amorepacific Global Headquarters, 100 Hangang-daero, Yongsan-gu, Seoul",
  mapUrl: "https://naver.me/5hu8H6o0",
  hours: [
    { day: "월요일", time: "14:00 – 18:30" },
    { day: "화요일 – 금요일", time: "10:30 – 18:30" },
    { day: "공휴일", time: "휴무" },
  ],
  hoursSummary: "월 14:00–18:30 · 화–금 10:30–18:30",
  hoursNote: "휴무·단축 영업은 네이버 플레이스에서 확인해 주세요.",
  contact: [{ label: "이메일", value: "eunbi@amorepacific.com" }],
  transit: [
    {
      type: "지하철",
      detail: "4호선 신용산역 2번 출구에서 84m (도보 약 1분)",
    },
    { type: "버스", detail: "간선 100, 150, 421, 502 · 지선 6702 — '아모레퍼시픽' 정류장 하차" },
    { type: "주차", detail: "주차 가능 · 무료 (네이버 플레이스 기준)" },
  ],
  spaces: [
    {
      no: "01",
      name: "리셉션 & 아카이브 월",
      body: "입구에 들어서면 80년의 연구 기록을 담은 아카이브 월이 맞이합니다. 연도별 특허와 원료 샘플이 유리 진열장에 정렬되어 있습니다.",
      area: "66㎡",
    },
    {
      no: "02",
      name: "진단 스튜디오",
      body: "조도 500lux, 습도 50%로 일정하게 유지되는 4개의 독립 부스. 언제 방문해도 같은 조건에서 측정되도록 설계했습니다.",
      area: "92㎡",
    },
    {
      no: "03",
      name: "스캘프 바",
      body: "모니터를 마주 보고 앉아 연구원과 함께 두피를 확대 관찰하는 6석 규모의 바 형태 공간입니다.",
      area: "48㎡",
    },
    {
      no: "04",
      name: "루틴 라이브러리",
      body: "진단 리포트를 받은 뒤 처방된 제품을 직접 덜어 테스트해 보는 공간. 제품은 성분 계열별로 정리되어 있습니다.",
      area: "74㎡",
    },
    {
      no: "05",
      name: "티 라운지",
      body: "제주 오설록의 녹차를 내어 드리는 대기 공간. 한강대로를 향한 7m 창을 따라 좌석이 놓여 있습니다.",
      area: "58㎡",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* 5. News & Press                                                     */
/* ------------------------------------------------------------------ */

export type NewsItem = {
  id: string;
  category: "Press" | "Notice" | "Research" | "Event";
  title: string;
  summary: string;
  source: string;
  date: string;
  href: string;
  featured?: boolean;
};

export const news: readonly NewsItem[] = [
  {
    id: "n-001",
    category: "Press",
    title: "화장품 매장에 연구원이 있다… 아모레 용산이 먼저 여는 ‘퍼스널 뷰티’",
    summary:
      "시티랩에서 마이 스킨 퓨처로 현재 피부와 5년 뒤 변화를 나란히 보여 주고, 연구원이 데이터를 생활습관으로 풀어 설명한다. 공포 마케팅 대신 전문 상담으로 솔루션을 제안한다.",
    source: "대한경제",
    date: "2026-06-17",
    href: "https://www.dnews.co.kr/uhtml/view.jsp?idxno=202606151636485400428",
    featured: true,
  },
  {
    id: "n-002",
    category: "Press",
    title: "[르포]아모레에는 '인류 난제 해결' 연구소가 있다",
    summary:
      "아모레용산 안 시티랩에서 피부와 두피를 정밀 진단하고, 바이오랩부터 쌓아 온 데이터를 바탕으로 제품 루틴과 생활습관을 제안한다. 전문 연구원이 직접 검사·문진한다.",
    source: "비즈워치",
    date: "2026-07-22",
    href: "https://news.bizwatch.co.kr/article/consumer/2026/07/22/0010",
  },
  {
    id: "n-003",
    category: "Press",
    title: "[르포] 피부 진단받고 생활습관까지 상담...아모레용산 체험해보니",
    summary:
      "시티랩은 10만원 이상 구매 시 30분, 20만원 이상 구매 시 60분 프로그램으로 운영된다. 연구원과 1:1로 피부 상태를 읽고, 수면·스트레스·식습관까지 상담이 이어진다.",
    source: "우먼타임스",
    date: "2026-06-12",
    href: "https://www.womentimes.co.kr/news/articleView.html?idxno=103628",
  },
  {
    id: "n-004",
    category: "Press",
    title: "아모레용산 ‘Create New Beauty’ 구현한다",
    summary:
      "아모레용산 리뉴얼과 함께 시티랩 피부·두피 진단 서비스를 선보였다. 축적된 피부 연구 데이터와 AI를 결합한 마이 스킨 퓨처로 현재와 미래 피부 변화를 제시한다.",
    source: "코스모닝",
    date: "2026-05-07",
    href: "https://www.cosmorning.com/news/article.html?no=52726",
  },
] as const;

/* ------------------------------------------------------------------ */
/* 6. Q&A FAQ                                                          */
/* ------------------------------------------------------------------ */

export const faq = [
  {
    q: "BASIC과 INTENSIVE의 차이는 무엇인가요?",
    a: "BASIC은 피부 또는 두피 중 한 가지를 선택해 약 30분간 정밀 측정과 1:1 카운셀링을 진행합니다. INTENSIVE는 피부와 두피를 함께 측정하고 미래 피부 예측까지 포함하는 약 60분의 프리미엄 서비스입니다.",
  },
  {
    q: "상담은 무료인가요?",
    a: "아모레용산에서 BASIC은 10만원 이상, INTENSIVE는 20만원 이상 구매 시 상담이 무료로 제공됩니다. 사전 예약이 반드시 필요합니다.",
  },
  {
    q: "예약은 어떻게 하나요?",
    a: "아모레용산 예약 페이지에서 회원가입 후 예약할 수 있습니다. 국내 고객과 해외 고객용 예약 QR이 각각 마련되어 있으며, 이 사이트의 문의 폼으로도 안내를 요청하실 수 있습니다.",
  },
  {
    q: "메이크업을 한 상태로 방문해도 되나요?",
    a: "피부 측정은 노메이크업 또는 베이스 메이크업만 하신 상태를 권장합니다. 클렌징 공간이 마련되어 있어 현장에서 지우실 수도 있습니다.",
  },
  {
    q: "문의를 남기면 언제 답변을 받을 수 있나요?",
    a: "이 페이지에서 남기신 문의는 담당자에게 즉시 전달되며, 영업일 기준 1일 이내에 남겨주신 연락처로 회신드립니다.",
  },
] as const;
