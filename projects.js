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
     features    bullet points (HTML allowed)
     links       [{ label, href }]
     tags        tool / stack chips
   ============================================================ */
window.PROJECTS = [
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
            "images/projects/article-agent/05.jpg",
            "images/projects/article-agent/04.png"
        ],
        "features": [
            "<strong>Problem</strong> Newsroom workflows (topic finding, drafting, headlines, copy review) were manual bottlenecks, and output quality varied by reporter",
            "<strong>Action</strong> Mapped the newsroom workflow end to end and scoped six AI agents for article writing automation against its bottlenecks: topic recommendation, topic research, drafting, headline and subhead generation, copy review, and article recommendation",
            "<strong>Action</strong> Built a LangGraph multi-agent system with prompt engineering and few-shot examples; the drafting agent learns a reporter&rsquo;s style from their recent articles, and the recommendation agent personalises picks by readership",
            "<strong>Action</strong> Owned delivery end to end, from crawling and API data pipelines to UI planning and the Gradio and Streamlit frontends"
        ],
        "links": [],
        "tags": [
            "Python",
            "LangGraph",
            "Gradio",
            "Streamlit",
            "Git",
            "GPT",
            "Claude",
            "Qwen",
            "Gemini",
            "Figma"
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
            "<strong>Problem</strong> 25 years of KOSPI and KOSDAQ market and financial data (about 300 million rows) sat in scattered Excel files, slowing factor research for a CSSP private fund",
            "<strong>Action</strong> Rebuilt it into a MySQL database through a Python ETL pipeline: wide-to-long reshaping, column standardisation, and chunked loading",
            "<strong>Action</strong> Implemented factor scoring and quintile backtests in SQL, with 1, 3, and 6-month rebalancing, beta-neutral long&ndash;short returns, and IC, plus a performance dashboard",
            "<strong>Result</strong> Top quintile returned 22.1% annualised against 7.1% for the KOSPI (IC 0.182); contributed to a 3.9% average excess return (Jul 2025) and a 60% cut in compute time"
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
            "Designed an injury and accident prevention service on traffic accident data, addressing the rise in platform-worker accidents",
            "Ran EDA on three years of Seoul motorcycle accident data and built an XGBoost injury severity model, reaching 96% accuracy and F1-score",
            "Delivered real-time risk warnings and post-accident injury-claim messaging through the model and the OpenAI API"
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
            "<strong>Problem</strong> Predict US used-car prices from listings with messy engine, transmission, and colour fields",
            "<strong>Action</strong> Defined the problem and ran EDA on price formation by brand, model year, and mileage; cleaned the raw fields into model-ready features",
            "<strong>Action</strong> Stacked and ensembled models with AutoGluon",
            "<strong>Result</strong> Improved prediction performance 20% and won the Grand Prize; identified mileage, model, and release year as the core price drivers, with a distinct premium on retro cars"
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
            "<strong>Problem</strong> Injured workers under-use industrial accident insurance because filing is complex and slow, and information on designated hospitals and rehabilitation is scattered",
            "<strong>Action</strong> Defined the user problem across prevention, filing, approval, and rehabilitation, and scoped an all-in-one service on KCOMWEL and Ministry of Employment and Labor open data",
            "<strong>Action</strong> Connected the public datasets into three features: a geocoded map of designated hospitals and rehab centres, crawled hospital reviews summarised with the ChatGPT API, and an accident-type model trained on 107,180 records",
            "<strong>Result</strong> Delivered a working prototype and app design, and received an Honorable Mention"
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
            "<strong>Problem</strong> Trace where the WannaCry ransom went after the 2017 attack that infected 200,000+ computers across 150 countries",
            "<strong>Action</strong> Defined the tracing scope and applied entity resolution and link analysis in Chainalysis Reactor: clustered ransom addresses for versions 1.0 and 2.0 into entities and traced their fund flows",
            "<strong>Action</strong> Structured the laundering process into four steps: chain-hopping, conversion to Monero, splitting into small amounts, and cash-out through low-KYC exchanges",
            "<strong>Result</strong> Mapped about 4.7 BTC (1.0) and 52 BTC (2.0) from ransom wallets through ShapeShift and Changelly into Monero, and placed 3rd"
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
            "<strong>Problem</strong> Differential privacy protects federated learning from gradient leakage, but uniform noise on every feature degrades model accuracy",
            "<strong>Action</strong> Set the research direction and hypotheses: scale noise per feature by SHAP importance through continuous mapping functions, keeping total noise energy fixed so the DP guarantee holds",
            "<strong>Action</strong> Added zero-valued fake features to absorb noise away from important features, and analysed the privacy&ndash;performance tradeoff on MNIST",
            "<strong>Result</strong> Outperformed a prior adaptive DP method (Talaei, 2024) under the same DP guarantee, and won the Grand Prize"
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
            "<strong>Problem</strong> Detect attacks in large-scale industrial control system time series (HAI dataset), where attack points are rare",
            "<strong>Action</strong> Built the preprocessing pipeline: missing value handling, scaling, feature generation, and SMOTE for class imbalance",
            "<strong>Action</strong> Trained autoencoders that flag anomalies by reconstruction error, tuning hyperparameters with Optuna and the error threshold separately",
            "<strong>Result</strong> Reached a TaPR of 0.53"
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
            "<strong>Problem</strong> Star ratings alone do not show what audiences valued in hit K-content, which limits marketing and follow-up planning",
            "<strong>Action</strong> Crawled about 2,000 audience reviews of <em>Lovely Runner</em> and <em>Exhuma</em> with Selenium, then cleaned them and extracted nouns with Mecab-ko and TF-IDF",
            "<strong>Action</strong> Ran LDA with the topic count chosen by coherence score (26 topics) and visualized topic relationships in pyLDAvis",
            "<strong>Result</strong> Surfaced each title&rsquo;s core appeal: story immersion, character appeal, and emotional response for <em>Lovely Runner</em>; suspense, mise-en-sc&egrave;ne, and acting for <em>Exhuma</em>"
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
    "article-agent": {
        "title": "Newsroom Agent",
        "org": "(주)뤼튼테크놀로지스 AX팀",
        "features": [
            "<strong>문제</strong> 기사 주제 선정·초안 작성·제목 작성·교정이 수작업 중심으로 진행되어 기자 생산성 저하 및 품질 편차 발생",
            "<strong>실행</strong> 기사 생산 과정(주제 생성, 리서치, 초안 작성, 제목·부제 생성, 윤문, 추천)을 분리하여 6개 역할의 AI Agent로 구조화",
            "<strong>실행</strong> LangGraph 기반 Multi-Agent Workflow 설계 및 Prompt Engineering·Few-shot을 통한 출력 일관성 개선. 기자 문체 학습 기반 초안 생성, 성별·연령 기반 기사 추천 구현",
            "<strong>실행</strong> 웹 크롤링·API Call 기반 외부 데이터 수집 자동화부터 Gradio·Streamlit Web UI 구현까지 단독 수행"
        ]
    },
    "quant-research": {
        "title": "CSSP 사모펀드 퀀트 리서치",
        "org": "다원자산운용(주) 자산운용본부",
        "features": [
            "<strong>문제</strong> KOSPI·KOSDAQ 25년, 약 3억 건의 시계열 데이터가 엑셀 기반으로 관리되어 팩터 리서치의 처리 속도와 확장성에 한계",
            "<strong>실행</strong> Python ETL(Wide→Long 변환, 컬럼 표준화, 분할 적재)을 통해 MySQL 중심 데이터 파이프라인으로 재설계",
            "<strong>실행</strong> 팩터 스코어링 및 5분위 백테스트를 SQL로 구현(월·분기·반기 리밸런싱, 베타 중립 롱숏, IC)하고 대시보드형 레포트로 시각화",
            "<strong>성과</strong> 1분위 연환산 수익률 22.1%(KOSPI 7.1%), IC 0.182 확인 → 연산 속도 60% 단축, 평균 3.9% 펀드 초과수익률(&rsquo;25.07) 기여"
        ]
    },
    "rider-safety": {
        "title": "플랫폼 배달 라이더를 위한 AI 예측 서비스",
        "org": "제33회 중앙대학교 인공지능인문학 국내학술대회 연구우수상",
        "features": [
            "플랫폼 노동자 사고 증가 문제에 대응하여 교통사고 데이터 기반 부상·사고 예방 서비스 기획",
            "서울시 이륜차 사고 3개년 데이터 EDA 및 XGBoost 기반 부상 심각도 예측 모델링 (정확도·F1-score 96%)",
            "예측 모델과 OpenAI API를 연계한 실시간 위험 알림 및 사고 후 산재 신청 안내 기능 구현"
        ]
    },
    "used-car-price": {
        "title": "미국 중고차 가격 예측",
        "org": "CUAI X DArt-B Kaggle 데이터톤, 대상",
        "features": [
            "<strong>문제</strong> 엔진·변속기·색상 등 차량 속성 데이터가 표준화되어 있지 않아 일관된 분석 및 가격 예측 모델링에 한계",
            "<strong>실행</strong> 문제 정의 및 브랜드·연식·주행거리 중심 가격 형성 구조 EDA, 핵심 Feature 정제 및 파생 변수 생성",
            "<strong>실행</strong> AutoGluon 기반 모델 Stacking·Ensemble 적용",
            "<strong>성과</strong> 예측 성능 20% 개선 및 대상 수상. 주행거리·모델·출시 연도를 핵심 가격 요인으로 도출하고 레트로 차량 프리미엄 현상 발견"
        ]
    },
    "sanjae-mate": {
        "title": "산재메이트: 산재 신청 올인원 AI 서비스",
        "org": "안전한 데이터 활용 분야 특허 공모전, 장려상",
        "features": [
            "<strong>문제</strong> 복잡한 신청 절차와 긴 처리 기간, 지정 병원·재활 정보 부족으로 산재보험 이용률 저조",
            "<strong>실행</strong> 예방–신청–승인–재활 단계별 사용자 문제 정의 및 근로복지공단·고용노동부 공공 데이터 기반 올인원 서비스 기획",
            "<strong>실행</strong> 공공 데이터를 3개 기능으로 연결: 지정의료기관·재활기관 지도 시각화, 병원 리뷰 크롤링 및 ChatGPT API 요약, 107,180건 데이터 기반 재해유형 예측 모델",
            "<strong>성과</strong> 서비스 프로토타입 및 앱 설계 완성, 특허 공모전 장려상 수상"
        ]
    },
    "onchain-tracing": {
        "title": "WannaCry 랜섬웨어 자금 온체인 추적",
        "org": "가상자산 추적 실전대회, 장려상",
        "features": [
            "<strong>문제</strong> 2017년 150개국 20만 대 이상을 감염시킨 WannaCry 랜섬웨어의 몸값 자금 흐름 추적 필요",
            "<strong>실행</strong> 추적 범위 정의 및 Chainalysis Reactor 기반 엔티티 연결 분석으로 1.0·2.0 버전 몸값 주소 클러스터링 및 자금 흐름 추적",
            "<strong>실행</strong> 자금 세탁 과정을 체인호핑 → Monero 전환 → 소액 분할 → KYC 미비 거래소 현금화의 4단계로 구조화",
            "<strong>성과</strong> 약 4.7 BTC(1.0)·52 BTC(2.0)가 ShapeShift·Changelly를 거쳐 Monero로 전환된 경로 규명, 장려상 수상"
        ]
    },
    "dpfl-fusion": {
        "title": "DPFL-FUSION: SHAP 기반 최적 노이즈 생성",
        "org": "2024 중앙대학교 인공지능학회 CUAI 동계컨퍼런스, 대상",
        "features": [
            "<strong>문제</strong> 연합학습의 그래디언트 유출 방지를 위해 차등 프라이버시(DP) 적용 시, 전체 피처에 동일한 노이즈가 부여되어 모델 성능 저하 발생",
            "<strong>실행</strong> 연구 방향 및 가설 설정: SHAP 중요도 기반 연속 매핑 함수로 피처별 노이즈를 차등 부여하고, 전체 노이즈 에너지를 유지해 DP 조건 보장",
            "<strong>실행</strong> 값이 0인 가짜 피처를 추가해 주요 피처의 노이즈를 흡수하도록 설계, MNIST 기반 프라이버시–성능 트레이드오프 분석",
            "<strong>성과</strong> 동일 DP 조건에서 기존 Adaptive DP 방법(Talaei, 2024) 대비 성능 개선, 동계 컨퍼런스 대상 수상"
        ]
    },
    "hai-anomaly": {
        "title": "HAI 보안 데이터셋 이상 탐지",
        "org": "CUAI 중앙대학교 인공지능 학회",
        "features": [
            "<strong>문제</strong> 공격 구간이 희소한 대규모 산업제어시스템(ICS) 시계열 데이터(HAI)에서의 공격 탐지",
            "<strong>실행</strong> 결측치 처리·스케일링·Feature 생성 및 SMOTE 기반 클래스 불균형 보정 전처리 파이프라인 구축",
            "<strong>실행</strong> 재구성 오차 기반 AutoEncoder 이상 탐지 모델링, Optuna 하이퍼파라미터 최적화 및 임계값 튜닝",
            "<strong>성과</strong> TaPR 0.53 달성"
        ]
    },
    "kcontent-nlp": {
        "title": "K-콘텐츠 리뷰 NLP·토픽 모델링",
        "org": "CUAI 중앙대학교 인공지능 학회",
        "features": [
            "<strong>문제</strong> 평점만으로는 흥행 K-콘텐츠에 대한 관객 반응을 구체적으로 파악하기 어려워 마케팅·후속작 기획 활용에 한계",
            "<strong>실행</strong> Selenium 기반 〈선재 업고 튀어〉·〈파묘〉 관객 리뷰 약 2,000건 수집, Mecab-ko·TF-IDF 기반 명사 추출 및 전처리",
            "<strong>실행</strong> Coherence 기반 토픽 수(26개) 선정 후 LDA 토픽 모델링, pyLDAvis로 토픽 간 관계 시각화",
            "<strong>성과</strong> 작품별 핵심 소구점 도출(〈선재 업고 튀어〉: 스토리 몰입감·캐릭터 매력·감정적 반응 / 〈파묘〉: 서스펜스·미장센·배우 연기)"
        ]
    }
};
