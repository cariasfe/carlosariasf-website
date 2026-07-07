export interface ExperienceSubRole {
  role: string
  dates: string
  paragraphs: string[]
}

export interface ExperienceEntry {
  organization: string
  role?: string
  dates: string
  website?: string
  paragraphs?: string[]
  subRoles?: ExperienceSubRole[]
}

export const experience: ExperienceEntry[] = [
  {
    organization: "Precisely",
    role: "Senior Director, Product Management",
    dates: "December 2025 – Present",
    website: "https://www.precisely.com/",
    paragraphs: [
      "Lead the Data Integration product portfolio at Precisely, spanning three product lines: Precisely Connect (CDC/ETL, on-premises), Ironstream (real-time mainframe-to-cloud streaming for IBM Z and IBM i), and the Data Integration Suite (hybrid SaaS). Manage a cross-functional product team of 5 across product management and product ownership roles.",
      "Building the Intelligence Layer — an AI-orchestrated operating system for the product management lifecycle, designed to scale beyond my own product lines to automate and support Product Management practices company-wide. It enforces shared engineering and process discipline (branch hygiene, safety rules) across independent product-line repositories, centralizes task and context management, and gives teams a reusable library of PM/engineering skills (spec writing, hostile review, metrics review) without duplicating setup per team.",
    ],
  },
  {
    organization: "Sandvine",
    role: "Senior Director of Product Management",
    dates: "September 2020 – November 2025",
    website: "https://www.sandvine.com/",
    paragraphs: [
      "As part of a Private Equity portfolio company, I lead a team that drives and builds strategic vision and new product initiatives around data, analytics, and AI/ML services for network capacity planning and optimization solutions, delivering ideation, vision, go-to-market strategy, and implementation while supporting and enabling engineering, sales & marketing teams. My main responsibility is to lead the introduction of creative solutions and products to the market to address the most critical customer pain points while leading cross-functional changes across the organization to improve innovation and deliver business goals.",
      "Drove data & analytics new products portfolio and P&L execution in a competitive landscape, increasing revenue by $45M in 3 years. From market research, idea creation, and product strategy to value proposition, GTM, sales enablement, and roadmap.",
      "Disrupted network capacity planning with revolutionary and patented QoE-based data & analytics framework while leveraging AI data models to reduce the network's CapEx/OpEx by 2-5%. The solution (1) Acts as the single source of truth for independent, consistent & accurate network KPIs & capacity measurements and predictions; (2) Unlocks true drivers of congestion based on deep application & subscriber Intelligence with contextual awareness for efficient & critical decision making; (3) Leverages revolutionary App QoE data to optimize capacity planning expenses & prioritization. (Patent k8002653)",
      "Enriched Big Data teams with AI-based traffic classification and QoE data to unlock new optimization and monetization AI-based services.",
      "Built innovative AI-based congestion management solution to reduce network congestion and optimize existing network resources based on business QoE intent, resulting in 1-2% QoE-based CapEx deferral. The solution applies real-time congestion management policies based on Subscriber & Application intelligence and QoE measurements to support additional subscribers on an existing constrained resource, minimizing throughput requirements while maintaining the desired (optimal) levels of business QoE Intent. Traditional congestion management solutions hurt QoE during congested and non-congested periods because (1) they don't act in real-time when and where congestion happens, (2) they are QoE unaware, and (3) They offer limited application classification.",
      "Appointed by C-Level to execute board strategic initiatives, leading a cross-functional high-performing team to increase company valuation and improve business processes, collaboration, and teamwork.",
      "Led DevOps initiative to improve collaboration, automation, monitoring, and feedback to accelerate 4x software development lifecycle, product delivery, and customer value using agile methodologies.",
      "Led a cross-functional team of 7 people from operations, IT, finance, professional services, sales, and legal to transform and relaunch the support & maintenance program to improve revenue predictability and transition the company's business model from HW to SW in 1 year, resulting in a significant EBITDA multiple expansion. S&M represented 1/3 of the company's revenue or $80M.",
      "Developed ROI models for all company products in the portfolio to improve customer engagement and sales success and deliver on growth objectives. Built specific ROI models to target Tier 1 accounts while shaping product development to drive key metrics, resulting in a $70M funnel increase in 1 year.",
      "Enabled marketing program through product launch strategy, driving messaging, and positioning while aligning value propositions with market needs to enhance company positioning and accelerate growth.",
      "Drove impactful strategic customer engagements and large industry events while creating meaningful relationships in the industry.",
      "Managed a team of 5 people including product managers, technical product managers, and marketing.",
    ],
  },
  {
    organization: "Council for Entrepreneurial Development",
    role: "Board Member",
    dates: "January 2018 – June 2023",
    website: "https://cednc.org/",
    paragraphs: [
      "Handpicked and appointed to the largest non-profit entrepreneurial accelerators for startups in NC providing guidance and coaching.",
      "Developed strategic partnership between Cisco and CED while securing Cisco's annual donation commitment.",
      "Increased donations by initiating the certification for Cisco's matching gift program, allowing Cisco to match donations from employees.",
      "Acted as mentor and advisor for multiple startups in NC.",
    ],
  },
  {
    organization: "William Peace University",
    role: "Board Member",
    dates: "March 2020 – February 2023",
    website: "https://www.peace.edu/",
    paragraphs: [
      "Acted as advisor for the strategic direction of the University.",
      "Member of the Strategy and Finance committees.",
    ],
  },
  {
    organization: "Cisco",
    dates: "June 2013 – September 2020",
    website: "https://www.cisco.com/",
    subRoles: [
      {
        role: "Senior Product Manager - CTO Office Telco Mobility",
        dates: "August 2015 – September 2020",
        paragraphs: [
          "Responsible for Cisco Mobile Internet Architecture for Communication Service Providers, specializing in areas such as Network Transformation, 5G, Network Slicing, Software Defined Networking (SDN), Network functions virtualization (NFV), Cloud Native Network Function (CNF), Orchestration, and Information-Centric Networking (ICN). As part of the mobility CTO office, I was responsible for strategy, architecture, and software delivery in the Americas as well as driving business development and revenue in the field. The mobility CTO office was responsible for 1.2 Billion of mobility business directly, 1 Billion of IP RAN, and indirectly at least 10 Billion of enterprise revenue through the Service Provider channel.",
          "Led Mobility CTO Office new venture partnerships, identifying, assessing, developing, and scaling potential new ventures and strategic partnerships. Analyzed core and adjacent markets and technologies and prioritizing and scaling business opportunities within the organization.",
          "Product leadership driving and scaling new ventures, exploring new technologies and business models, creating a robust sales & marketing strategy for innovative AI/ML software in the mobile networking space driving revenue from zero to $100M in 3 years.",
          "Conducted complex problem-solving through critical thinking, quantitative analysis, and modeling, extracting insights from data to uncover several billion dollars in savings in new 4G/5G radio deployments which transformed customer operations and strategic planning and helped Cisco's strategic shift from SW perpetual licensing to subscription model, securing $30M in annual subscription sales over 3 years and increasing sales funnel 5X.",
          "Supported Corporate Strategy, Corporate Development, and M&A teams by becoming the subject matter expert in new venture technologies and adjacent startup developments, conducting market analysis, due diligence, business case, acquisition modeling, valuation, integration planning, and scaling to improve long-term business development activity and growth.",
        ],
      },
      {
        role: "Pre-Sales Manager",
        dates: "August 2014 – August 2015",
        paragraphs: [
          "Promoted to lead Pre-Sales in the Americas.",
          "Leveraged Cisco's Corporate strategy around Software Defined Networking (SDN), Network functions virtualization (NFV), and Cloud Native Network Function (CNF) to create a disruptive new value proposition and GTM strategy driving a recent company acquisition (Broadhop) to #1 market share in the US, increasing revenue from $10M to $70M in 2 years, replacing existing customer solutions in all Tier 1 customers in Americas and achieving 220% of my quota.",
          "Scaled new businesses in 5G, IOT, cloud, and mobile edge computing areas by implementing sales & marketing frameworks, creating new strategic plans, enabling marketing, training global sales teams, facilitating new technology seminars across the world, developing Cisco partners to scale B2B solutions, and supporting C-suite leaders.",
        ],
      },
      {
        role: "Pre-Sales Engineer",
        dates: "June 2013 – August 2014",
        paragraphs: [
          "Principal Pre-Sales engineer leading GTM strategy and technical sales engagements in LATAM to drive growth for a new company acquisition (Broadhop), achieving 170% of my quota.",
          "Subject matter expert in Network Policy and Charging Rules Function (PCRF) I assessed opportunities and risks by being the primary interface for Service Provider's solutions up to the executive and C-suite level while building long-term relationships.",
        ],
      },
    ],
  },
  {
    organization: "Tekelec (Acquired by Oracle)",
    role: "Pre-Sales Manager",
    dates: "August 2009 – June 2013",
    website: "https://www.oracle.com/",
    paragraphs: [
      "Tekelec was a telecommunications company, that developed hardware and software for wireless and fixed networks, providing IP services to help mobile carriers with network signaling (leader in STP and DSR which are routers for the signaling network), policy control (PCRF), and subscriber data management (HLR, HSS, OCS, etc).",
      "Promoted to lead pre-sales for multiple new product lines and acquisitions, including Database, Policy, and Diameter Routing in the Americas.",
      "Led the successful transition to private equity ownership and, later on, Oracle's acquisition, supporting all of America's sales, technical sales, business development, and marketing, contributing to the stabilization and growth of the organization. Steered through notable company transition to new product lines and contributed to a massive revenue uplift from $50M to $250M in 3 years.",
      "Led Pre-Sales expansion of Mobile Messaging & Security Business into new markets (North America & Latin America), doubling product revenue from $15M to $30M in 2 years.",
      "Established new business relationships across key customers by being the primary interface for customer solutions. Provided international technology seminars across North and South America. Developed strong business cases and ROI models based on customer feature requirements for Sales teams. Drove deals from a technical, strategy, and sales perspective, providing business & technical presentations and network designs. Worked closely with the Product Line Management and solution deployment team to ensure on-time successful product delivery.",
      "Joined Tekelec as a result of mBalance acquisition.",
    ],
  },
  {
    organization: "mBalance B.V. (Acquired by Tekelec)",
    role: "Pre-Sales Engineer - EMEA",
    dates: "October 2007 – August 2009",
    paragraphs: [
      "mBalance BV developed messaging software for GSM, UMTS, TDMA, and CDMA mobile operators. It offered products and solutions for message routing, security, data management, billing, storage, and network access. The company's products also included TextPass, which was a short messaging service (SMS) router platform, as well as a multi-protocol SS.7 technology stack; and TextStat, a SMS statistics, and testing equipment. In addition, it provided gateway functionality, network querying solutions, SMS routers, and SS.7 appliances for original equipment manufacturers and wireless network operators.",
      "Supported business development & sales to promote and sell B2B Messaging & Security solutions directly and through partners to Mobile Service Providers in the EMEA region which increased revenue from $7M to $15M in 2 years.",
      "As the SME of mobile technology in GSM, CDMA, 3G, and LTE networks I led bid management in response to RFIs and RFPs, was the main point of contact for technical customer presentations, provided network and system consulting services to OEM partners and Mobile Operators, architected customer-focused system and network designs together with commercial offers and developed and maintained sales and marketing enablement resources.",
    ],
  },
  {
    organization: "European Computer Telecom",
    role: "Systems Engineer",
    dates: "July 2006 – September 2007",
    website: "https://www.ect-telecoms.com/",
    paragraphs: [
      "As part of the Professional Services and Support group, I was responsible for enabling solutions for communication service providers such as Network-Based Call Centers, Televoting and Mass Calling Services, Ring Back Tone Service, Mobile Office & Advanced VPN Services, Network-Based Interactive Voice Response Services, 3G Video Services, Prepaid Mobile and Prepaid Calling Cards.",
      "As the SME I provided first and second-level technical support and maintenance, performed system installations, and SS7 interconnection testing at customer sites for complete project approval, built strong relationships with new and existing customers, and assisted in the procurement of after-sales and led internal and external training courses on SS7, SQL database structures and administration, the Intelligent Network Application Protocol (INAP), etc.",
    ],
  },
  {
    organization: "Telefónica R&D",
    role: "Systems Engineer",
    dates: "June 2005 – July 2006",
    website: "https://www.telefonica.com",
    paragraphs: [
      "Principal software engineer of innovative NFC technology applications for mobile, I managed a team of two engineers for research, feature development, and roadmap while providing first and second-level support on new NFC technology in mobile.",
      "Responsible for integrating the Communology tool in Telefonica and managing the access for the different manufacturers to certify security and privacy features in mobile devices.",
    ],
  },
  {
    organization: "IBM Business Consulting Group",
    role: "Software Engineer",
    dates: "November 2004 – June 2005",
    website: "https://www.ibm.com/consulting",
    paragraphs: [
      "Collaborated in the migration of Orange Spain CRM to Siebel System for client management. My main task in the project involved batch integration (MSSQL and Oracle) in both Unix and Windows, as well as strong development skills in Java and XML.",
    ],
  },
]
