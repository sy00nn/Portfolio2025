/* ============================================================
   Projects — the list and every detail page are drawn from this array.

   One entry per project, in display order:
     slug        URL id → #project/<slug>, and the image folder name
     shortTitle  image alt text and the placeholder card label
     title       full title (list item and detail-page heading)
     category    professional | competitions | personal   (drives the filter)
     org, date, team   org on one line, date (and team, on the detail page) on the next
     thumb       list thumbnail (1.45 : 1), or null for a text placeholder
     gallery     detail-page images; leave [] until they exist.
                 e.g. ["images/projects/sanjae-mate/01.jpg", ".../02.jpg"]
     summary     optional paragraph shown above the bullet points (HTML allowed)
     features    bullet points (HTML allowed)
     note        optional small print under the main image
     links       [{ label, href }]
     tags        tool / stack chips
   ============================================================ */
window.PROJECTS = [
    {
        "slug": "fund-ops",
        "shortTitle": "Fund Ops Platform",
        "title": "Fund Ops Automation Platform",
        "category": "professional",
        "org": "Dawon Asset Management",
        "date": "2026.10 &ndash; 11",
        "team": "Solo",
        "thumb": "images/projects/fund-ops/01.jpg",
        "gallery": [
            "images/projects/fund-ops/02.jpg",
            "images/projects/fund-ops/03.jpg",
            "images/projects/fund-ops/06.jpg",
            "images/projects/fund-ops/04.jpg",
            "images/projects/fund-ops/07.jpg",
            "images/projects/fund-ops/05.jpg"
        ],
        "summary": "Built a web-based management system for 33 funds that automates the operations team&rsquo;s daily routine work, from data collection through REPO and collateral calculations and compliance checks to trade instruction generation, in one place the team views and verifies together in real time.",
        "features": [
            "<strong>Role</strong> Workflow analysis and planning, custodian and back-office data pipelines, AWS infrastructure, web UX/UI design and development, and deployment and operations",
            "<strong>Action</strong> Structured the asset management workflows to automate daily fund accounting records, bond orders, REPO trades, and compliance work, and added automatic generation of trade instructions and Excel files",
            "<strong>Action</strong> Built a data pipeline that ingests daily custodian and back-office files, validates them row by row, sets aside bad rows with the reason, and retries failures, so operators see exactly which file and row needs attention",
            "<strong>Action</strong> Automated regulatory limit checks under Korea&rsquo;s Capital Markets Act, giving portfolio managers and compliance the same real-time view, with near-breach and breach flags raised before trading",
            "<strong>Impact</strong> Cut each operator&rsquo;s daily routine work from about 2 hours to 1; used every day by 8 portfolio managers across 33 funds",
            "<strong>Impact</strong> Moved individual file-based work onto one shared team view, so colleagues double-check each other in real time and errors are less likely; sell orders now show live, smoothing work between portfolio managers and the trade instruction team",
            "<strong>Impact</strong> Moved about 50,000 spreadsheet formulas into the system, fixing figure errors in the old workbooks, and made handovers and onboarding new operators easier"
        ],
        "links": [],
        "tags": [
            "Python",
            "FastAPI",
            "pandas",
            "SQL",
            "PostgreSQL",
            "React",
            "TypeScript",
            "AWS (EC2, RDS, S3, ALB)"
        ],
        "note": "&#8251; All data shown is fictitious and unrelated to any actual company or fund."
    },
    {
        "slug": "article-agent",
        "shortTitle": "Newsroom Agent",
        "title": "Newsroom Agent",
        "category": "professional",
        "org": "Wrtn Technologies",
        "date": "2025.06 &ndash; 08",
        "team": "Solo",
        "thumb": "images/projects/article-agent/02.jpg",
        "gallery": [
            "images/projects/article-agent/03.jpg",
            "images/projects/article-agent/05.jpg"
        ],
        "summary": "To reduce quality gaps between reporters and make article writing more efficient, I planned and built six AI agents that automate the full article production process.",
        "features": [
            "<strong>Role</strong> Planning, crawling and API data pipelines, agent design and development, and web UX/UI development",
            "<strong>Action</strong> Mapped the newsroom workflow and structured it into six AI agents: topic recommendation, research, drafting in each reporter&rsquo;s style learned from their recent articles, headline and subhead generation, copy review, and article recommendation by readers&rsquo; gender and age",
            "<strong>Action</strong> Built a LangGraph multi-agent workflow, applying prompt engineering and few-shot examples for consistent outputs",
            "<strong>Impact</strong> The drafting agent&rsquo;s architecture was used for a government press-release agent, contributing to the contract win"
        ],
        "links": [
            {
                "label": "Article",
                "href": "https://platum.kr/archives/271686"
            }
        ],
        "tags": [
            "Python",
            "LangGraph",
            "Gradio",
            "Streamlit",
            "Figma",
            "LLM (GPT, Claude, Gemini, Qwen)"
        ]
    },
    {
        "slug": "quant-research",
        "shortTitle": "Quant Research",
        "title": "Quant Research for a CSSP Private Fund",
        "category": "professional",
        "org": "Dawon Asset Management",
        "date": "2025.02 &ndash; 04",
        "team": "2 people",
        "thumb": "images/projects/quant-research/overview.jpg",
        "gallery": [],
        "features": [
            "<strong>Role</strong> Built the data foundation and backtests for factor research on a CSSP private fund, whose 25 years of KOSPI and KOSDAQ market and financial data (about 300 million rows) sat in scattered Excel files",
            "<strong>Action</strong> Rebuilt it into a MySQL database through a Python ETL pipeline: wide-to-long reshaping, column standardisation, and chunked loading",
            "<strong>Action</strong> Implemented factor scoring and quintile backtests in SQL, with 1, 3, and 6-month rebalancing, beta-neutral long&ndash;short returns, and IC, plus a performance dashboard",
            "<strong>Impact</strong> Top quintile returned 22.1% annualised against 7.1% for the KOSPI (IC 0.182); contributed to a 3.9% average excess return (Jul 2025) and a 60% cut in compute time"
        ],
        "links": [],
        "tags": [
            "Python",
            "pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "MySQL",
            "SQLAlchemy"
        ]
    },
    {
        "slug": "rider-safety",
        "shortTitle": "Rider Safety AI",
        "title": "AI Prediction Service for Platform Delivery Riders",
        "category": "competitions",
        "org": "2024 Outstanding Undergraduate Research Award, CAU AI Humanities",
        "date": "2024.08",
        "team": "2 people",
        "thumb": "images/projects/rider-safety/poster.jpg",
        "gallery": [],
        "features": [
            "<strong>Role</strong> Built an injury-severity model and a service around it, so that platform delivery riders facing rising accident rates could see their risk in advance and get help with injury claims afterwards",
            "<strong>Action</strong> Ran EDA on three years of Seoul motorcycle accident data and built an XGBoost model that predicts injury severity",
            "<strong>Action</strong> Combined the model with the OpenAI API to deliver real-time risk warnings and post-accident injury-claim guidance",
            "<strong>Impact</strong> Reached 96% accuracy and F1-score, and received the Outstanding Research Award"
        ],
        "links": [
            {
                "label": "Poster",
                "href": "projects/rider_poster.pdf"
            },
            {
                "label": "Report",
                "href": "projects/rider_report.pdf"
            },
            {
                "label": "Article",
                "href": "https://news.cau.ac.kr/cms/FR_CON/BoardView.do?MENU_ID=10&CONTENTS_NO=&SITE_NO=5&BOARD_SEQ=1&BOARD_CATEGORY_NO=&P_TAB_NO=&TAB_NO=&BBS_SEQ=8175"
            }
        ],
        "tags": [
            "Python",
            "pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "scikit-learn",
            "Tableau"
        ]
    },
    {
        "slug": "used-car-price",
        "shortTitle": "Used Car Pricing",
        "title": "US Used Car Price Prediction",
        "category": "competitions",
        "org": "Grand Prize, CUAI &amp; DArt-B Kaggle Datathon",
        "date": "2024.11",
        "team": "4 people",
        "thumb": "images/projects/used-car-price/thumb.jpg",
        "gallery": [
            "images/projects/used-car-price/01.jpg",
            "images/projects/used-car-price/02.jpg",
            "images/projects/used-car-price/03.jpg"
        ],
        "features": [
            "<strong>Role</strong> Problem definition, EDA, and feature engineering for a Kaggle datathon predicting US used-car prices from cars.com listings whose engine, transmission, and colour fields were not standardised",
            "<strong>Action</strong> Ran EDA on price formation by brand, model year, and mileage; cleaned the raw fields into model-ready features",
            "<strong>Action</strong> Stacked and ensembled models with AutoGluon",
            "<strong>Impact</strong> Improved prediction performance 20% and won the Grand Prize; identified mileage, model, and release year as the core price drivers, with a distinct premium on retro cars"
        ],
        "links": [
            {
                "label": "Presentation",
                "href": "projects/datathon_presentation.pdf"
            }
        ],
        "tags": [
            "Python",
            "pandas",
            "NumPy",
            "scikit-learn",
            "Tableau",
            "AutoGluon"
        ]
    },
    {
        "slug": "sanjae-mate",
        "shortTitle": "Sanjae Mate",
        "title": "Sanjae Mate: All-in-One AI Service for Industrial Injury Claims",
        "category": "competitions",
        "org": "Honorable Mention, CAU Patent Competition",
        "date": "2024.12",
        "team": "3 people",
        "thumb": "images/projects/sanjae-mate/01.jpg",
        "gallery": [
            "images/projects/sanjae-mate/02.jpg",
            "images/projects/sanjae-mate/03.jpg"
        ],
        "features": [
            "<strong>Role</strong> Service planning and data features for an all-in-one industrial-injury service, since injured workers under-use the insurance: filing is complex and slow, and information on designated hospitals and rehabilitation is scattered",
            "<strong>Action</strong> Defined the user problem across prevention, filing, approval, and rehabilitation, and scoped an all-in-one service on KCOMWEL and Ministry of Employment and Labor open data",
            "<strong>Action</strong> Connected the public datasets into three features: a geocoded map of designated hospitals and rehab centres, crawled hospital reviews summarised with the ChatGPT API, and an accident-type model trained on 107,180 records",
            "<strong>Impact</strong> Delivered a working prototype and app design, and received an Honorable Mention"
        ],
        "links": [
            {
                "label": "GitHub",
                "href": "https://github.com/sy00nn/San_Jae_Mate"
            },
            {
                "label": "Report",
                "href": "projects/sanjae_report.pdf"
            },
            {
                "label": "Presentation",
                "href": "projects/sanjae_presentation.pdf"
            }
        ],
        "tags": [
            "Python",
            "pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "scikit-learn",
            "Figma"
        ]
    },
    {
        "slug": "onchain-tracing",
        "shortTitle": "On-Chain Tracing",
        "title": "On-Chain Tracing of WannaCry Ransom Funds",
        "category": "competitions",
        "org": "3rd Place, CAU Virtual Asset Tracing Competition",
        "date": "2024.12",
        "team": "3 people",
        "thumb": "images/projects/onchain-tracing/01.jpg",
        "gallery": [
            "images/projects/onchain-tracing/02.jpg"
        ],
        "features": [
            "<strong>Role</strong> Traced the ransom from the 2017 WannaCry attack (200,000+ computers across 150 countries) for a competition, from setting the tracing scope to mapping the laundering path",
            "<strong>Action</strong> Applied entity resolution and link analysis in Chainalysis Reactor: clustered ransom addresses for versions 1.0 and 2.0 into entities and traced their fund flows",
            "<strong>Action</strong> Structured the laundering process into four steps: chain-hopping, conversion to Monero, splitting into small amounts, and cash-out through low-KYC exchanges",
            "<strong>Impact</strong> Mapped about 4.7 BTC (1.0) and 52 BTC (2.0) from ransom wallets through ShapeShift and Changelly into Monero, and placed 3rd"
        ],
        "links": [
            {
                "label": "Presentation",
                "href": "projects/blockchain_presentation.pdf"
            }
        ],
        "tags": [
            "Chainalysis Reactor",
            "Blockchain Explorers",
            "MS Office"
        ]
    },
    {
        "slug": "dpfl-fusion",
        "shortTitle": "DPFL-FUSION",
        "title": "DPFL-FUSION: SHAP-Optimized Noise Generation",
        "category": "competitions",
        "org": "Grand Prize, CUAI 7th Winter Conference",
        "date": "2024.12",
        "team": "4 people",
        "thumb": "images/projects/dpfl-fusion/thumb.jpg",
        "gallery": [],
        "features": [
            "<strong>Role</strong> Set the research direction for reducing the accuracy cost of differential privacy in federated learning, where uniform noise on every feature degrades the model",
            "<strong>Action</strong> Hypothesised that scaling noise per feature by SHAP importance through continuous mapping functions, with total noise energy fixed, keeps the DP guarantee while protecting accuracy",
            "<strong>Action</strong> Added zero-valued fake features to absorb noise away from important features, and analysed the privacy&ndash;performance tradeoff on MNIST",
            "<strong>Impact</strong> Outperformed a prior adaptive DP method (Talaei, 2024) under the same DP guarantee, and won the Grand Prize"
        ],
        "links": [
            {
                "label": "Poster",
                "href": "projects/cuai_poster.pdf"
            },
            {
                "label": "Site",
                "href": "https://cuai.kr/projects"
            }
        ],
        "tags": [
            "Python",
            "PyTorch",
            "NumPy",
            "Matplotlib",
            "SHAP"
        ]
    },
    {
        "slug": "hai-anomaly",
        "shortTitle": "HAI Anomaly Detection",
        "title": "Anomaly Detection on the HAI Security Dataset",
        "category": "personal",
        "org": "CUAI, Chung-Ang University AI Society",
        "date": "2024.11",
        "team": "Solo",
        "thumb": "images/projects/hai-anomaly/02.jpg",
        "gallery": [
            "images/projects/hai-anomaly/01.jpg"
        ],
        "features": [
            "<strong>Role</strong> Built an attack detection model on the HAI industrial control system dataset, a large-scale time series where attack points are rare",
            "<strong>Action</strong> Built the preprocessing pipeline: missing value handling, scaling, feature generation, and SMOTE for class imbalance",
            "<strong>Action</strong> Trained autoencoders that flag anomalies by reconstruction error, tuning hyperparameters with Optuna and the error threshold separately",
            "<strong>Impact</strong> Reached a TaPR of 0.53"
        ],
        "links": [
            {
                "label": "GitHub",
                "href": "https://github.com/sy00nn/HAI_AnomalyDetection"
            }
        ],
        "tags": [
            "Python",
            "pandas",
            "NumPy",
            "scikit-learn",
            "PyTorch",
            "Optuna"
        ]
    },
    {
        "slug": "kcontent-nlp",
        "shortTitle": "K-Content NLP",
        "title": "K-Content Review NLP &amp; Topic Modeling",
        "category": "personal",
        "org": "CUAI, Chung-Ang University AI Society",
        "date": "2024.10",
        "team": "Solo",
        "thumb": "images/projects/kcontent-nlp/overview.jpg",
        "gallery": [
            "images/projects/kcontent-nlp/topics.jpg"
        ],
        "features": [
            "<strong>Role</strong> Analysed audience reviews to find what viewers valued in hit K-content, which star ratings alone do not show, as input for marketing and follow-up planning",
            "<strong>Action</strong> Crawled about 2,000 audience reviews of <em>Lovely Runner</em> and <em>Exhuma</em> with Selenium, then cleaned them and extracted nouns with Mecab-ko and TF-IDF",
            "<strong>Action</strong> Ran LDA with the topic count chosen by coherence score (26 topics) and visualized topic relationships in pyLDAvis",
            "<strong>Impact</strong> Surfaced each title&rsquo;s core appeal: story immersion, character appeal, and emotional response for <em>Lovely Runner</em>; suspense, mise-en-sc&egrave;ne, and acting for <em>Exhuma</em>"
        ],
        "links": [
            {
                "label": "GitHub",
                "href": "https://github.com/sy00nn/NLP_Review"
            }
        ],
        "tags": [
            "Python",
            "pandas",
            "KoNLPy",
            "gensim",
            "pyLDAvis",
            "Selenium",
            "WordCloud"
        ]
    }
];

