\documentclass[letterpaper,11pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage[usenames,dvipsnames]{color}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\usepackage{fontawesome5}
\input{glyphtounicode}

\pagestyle{fancy}
\fancyhf{}
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}
\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}
\pdfgentounicode=1

\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

\newcommand{\resumeItem}[1]{\item\small{{#1 \vspace{-2pt}}}}
\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
  \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
    \textbf{#1} & {\color{blue} #2} \\
    \textit{\small#3} & \textit{\small #4} \\
  \end{tabular*}\vspace{-7pt}
}
\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]} 
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}[leftmargin=*]}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

\begin{document}

%----------HEADING----------
\begin{center}
    \textbf{\Huge \scshape Vinayak Sharma} \\ \vspace{2pt}
    \small 
    \faPhone*~\textcolor{blue}{+91-9875774558} ~|~ 
    \faEnvelope*~\href{mailto:vinayak4558sharma@gmail.com}{\textcolor{blue}{vinayak4558sharma@gmail.com}} ~|~ 
    \faLinkedin~\href{https://linkedin.com/in/vinayak-sharma-5491a9228}{\textcolor{blue}{linkedin.com/in/vinayak-sharma-5491a9228}} ~|~
   
\end{center}


%-----------CAREER OBJECTIVE-----------
\section{Career Objective}
\small{To enhance my professional skills in a dynamic and stable workplace.}

%-----------EDUCATION-----------
\section{Education}
\resumeSubHeadingListStart
  \resumeSubheading
    {Arya College of Engineering and I.T, Jaipur}{\color{blue}2021 -- 2025}
    {Bachelor of Technology in Computer Science and Engineering}{ \textbf{\color{blue}CGPA:8.66}}
  \resumeSubheading
    {Sr. Sec. Shivam Public School, Jaipur}{}
    {Senior Secondary (Science + Mathematics)}{ \textbf{\color{blue}Percentage:91.60\%}}
\resumeSubHeadingListEnd

%-----------EXPERIENCE-----------
\section{Experience}
\resumeSubHeadingListStart
  \resumeSubheading
    {Intern, Centre of Excellence (COE)}{\color{blue}June 2024 -- Sep 2024}
    {Celebal Technologies}{}
  \resumeItemListStart
    \resumeItem{Developed applications using \textbf{Python} for internal automation tasks.}
    \resumeItem{Utilized \textbf{MySQL} to manage and query structured datasets.}
    \resumeItem{Worked in a team to understand \textbf{ETL pipelines} for enterprise-level data ingestion.}
  \resumeItemListEnd
\resumeSubHeadingListEnd

%-----------PROJECTS-----------
\section{Personal Projects}
\resumeSubHeadingListStart
  \resumeSubheading
    {Predicting Housing Prices | Python, NumPy, pandas, scikit-learn, seaborn}{}
    {}{}
  \resumeItemListStart
    \resumeItem{Engineered a machine learning pipeline using \textbf{scikit-learn} to predict house prices.}
    \resumeItem{Preprocessed data with \textbf{pandas}, handled missing values and feature scaling.}
    \resumeItem{Built and evaluated a \textbf{Linear Regression} model; achieved MAE of \textbf{\color{}12.5\%}.}
    \resumeItem{Visualized key patterns using \textbf{seaborn} and matplotlib.}
  \resumeItemListEnd
\resumeSubHeadingListEnd

%-----------TECHNICAL SKILLS-----------
\section{Technical Skills}
\begin{itemize}[leftmargin=0.15in, label={}]
  \item \textbf{Languages:} Python (Proficient), Java (Basic), C++, C, SQL
  \item \textbf{Data & Tools:} Power BI, SQL, ETL Pipelines, Big Data, Data Cleaning
  \item \textbf{Libraries:} NumPy, pandas, seaborn, scikit-learn, Matplotlib
  \item \textbf{Developer Tools:} VS Code, Jupyter Notebooks, GitHub, VirtualBox
  \item \textbf{Soft Skills:} Problem Solving, Time Management, Project Management, Teamwork
\end{itemize}

%-----------CERTIFICATIONS-----------
\section{Certifications}
\begin{itemize}[leftmargin=0.15in, label={}]
  \item[]
  \begin{tabular*}{\textwidth}{@{\extracolsep{\fill}} l r}
    Python Fundamentals & \color{blue}2022 \\
    TCS iON Career Edge – Young Professional & \color{blue}2023 \\
    Introduction to MongoDB by MongoDB & \color{blue}2024 \\
    Full Stack Web Development using MERN Stack & \color{blue}2024 \\
    Data Engineering – Celebal Technologies & \color{blue}2024 \\
  \end{tabular*}
\end{itemize}


%-----------EXTRA CURRICULAR-----------
\section{Extra Curricular Activities}
\begin{itemize}
  \item Created an E-locker during JKLU Hackathon.
  \item Participated in National Level Technical Fest \textbf{EXERGIE}.
  \item Competed in Essay Writing on National Pollution Control Day.
  \item Played in \textbf{Arya Premier League (APL)}.
\end{itemize}

\end{document}
