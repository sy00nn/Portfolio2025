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
        "shortTitle": "Article Agent",
        "title": "Article Writing Automation AI Agent",
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
            "Built six AI agents to close the productivity and quality gap in newsrooms &mdash; topic generation, topic research, article drafting, headline and subhead generation, copy review, and article recommendation",
            "Tuned performance through a LangGraph multi-agent architecture, prompt engineering, and few-shot examples",
            "Built an automated data pipeline with web crawling and API calls",
            "Owned the work end to end, from UI planning through frontend implementation"
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
            "Rebuilt 25 years of KOSPI and KOSDAQ data &mdash; roughly 300 million rows &mdash; into a MySQL and Python ETL pipeline",
            "Implemented factor scoring and backtesting logic for the portfolio strategy",
            "Built a performance analysis and insight visualization dashboard",
            "Contributed to 3.9% average excess return (Jul 2025) and a 60% reduction in compute time"
        ],
        "links": [],
        "tags": [
            "Python",
            "pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "MySQL"
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
            "Ran EDA on three years of Seoul motorcycle accident data and built an XGBoost injury severity model",
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
            "Defined the problem and ran EDA on the price formation structure, centred on brand, model year, and mileage",
            "Cleaned engine, transmission, and colour data into model-ready features, improving overall data quality",
            "Improved price prediction performance 20% with AutoGluon stacking and ensembling",
            "Found mileage, model, and release year to be the core price drivers, with a distinct premium pattern on retro cars"
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
        "title": "Sanjae Mate &mdash; All-in-One AI Service for Industrial Injury Claims",
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
            "Planned an all-in-one platform covering prevention, claim filing, and rehabilitation on KCOMWEL and Ministry of Employment and Labor data, cutting through the complexity of the claims process",
            "Designed and prototyped the data and AI features: designated-hospital map visualization, automatic review summarization, and accident type prediction",
            "Structured the service for better information access and administrative efficiency through crawling, ML modeling, generative AI integration, and UI/UX design"
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
        "title": "On-Chain Illicit Fund Pattern Analysis",
        "category": "competitions",
        "org": "3rd Place, CAU Virtual Asset Tracing Competition",
        "date": "2024.12",
        "team": "3 people",
        "thumb": "images/projects/onchain-tracing/01.jpg",
        "gallery": [
            "images/projects/onchain-tracing/02.jpg"
        ],
        "features": [
            "Defined the problem and tracing scope for crypto crime types &mdash; scams, ransomware, DPRK-linked activity, and darknet markets &mdash; on on-chain data",
            "Visualized the on-chain analysis process: cluster identification, address relationship graphs, and fund movement paths",
            "Drew out core insights on laundering patterns, risk points, and exchange exposure, then structured fund flows by crime type"
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
            "Structured the security and performance issues in federated learning, then set the DPFL research direction and hypotheses",
            "Analysed the privacy&ndash;performance tradeoff from the DPFL-FUSION results and drew out the research value and future applications"
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
            "Built autoencoder models for time-series anomaly detection on the HAI (HIL-based Augmented ICS) security dataset",
            "Designed the preprocessing and modeling pipeline for large-scale time series: missing value handling, scaling, feature generation, and SMOTE",
            "Reached TaPR 0.53 through Optuna hyperparameter optimization and reconstruction-error threshold tuning"
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
        "title": "K-Content NLP Sentiment Analysis",
        "category": "personal",
        "org": "CUAI, Chung-Ang University AI Society",
        "date": "2024.10",
        "team": "Solo",
        "thumb": "images/projects/kcontent-nlp/thumb.png",
        "gallery": [],
        "features": [
            "Collected and analysed 4,000+ film and drama reviews, visualizing topic relationships, key keywords, and review distribution to surface how audiences responded to each title",
            "Designed the sentiment and topic analysis pipeline: crawling, preprocessing, tokenization, LDA, and pyLDAvis visualization",
            "Found <em>Lovely Runner</em> strongest on story immersion, character appeal, and emotional response, while <em>Exhuma</em> led on suspense, mise-en-sc&egrave;ne, and acting"
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
            "pyLDAvis",
            "Selenium",
            "BeautifulSoup"
        ]
    }
];
