/* ============================================================
   Projects — the list and every detail page are drawn from this array.

   One entry per project, in display order:
     slug        URL id → #project/<slug>, and the image folder name
     hidden      optional; true hides the project from the list and its detail page
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
        "date": "2026.08 &ndash; 11",
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
        "summary": "Built a web system that automates the fund operations team&rsquo;s daily workflows across 33 funds, from data collection to trade instructions.",
        "features": [
            "<strong>Role</strong> Workflow analysis and planning, data pipelines, AWS infrastructure, web UX/UI design and development, deployment and operations",
            "<strong>Action</strong> Automated daily fund accounting records, bond orders, REPO trades, and compliance work, including auto-generated trade instructions and Excel files",
            "<strong>Action</strong> Built a pipeline that ingests daily custodian and back-office files, validates each row, and quarantines invalid rows with the failure reason",
            "<strong>Action</strong> Automated regulatory limit checks under Korea&rsquo;s Capital Markets Act, flagging near-breaches and breaches before trading",
            "<strong>Impact</strong> Halved each operator&rsquo;s daily routine work (2 hours &rarr; 1); adopted for daily use by 8 managers",
            "<strong>Impact</strong> Consolidated individually managed files into one shared real-time view, enabling team cross-checks and reducing the risk of errors",
            "<strong>Impact</strong> Migrated 50K+ spreadsheet formulas into the system, correcting numerical errors in the legacy workbooks",
            "<strong>Lesson</strong> Automation depends less on technology than on deciding <em>what the system handles and where human judgment remains</em>, a boundary defined together with the portfolio managers"
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
        "title": "Newsroom Agent: Multi-Agent Article Production",
        "category": "professional",
        "org": "Wrtn Technologies",
        "date": "2025.06 &ndash; 08",
        "team": "Solo",
        "thumb": "images/projects/article-agent/02.jpg",
        "gallery": [
            "images/projects/article-agent/03.jpg",
            "images/projects/article-agent/05.jpg"
        ],
        "summary": "Planned and built six AI agents that automate article production, reducing quality variance across reporters.",
        "features": [
            "<strong>Role</strong> Planning, data pipelines, agent design and development, web UX/UI",
            "<strong>Action</strong> Decomposed the newsroom workflow into six agents: topic recommendation, research, drafting in each reporter&rsquo;s style, headlines and subheads, copy review, and article recommendation by reader gender and age",
            "<strong>Action</strong> Orchestrated the agents as a LangGraph multi-agent workflow, applying prompt engineering and few-shot examples for consistent outputs",
            "<strong>Impact</strong> The drafting agent&rsquo;s architecture was adopted as the core of a government press-release agent, contributing to the contract win"
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
        "title": "Equity Factor Research &amp; Backtesting",
        "category": "professional",
        "org": "Dawon Asset Management",
        "date": "2026.03 &ndash; 05",
        "team": "Team of 2",
        "thumb": "images/projects/quant-research/overview.jpg",
        "gallery": [],
        "summary": "Rebuilt 25 years of KOSPI and KOSDAQ data (approx. 300 million rows) into a database and pipeline for backtesting an equity private fund&rsquo;s factor strategies.",
        "features": [
            "<strong>Role</strong> Data pipeline and database, factor scoring, backtesting and performance analysis, dashboards",
            "<strong>Action</strong> Normalized and standardized the data and loaded it into MySQL through a Python ETL pipeline",
            "<strong>Action</strong> Implemented factor scoring and quintile backtests in SQL, validating factors with beta-neutral long&ndash;short returns and IC across 1, 3, and 6 month rebalancing",
            "<strong>Impact</strong> Reduced backtest runtime by 80% and delivered dashboard reports to support factor selection",
            "<strong>Impact</strong> Top factor group returned 22.1% annualized, about three times the KOSPI; contributed to the live fund strategy (fund return since inception: +83% as of May 2026)"
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
        "title": "Injury Risk Prediction for Delivery Riders",
        "category": "competitions",
        "org": "2024 Outstanding Undergraduate Research Award, CAU AI Humanities",
        "date": "2024.08",
        "team": "Team of 2",
        "thumb": "images/projects/rider-safety/poster.jpg",
        "gallery": [],
        "summary": "Planned an AI service that predicts injury severity and guides delivery riders through injury claims; only about 1 in 10 riders in an accident is compensated.",
        "features": [
            "<strong>Role</strong> Service planning, data collection and preprocessing, EDA, ML modeling, ChatGPT API claim alerts",
            "<strong>Action</strong> Collected 14,944 Seoul motorcycle accident records (2021&ndash;2023) and ran EDA by time, district, road type, and traffic violation",
            "<strong>Action</strong> Benchmarked seven tuned ML models, selected XGBoost, and identified the main risk factors from feature importance",
            "<strong>Action</strong> Integrated the predicted severity into a ChatGPT prompt that texts the rider the required documents, how to find a designated hospital, and the claim steps",
            "<strong>Impact</strong> Achieved 96.5% accuracy and a 0.96 F1-score; received the Outstanding Research Award"
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
        "hidden": true,
        "shortTitle": "Used Car Pricing",
        "title": "US Used Car Price Prediction",
        "category": "competitions",
        "org": "Grand Prize, CUAI &amp; DArt-B Kaggle Datathon",
        "date": "2024.11",
        "team": "Team of 4",
        "thumb": "images/projects/used-car-price/01.jpg",
        "gallery": [
            "images/projects/used-car-price/02.jpg",
            "images/projects/used-car-price/03.jpg"
        ],
        "summary": "Engineered unstandardized cars.com listing fields into model-ready features and analyzed US used-car price drivers for a Kaggle datathon.",
        "features": [
            "<strong>Role</strong> Problem definition, EDA, preprocessing and feature engineering, insight analysis",
            "<strong>Action</strong> Standardized engine, transmission, and color data into horsepower, displacement, transmission type, and color-combination features",
            "<strong>Action</strong> Built an AutoGluon stacking ensemble (RF, LightGBM, XGBoost, CatBoost, and others) to predict price",
            "<strong>Action</strong> Identified mileage, model, and release year as the core price drivers with EDA and statistical tests, and found a price premium on 1990s retro cars",
            "<strong>Impact</strong> Improved prediction performance by 20% and won the Grand Prize"
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
        "title": "Sanjae Mate: All-in-One Injury Claim Assistant",
        "category": "competitions",
        "org": "Honorable Mention, CAU Patent Competition",
        "date": "2024.12",
        "team": "Team of 3",
        "thumb": "images/projects/sanjae-mate/01.jpg",
        "gallery": [
            "images/projects/sanjae-mate/02.jpg",
            "images/projects/sanjae-mate/03.jpg"
        ],
        "summary": "Planned an all-in-one app covering prevention, filing, approval, and rehabilitation to increase uptake of industrial injury insurance.",
        "features": [
            "<strong>Role</strong> Service planning, public data collection and preprocessing, web crawling, ML modeling, ChatGPT API review summaries",
            "<strong>Action</strong> Geocoded designated hospitals and vocational rehab centers and plotted them on a map",
            "<strong>Action</strong> Crawled Kakao Map hospital reviews with Selenium and summarized the latest with the ChatGPT API",
            "<strong>Action</strong> Trained an ML model on 107,180 accident records to predict the most likely accident type from age, industry, and tenure",
            "<strong>Impact</strong> Delivered a working prototype and app design; received an Honorable Mention"
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
        "hidden": true,
        "shortTitle": "On-Chain Tracing",
        "title": "On-Chain Tracing of WannaCry Ransom Funds",
        "category": "competitions",
        "org": "3rd Place, CAU Virtual Asset Tracing Competition",
        "date": "2024.12",
        "team": "Team of 3",
        "thumb": "images/projects/onchain-tracing/01.jpg",
        "gallery": [
            "images/projects/onchain-tracing/02.jpg"
        ],
        "summary": "Traced how the bitcoin ransom from the 2017 WannaCry attack (200,000+ computers, 150 countries) was laundered and cashed out, using on-chain transaction records.",
        "features": [
            "<strong>Role</strong> Tracing scope definition, on-chain fund-flow analysis, laundering-method analysis",
            "<strong>Action</strong> Clustered the version 1.0 and 2.0 ransom addresses in Chainalysis Reactor and followed their outgoing transactions",
            "<strong>Action</strong> Traced funds through ShapeShift and Changelly into Monero, and followed the remainder as it was split across several exchanges and P2P trades",
            "<strong>Action</strong> Structured the laundering process into four stages: chain-hopping, conversion to Monero, splitting into small amounts, and cash-out through low-KYC exchanges",
            "<strong>Impact</strong> Mapped the conversion of approx. 4.7 BTC (1.0) and 52 BTC (2.0) into Monero; placed 3rd"
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
        "hidden": true,
        "shortTitle": "DPFL-FUSION",
        "title": "DPFL-FUSION: SHAP-Optimized Noise Generation",
        "category": "competitions",
        "org": "Grand Prize, CUAI 7th Winter Conference",
        "date": "2024.12",
        "team": "Team of 4",
        "thumb": "images/projects/dpfl-fusion/thumb.jpg",
        "gallery": [],
        "summary": "Proposed a federated learning framework that scales differential privacy (DP) noise per feature by SHAP importance, replacing uniform noise that degrades accuracy.",
        "features": [
            "<strong>Role</strong> Research direction and hypothesis, noise-allocation design, MNIST experiments and analysis",
            "<strong>Action</strong> Measured feature importance with SHAP, assigning less noise to important features and more to unimportant ones",
            "<strong>Action</strong> Distributed noise with continuous mapping functions (exponential, reciprocal, sigmoid) while holding total noise energy fixed, preserving the DP guarantee",
            "<strong>Action</strong> Added zero-valued fake features to absorb noise in place of real ones, and analyzed the privacy&ndash;performance tradeoff on MNIST",
            "<strong>Impact</strong> Outperformed a prior adaptive DP method (Talaei, 2024) under the same DP guarantee; won the Grand Prize"
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
        "hidden": true,
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
        "summary": "Built an autoencoder that learns normal patterns and flags rare attack periods in HAI, a time-series dataset from a power-plant industrial control system (ICS) testbed.",
        "features": [
            "<strong>Role</strong> Data preprocessing, deep learning modeling, hyperparameter optimization",
            "<strong>Action</strong> Built skewness features from the mean, standard deviation, and median across approx. 550,000 rows, dropped columns with missing values, and normalized with RobustScaler",
            "<strong>Action</strong> Addressed the class imbalance from rare attack periods with SMOTE",
            "<strong>Action</strong> Tuned a reconstruction-error autoencoder with Optuna and compared 95%, 98%, and dynamic thresholds to set the anomaly cut-off",
            "<strong>Impact</strong> Achieved a TaPR (a time-series anomaly detection metric) of 0.53"
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
        "hidden": true,
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
        "summary": "Analyzed reviews of hit K-content with topic modeling and translated the results into marketing insights that star ratings alone do not show.",
        "features": [
            "<strong>Role</strong> Review crawling and preprocessing, keyword extraction, LDA topic modeling, visualization",
            "<strong>Action</strong> Crawled approx. 2,000 audience reviews of <em>Lovely Runner</em> and <em>Exhuma</em> with Selenium",
            "<strong>Action</strong> Cleaned the reviews, extracted key nouns with TF-IDF, and summarized them in word clouds",
            "<strong>Action</strong> Selected 26 topics by coherence score, ran LDA, and visualized topic relationships in pyLDAvis"
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

/* Korean copy for the KO toggle, keyed by slug. Only title, org, summary, features, and note
   change; dates, tags, links, and images are shared with the English entry. */