/* Korean copy for the KO toggle, keyed by slug. Only title, org, and features
   change; dates, tags, links, and images are shared with the English entry. */
window.PROJECTS_KO = {
    "fund-ops": {
        "title": "펀드 운용 업무 자동화: 통합관리 시스템 구축",
        "org": "다원자산운용(주) 자산운용본부",
        "summary": "펀드운용팀의 일일 반복 업무를 데이터 수집부터 REPO·담보 계산, 컴플라이언스 점검, 운용지시서 생성까지 자동화하고, 팀이 실시간으로 함께 보고 검증하는 33개 펀드 통합관리 웹 시스템을 구축했습니다.",
        "features": [
            "<strong>Role</strong> 업무 분석 및 기획, 수탁사·백오피스 데이터 파이프라인, AWS 인프라 구축, Web UX/UI 디자인 및 개발, 배포·운영",
            "<strong>Action</strong> 자산 운용 업무의 워크플로우 구조화를 통해 일일 펀드 회계 처리 내역, 채권 주문, REPO 거래, 컴플라이언스 업무를 자동화하고 운용지시서·엑셀 파일 자동 생성 기능 구현",
            "<strong>Action</strong> 수탁사·백오피스 일일 파일 자동 수집, 행 단위 검증, 오류 행 사유별 분리 및 재시도 파이프라인 구축으로 확인이 필요한 파일·행을 즉시 식별",
            "<strong>Action</strong> 자본시장법 규제 한도 점검을 자동화해 운용역과 컴플라이언스가 동일한 실시간 화면을 보고, 매매 전 근접·위반 펀드를 사전 탐지",
            "<strong>Impact</strong> 오전 수기 업무 자동화로 1인당 일일 업무 시간을 약 2시간에서 1시간으로 단축, 운용역 8명이 33개 펀드에 매일 사용",
            "<strong>Impact</strong> 개인 파일 단위로 흩어진 업무를 팀 단위 실시간 공유로 통합해 상호 더블체크로 업무 실수 가능성을 낮추고, 매도 주문 실시간 표시로 운용역–운용지시 팀 간 협업 개선",
            "<strong>Impact</strong> 수식 약 5만 개를 시스템으로 옮기며 기존 엑셀의 수치 오류를 수정하고, 인수인계와 신규 실무자의 업무 적응을 수월하게 개선"
        ],
        "note": "&#8251; 이미지 속 데이터는 모두 가상 데이터이며, 실제 회사·펀드와 무관합니다."
    },
    "article-agent": {
        "title": "Newsroom Agent",
        "org": "(주)뤼튼테크놀로지스 AX팀",
        "summary": "기자별 품질 편차를 줄이고 기사 작성을 효율화하기 위해, 기사 생산 전 과정을 자동화한 6개의 AI Agent를 기획 및 개발했습니다.",
        "features": [
            "<strong>Role</strong> 기획, 웹 크롤링·API 기반 데이터 수집 파이프라인, Agent 설계 및 개발, Web UX/UI 개발",
            "<strong>Action</strong> 기사 생산 과정의 워크플로우를 6개 에이전트 역할로 구조화하여 기획: 주제 생성, 리서치, 기자 문체를 학습한 초안 작성, 제목·부제 생성, 윤문, 독자 성별·연령별 기사 추천",
            "<strong>Action</strong> LangGraph 기반 Multi-Agent Workflow를 설계하고, 출력 일관성을 위해 Prompt Engineering 및 Few-shot 적용",
            "<strong>Impact</strong> 기사 초안 작성 에이전트 아키텍처가 정부기관 보도자료 작성 에이전트에 사용되어 계약 수주에 기여"
        ]
    },
    "quant-research": {
        "title": "CSSP 사모펀드 퀀트 리서치 분석",
        "org": "다원자산운용(주) 자산운용본부",
        "features": [
            "<strong>Role</strong> CSSP 사모펀드 팩터 리서치를 위해 엑셀로 관리되던 KOSPI·KOSDAQ 25년, 약 3억 건 시계열 데이터의 DB 전환 및 백테스트 환경 구축",
            "<strong>Action</strong> Python ETL(Wide→Long 변환, 컬럼 표준화, 분할 적재)을 통해 MySQL 중심 데이터 파이프라인으로 재설계",
            "<strong>Action</strong> 팩터 스코어링 및 5분위 백테스트를 SQL로 구현(월·분기·반기 리밸런싱, 베타 중립 롱숏, IC)하고 대시보드형 레포트로 시각화",
            "<strong>Impact</strong> 1분위 연환산 수익률 22.1%(KOSPI 7.1%), IC 0.182 확인 → 연산 속도 60% 단축, 평균 3.9% 펀드 초과수익률(&rsquo;25.07) 기여"
        ]
    },
    "rider-safety": {
        "title": "플랫폼 배달 라이더를 위한 AI 예측 서비스",
        "org": "제33회 중앙대학교 인공지능인문학 국내학술대회 연구우수상",
        "features": [
            "<strong>Role</strong> 증가하는 플랫폼 배달 라이더 사고에 대응해, 사전 위험 인지와 사고 후 산재 신청을 돕는 부상 심각도 예측 모델 및 서비스 구축",
            "<strong>Action</strong> 서울시 이륜차 사고 3개년 데이터 EDA 및 XGBoost 기반 부상 심각도 예측 모델 구축",
            "<strong>Action</strong> 예측 모델과 OpenAI API를 연계해 실시간 위험 알림 및 사고 후 산재 신청 안내 기능 구현",
            "<strong>Impact</strong> 정확도·F1-score 96% 달성, 연구우수상 수상"
        ]
    },
    "used-car-price": {
        "title": "미국 중고차 가격 예측",
        "org": "CUAI X DArt-B Kaggle 데이터톤, 대상",
        "features": [
            "<strong>Role</strong> cars.com 매물 기반 중고차 가격 예측 Kaggle 데이터톤에서 문제 정의·EDA·Feature 엔지니어링 담당(엔진·변속기·색상 속성이 비표준화된 데이터)",
            "<strong>Action</strong> 브랜드·연식·주행거리 중심 가격 형성 구조 EDA, 핵심 Feature 정제 및 파생 변수 생성",
            "<strong>Action</strong> AutoGluon 기반 모델 Stacking·Ensemble 적용",
            "<strong>Impact</strong> 예측 성능 20% 개선 및 대상 수상. 주행거리·모델·출시 연도를 핵심 가격 요인으로 도출하고 레트로 차량 프리미엄 현상 발견"
        ]
    },
    "sanjae-mate": {
        "title": "산재메이트: 산재 신청 올인원 AI 서비스",
        "org": "안전한 데이터 활용 분야 특허 공모전, 장려상",
        "features": [
            "<strong>Role</strong> 복잡한 신청 절차·긴 처리 기간·지정 병원·재활 정보 부족으로 저조한 산재보험 이용률 개선을 위한 올인원 서비스 기획 및 데이터 기능 구현",
            "<strong>Action</strong> 예방–신청–승인–재활 단계별 사용자 문제 정의 및 근로복지공단·고용노동부 공공 데이터 기반 올인원 서비스 기획",
            "<strong>Action</strong> 공공 데이터를 3개 기능으로 연결: 지정의료기관·재활기관 지도 시각화, 병원 리뷰 크롤링 및 ChatGPT API 요약, 107,180건 데이터 기반 재해유형 예측 모델",
            "<strong>Impact</strong> 서비스 프로토타입 및 앱 설계 완성, 특허 공모전 장려상 수상"
        ]
    },
    "onchain-tracing": {
        "title": "WannaCry 랜섬웨어 자금 온체인 추적",
        "org": "가상자산 추적 실전대회, 장려상",
        "features": [
            "<strong>Role</strong> 2017년 150개국 20만 대 이상을 감염시킨 WannaCry 랜섬웨어 몸값의 자금 흐름 추적(추적 범위 정의부터 세탁 경로 규명까지)",
            "<strong>Action</strong> Chainalysis Reactor 기반 엔티티 연결 분석으로 1.0·2.0 버전 몸값 주소 클러스터링 및 자금 흐름 추적",
            "<strong>Action</strong> 자금 세탁 과정을 체인호핑 → Monero 전환 → 소액 분할 → KYC 미비 거래소 현금화의 4단계로 구조화",
            "<strong>Impact</strong> 약 4.7 BTC(1.0)·52 BTC(2.0)가 ShapeShift·Changelly를 거쳐 Monero로 전환된 경로 규명, 장려상 수상"
        ]
    },
    "dpfl-fusion": {
        "title": "DPFL-FUSION: SHAP 기반 최적 노이즈 생성",
        "org": "2024 중앙대학교 인공지능학회 CUAI 동계컨퍼런스, 대상",
        "features": [
            "<strong>Role</strong> 연합학습에 차등 프라이버시(DP) 적용 시 전체 피처에 동일 노이즈가 부여되어 발생하는 성능 저하 문제의 연구 방향 설정",
            "<strong>Action</strong> 가설 설정: SHAP 중요도 기반 연속 매핑 함수로 피처별 노이즈를 차등 부여하고, 전체 노이즈 에너지를 유지해 DP 조건 보장",
            "<strong>Action</strong> 값이 0인 가짜 피처를 추가해 주요 피처의 노이즈를 흡수하도록 설계, MNIST 기반 프라이버시–성능 트레이드오프 분석",
            "<strong>Impact</strong> 동일 DP 조건에서 기존 Adaptive DP 방법(Talaei, 2024) 대비 성능 개선, 동계 컨퍼런스 대상 수상"
        ]
    },
    "hai-anomaly": {
        "title": "HAI 보안 데이터셋 이상 탐지",
        "org": "CUAI 중앙대학교 인공지능 학회",
        "features": [
            "<strong>Role</strong> 공격 구간이 희소한 대규모 산업제어시스템(ICS) 시계열 데이터셋(HAI) 기반 공격 탐지 모델 단독 구축",
            "<strong>Action</strong> 결측치 처리·스케일링·Feature 생성 및 SMOTE 기반 클래스 불균형 보정 전처리 파이프라인 구축",
            "<strong>Action</strong> 재구성 오차 기반 AutoEncoder 이상 탐지 모델링, Optuna 하이퍼파라미터 최적화 및 임계값 튜닝",
            "<strong>Impact</strong> TaPR 0.53 달성"
        ]
    },
    "kcontent-nlp": {
        "title": "K-콘텐츠 리뷰 NLP·토픽 모델링",
        "org": "CUAI 중앙대학교 인공지능 학회",
        "features": [
            "<strong>Role</strong> 평점만으로 파악하기 어려운 흥행 K-콘텐츠 관객 반응을 리뷰 텍스트로 분석해 마케팅·후속작 기획 인사이트 도출",
            "<strong>Action</strong> Selenium 기반 〈선재 업고 튀어〉·〈파묘〉 관객 리뷰 약 2,000건 수집, Mecab-ko·TF-IDF 기반 명사 추출 및 전처리",
            "<strong>Action</strong> Coherence 기반 토픽 수(26개) 선정 후 LDA 토픽 모델링, pyLDAvis로 토픽 간 관계 시각화",
            "<strong>Impact</strong> 작품별 핵심 소구점 도출(〈선재 업고 튀어〉: 스토리 몰입감·캐릭터 매력·감정적 반응 / 〈파묘〉: 서스펜스·미장센·배우 연기)"
        ]
    }
};