window.PROJECTS_KO = {
    "fund-ops": {
        "title": "펀드 운용 업무 자동화: 통합관리 시스템 구축",
        "org": "다원자산운용(주) 자산운용본부",
        "summary": "펀드운용팀의 일일 반복 업무를 데이터 수집부터 REPO·담보 계산, 컴플라이언스 점검, 운용지시서 생성까지 자동화하고, 팀이 실시간으로 함께 보고 검증하는 33개 펀드 통합관리 웹 시스템을 구축했습니다.",
        "features": [
            "<strong>Role</strong> 업무 워크플로우 구조화 및 시스템 기획, 백오피스 데이터 파이프라인 및 AWS 인프라 구축, Web UX/UI 디자인 및 개발, 배포·운영",
            "<strong>Action</strong> 자산 운용 업무의 워크플로우 구조화를 통해 일일 펀드 회계 처리 내역, 채권 주문, REPO 거래, 컴플라이언스 업무를 자동화하고 운용지시서·엑셀 파일 자동 생성 기능 구현",
            "<strong>Action</strong> 수탁사·백오피스 일일 파일 자동 수집, 행 단위 검증, 오류 행 사유별 분리 및 재시도 파이프라인 구축으로 확인이 필요한 파일·행을 즉시 식별",
            "<strong>Action</strong> 자본시장법 규제 한도 점검을 자동화해 운용역과 컴플라이언스가 동일한 실시간 화면을 보고, 매매 전 근접·위반 펀드를 사전 탐지",
            "<strong>Impact</strong> 오전 수기 업무 자동화로 1인당 일일 업무 시간을 2시간 &rarr; 1시간으로 단축, 운용역 8명이 33개 펀드에 매일 사용",
            "<strong>Impact</strong> 개인 파일 단위로 흩어진 업무를 팀 단위 실시간 공유로 통합해 상호 더블체크로 업무 실수 가능성을 낮추고, 매도 주문 실시간 표시로 운용역–운용지시 팀 간 협업 개선",
            "<strong>Impact</strong> 수식 약 5만 개를 시스템으로 옮기며 기존 엑셀의 수치 오류를 수정하고, 인수인계와 신규 실무자의 업무 적응을 수월하게 개선",
            "<strong>Lesson</strong> 자동화의 핵심은 기술보다 <em>어디까지 시스템에 맡기고 어디서 사람이 판단할지</em> 경계를 정하는 데 있음을 배움. 운용역의 업무 맥락을 먼저 이해하고 그 경계를 함께 정할 때, 시스템이 실제 업무에 자리 잡음"
        ],
        "note": "&#8251; 이미지 속 데이터는 모두 가상 데이터이며, 실제 회사·펀드와 무관합니다."
    },
    "article-agent": {
        "title": "Newsroom Agent: 기사 생산 자동화 멀티 에이전트",
        "org": "(주)뤼튼테크놀로지스 AX팀",
        "summary": "기자별 품질 편차를 줄이고 기사 작성을 효율화하기 위해, 기사 생산 전 과정을 자동화한 6개의 AI Agent를 기획 및 개발했습니다.",
        "features": [
            "<strong>Role</strong> 기획, 웹 크롤링·API 기반 데이터 수집 파이프라인, Agent 설계 및 개발, Web UX/UI 개발",
            "<strong>Action</strong> 기사 생산 과정의 워크플로우를 6개 에이전트 역할로 구조화하여 기획: 주제 생성, 리서치, 기자 문체를 학습한 초안 작성, 제목·부제 생성, 윤문, 독자 성별·연령별 기사 추천",
            "<strong>Action</strong> LangGraph 기반 Multi-Agent Workflow를 설계하고, 출력 일관성을 위해 Prompt Engineering 및 Few-shot 적용",
            "<strong>Impact</strong> 기사 초안 작성 에이전트 아키텍처가 정부기관 보도자료 작성 에이전트의 핵심 구조로 사용되어 계약 수주에 기여"
        ]
    },
    "quant-research": {
        "title": "주식형 사모펀드 팩터 리서치 및 백테스트 환경 구축",
        "org": "다원자산운용(주) 자산운용본부",
        "summary": "KOSPI·KOSDAQ 25년의 시장 및 재무 데이터(약 3억 건)를 DB와 데이터 파이프라인으로 재구성해, 주식형 사모펀드의 팩터 전략을 검증하는 백테스트 환경을 구축했습니다.",
        "features": [
            "<strong>Role</strong> 데이터 파이프라인 설계 및 DB 구축, 팩터 스코어링, 백테스트 및 성과 분석, 대시보드 시각화",
            "<strong>Action</strong> 데이터 정규화 및 표준화, Python ETL을 통한 MySQL 분석 DB 구축",
            "<strong>Action</strong> SQL 기반 팩터 스코어링, 5분위 백테스트 구현, 월·분기·반기 리밸런싱별 베타 중립 롱숏 수익률과 IC로 팩터 유효성 검증",
            "<strong>Impact</strong> 백테스트 시간 80% 단축, 결과를 대시보드 리포트로 제공해 팩터 선정 판단 지원",
            "<strong>Impact</strong> 팩터 상위 그룹의 연 수익률 22.1%로 KOSPI 대비 약 3배 성과를 확인하고, 실제 펀드 운용 전략에 기여 (해당 펀드 설정 이후 누적 +83%, 2026.05 기준)"
        ]
    },
    "rider-safety": {
        "title": "배달 라이더 사고 부상 예측 및 산재 신청 안내 서비스",
        "org": "제33회 중앙대학교 인공지능인문학 국내학술대회 연구우수상",
        "summary": "배달 라이더 사고는 늘고 있지만 사고를 겪은 라이더 10명 중 1명만 산재 보상을 받는 문제를 해결하기 위해, 사고 시 상해 정도를 예측하고 산재 신청 절차를 안내하는 AI 서비스를 기획했습니다.",
        "features": [
            "<strong>Role</strong> 문제 정의 및 서비스 기획, 사고 데이터 수집·전처리, EDA, ML 예측 모델링, ChatGPT API 기반 산재 안내 알림 구현",
            "<strong>Action</strong> 서울시 이륜차 사고 14,944건(2021–2023) 수집, 연령·시간대 범주화, 시간대·지역·도로형태·법규위반별 EDA",
            "<strong>Action</strong> ML 모델 7개를 튜닝하며 비교해 XGBoost를 최종 선정하고, Feature Importance로 주요 위험 요인 도출",
            "<strong>Action</strong> 예측된 상해 정도를 ChatGPT 프롬프트에 연동해 필요 서류·지정 의료기관 찾는 법·행정 절차를 문자로 자동 안내",
            "<strong>Impact</strong> 정확도 96.5%·F1-score 0.96 달성, 연구우수상 수상"
        ]
    },
    "used-car-price": {
        "title": "미국 중고차 가격 예측",
        "org": "CUAI X DArt-B Kaggle 데이터톤, 대상",
        "summary": "cars.com 미국 중고차 매물 데이터로 가격을 예측하는 Kaggle 데이터톤에서, 비정형 속성을 모델이 학습하기 용이한 피처로 정제하고 가격 결정 요인을 분석했습니다.",
        "features": [
            "<strong>Role</strong> 문제 정의, EDA, 데이터 전처리 및 Feature Engineering, 인사이트 도출",
            "<strong>Action</strong> 엔진·변속기·색상 데이터 정형화 및 마력·배기량·변속기 유형·색상 조합 피처로 재구성",
            "<strong>Action</strong> AutoGluon으로 여러 ML 모델(RF·LightGBM·XGBoost·CatBoost 등)을 Stacking Ensemble해 가격 예측",
            "<strong>Action</strong> EDA와 통계 검정으로 주행거리·모델·출시 연도를 핵심 가격 요인으로 도출하고, 1990년대 레트로 차량의 가격 프리미엄 현상 발견",
            "<strong>Impact</strong> 예측 성능 20% 개선 및 대상 수상"
        ]
    },
    "sanjae-mate": {
        "title": "산재메이트: 산재 신청 올인원 AI 서비스",
        "org": "안전한 데이터 활용 분야 특허 공모전, 장려상",
        "summary": "복잡한 신청 절차와 병원·재활 정보 부족으로 산재보험 이용률이 낮은 문제를 해결하기 위해, 산재 예방부터 신청·승인·재활까지 한 곳에서 돕는 올인원 앱 서비스를 기획했습니다.",
        "features": [
            "<strong>Role</strong> 문제 정의 및 서비스 기획, 공공 데이터 수집·전처리, 웹 크롤링, ML 예측 모델링, ChatGPT API 기반 리뷰 요약 구현",
            "<strong>Action</strong> 산재 지정의료기관·직업재활기관 주소를 위경도로 변환해 지도 시각화",
            "<strong>Action</strong> 카카오맵 병원 리뷰를 Selenium으로 크롤링하고 ChatGPT API로 최신 리뷰 요약",
            "<strong>Action</strong> 사고재해 데이터 107,180건을 학습해 연령·업종·근속기간에 따라 발생 가능성이 높은 재해 유형을 예측하는 ML 모델 구축",
            "<strong>Impact</strong> 서비스 프로토타입 및 앱 설계 완성, 특허 공모전 장려상 수상"
        ]
    },
    "onchain-tracing": {
        "title": "WannaCry 랜섬웨어 자금 온체인 추적",
        "org": "가상자산 추적 실전대회, 장려상",
        "summary": "2017년 150개국 20만 대 이상의 컴퓨터를 감염시킨 WannaCry 랜섬웨어 공격에서, 피해자들이 지불한 비트코인 몸값이 어떻게 세탁·현금화되었는지 블록체인 거래 기록으로 추적했습니다.",
        "features": [
            "<strong>Role</strong> 추적 범위 정의, 온체인 자금 흐름 분석, 자금 세탁 수법 분석",
            "<strong>Action</strong> Chainalysis Reactor로 1.0·2.0 버전 몸값 주소를 클러스터링하고 지출 거래를 따라 자금 흐름 추적",
            "<strong>Action</strong> ShapeShift·Changelly를 거쳐 Monero로 전환된 자금과, 소액으로 분할되어 여러 거래소·P2P로 송금된 자금 경로 추적",
            "<strong>Action</strong> 자금 세탁 과정을 체인호핑 → Monero 전환 → 소액 분할 → KYC 미비 거래소 현금화의 4단계로 구조화",
            "<strong>Impact</strong> 약 4.7 BTC(1.0)·52 BTC(2.0)의 Monero 전환 경로 규명, 장려상 수상"
        ]
    },
    "dpfl-fusion": {
        "title": "DPFL-FUSION: SHAP 기반 최적 노이즈 생성",
        "org": "2024 중앙대학교 인공지능학회 CUAI 동계컨퍼런스, 대상",
        "summary": "연합학습에 차등 프라이버시(DP)를 적용하면 모든 피처에 같은 노이즈가 더해져 모델 성능이 떨어지는 문제를 해결하기 위해, SHAP 피처 중요도에 따라 노이즈를 차등 부여하는 프레임워크를 제안했습니다.",
        "features": [
            "<strong>Role</strong> 연구 방향 설정 및 가설 수립, 노이즈 분배 방법 설계, MNIST 실험 및 결과 분석",
            "<strong>Action</strong> SHAP으로 피처 중요도를 산출해 중요한 피처에는 적은 노이즈, 덜 중요한 피처에는 많은 노이즈 부여",
            "<strong>Action</strong> 지수·역수·시그모이드 등 연속 매핑 함수로 노이즈를 세밀하게 분배하고, 전체 노이즈 에너지를 유지해 DP 조건 보장",
            "<strong>Action</strong> 값이 0인 가짜 피처를 추가해 노이즈를 대신 흡수하도록 설계하고, MNIST에서 프라이버시–성능 트레이드오프 분석",
            "<strong>Impact</strong> 동일 DP 조건에서 기존 Adaptive DP 방법(Talaei, 2024) 대비 성능 개선, 동계 컨퍼런스 대상 수상"
        ]
    },
    "hai-anomaly": {
        "title": "HAI 보안 데이터셋 이상 탐지",
        "org": "CUAI 중앙대학교 인공지능 학회",
        "summary": "발전소 산업제어시스템(ICS)을 모사한 HAI 시계열 데이터에서 드물게 발생하는 공격 구간을 찾아내기 위해, 정상 패턴을 학습한 AutoEncoder로 이상을 탐지하는 모델을 개발했습니다.",
        "features": [
            "<strong>Role</strong> 데이터 전처리, 딥러닝 모델링 및 하이퍼파라미터 최적화",
            "<strong>Action</strong> 약 55만 건 시계열에서 평균·표준편차·중앙값 기반 비대칭도 피처 생성, 결측 칼럼 제거 및 RobustScaler 정규화",
            "<strong>Action</strong> SMOTE로 희소한 공격 구간의 클래스 불균형 보정",
            "<strong>Action</strong> 재구성 오차 기반 AutoEncoder를 Optuna로 최적화하고, 95%·98%·동적 임계값을 비교해 이상 판정 기준 설정",
            "<strong>Impact</strong> 시계열 이상 탐지 지표 TaPR 0.53 달성"
        ]
    },
    "kcontent-nlp": {
        "title": "K-콘텐츠 리뷰 NLP·토픽 모델링",
        "org": "CUAI 중앙대학교 인공지능 학회",
        "summary": "평점보다 고도화된 흥행 K-콘텐츠의 시청자 반응을 파악하기 위해, 리뷰 텍스트를 토픽 모델링으로 분석해 마케팅 인사이트를 도출했습니다.",
        "features": [
            "<strong>Role</strong> 리뷰 데이터 크롤링 및 전처리, 핵심 키워드 추출, LDA 토픽 모델링 및 시각화",
            "<strong>Action</strong> Selenium으로 〈선재 업고 튀어〉·〈파묘〉 관객 리뷰 약 2,000건 수집",
            "<strong>Action</strong> TF-IDF로 리뷰 데이터를 정제하고 핵심 명사를 추출해 워드클라우드로 요약",
            "<strong>Action</strong> Coherence 점수로 토픽 수(26개)를 선정해 LDA 토픽 모델링, pyLDAvis로 토픽 간 관계 시각화"
        ]
    }
};
