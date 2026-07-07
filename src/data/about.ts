export interface QASubItem {
  heading: string
  text: string
}

export interface QAItem {
  question: string
  answer?: string
  subItems?: QASubItem[]
}

export const bioParagraphs: string[] = [
  "Product Management Leader with over 18 years of experience driving innovation, growth, and digital transformation in the technology sector. Recognized for delivering strategic product visions and leveraging AI/ML innovations in new ventures. I have a proven track record of scaling businesses, launching market-disrupting products, and achieving remarkable revenue growth.",
  "At Sandvine, I served as Senior Director of Product Management - Data Analytics & AI, spearheading a global team responsible for half of the company's product portfolio. Through my leadership, I launched groundbreaking AI/ML products that optimized networks and increased revenue by $45 million within three years. I pioneered innovative frameworks for predictive analytics, reducing network CapEx/OpEx by billions and creating immense customer value.",
  "Previously at Cisco, I was pivotal in leading the Mobility CTO Office and new venture partnerships. I built strategic product roadmaps, analyzed emerging technology opportunities, and developed robust GTM strategies that grew revenue from zero to $100 million in just three years. I also led the shift from perpetual licensing to subscription models, boosting recurring revenue streams by $30 million annually.",
  "With deep expertise across AI-driven product strategy, Agile/DevOps methodologies, and cross-functional leadership, I have enabled organizations to accelerate innovation and enhance customer value. I have played instrumental roles during critical transitions, including Private Equity ownership, M&A integrations, and major product line transformations.",
  "I hold an MBA from Northwestern University's Kellogg School of Management and an Executive Certificate in Product Strategy & Innovation from MIT Sloan. Passionate about empowering future leaders, I have served on the boards of the Council for Entrepreneurial Development (CED) and William Peace University, mentoring startups and driving entrepreneurial growth.",
  "Beyond the office, I remain dedicated to fostering collaboration and innovation within the tech community. Whether launching AI-powered solutions or guiding organizations through growth strategies, I am driven by solving complex challenges and delivering measurable impact.",
]

export const keySkills =
  "Product Management, AI/ML Product Strategy, Leadership, Go-to-Market Strategy, Data Analytics, Digital Transformation, Innovation, Agile/DevOps, Revenue Growth, Business Development"

export const qaItems: QAItem[] = [
  {
    question: "The story of my background picture",
    answer:
      "My passions are reading, learning about new technologies, and investing. I strongly believe in Warren Buffett's quote, \"I am a better investor because I am a businessman, and a better businessman because I am an investor.\" I love the mastery of mental models, the art of rational decision-making and the journey of learning. I am thrilled by the process of researching new technologies, sectors, companies, and business models to understand what makes them unique and how likely they are to succeed in the long term. I am heavily influenced by Marty Cagan, Jim Collins, Warren Buffett, Charlie Munger, and many more. I am an insatiable reader, delighted to bathe in the wisdom of great people who lived before me. My favorite topics are the great mental models, new technologies, investing, business moats and the history of companies.",
  },
  {
    question: "What should be taught in school that isn't already?",
    subItems: [
      {
        heading: "Biases and Mental Models",
        text: "There's a famous speech delivered by Charlie Munger at USC's Business School in 1994 titled Elementary Worldly Wisdom. In it, Munger argues that you should learn lots of mental models from a large selection of disciplines and then use that to provide context and color to your decision-making processes. Munger asserts that this practice leads to wisdom and that he became successful at investing and in life.",
      },
      {
        heading: "How to Create a Happy and Meaningful Life",
        text: "Understanding the latest scientific research to deepen your understanding of how to live happily and meaningfully. Gain insight into what is most important to you and how you can achieve it. Understand how your use of time impacts happiness and fulfillment. Learn to appreciate the present moments of your life more fully.",
      },
      {
        heading: "Personal Finance",
        text: "Finance should be taught in schools very early because it equips people with essential life skills crucial for navigating the complexities of the modern world. Understanding finance empowers individuals to make informed decisions about budgeting, saving, investing, and managing debt, all of which are fundamental to personal financial stability and success. By teaching finance in schools, we can help students develop a strong financial foundation from a young age, setting them on a path toward financial literacy and responsible financial behavior throughout their lives. Additionally, financial education fosters critical thinking and problem-solving skills as students learn to analyze financial situations, evaluate risks, and make strategic choices. Ultimately, integrating finance into the curriculum prepares students to confidently manage their finances, plan for the future, and achieve their long-term goals.",
      },
    ],
  },
  {
    question: "What would I do all day, if money was no object",
    answer:
      "If money were no object, I would spend my days immersed in the things that fuel my curiosity and creativity: reading voraciously, learning endlessly, and building solutions that challenge the status quo. I'm deeply passionate about understanding how the world works—through books, deep dives into emerging technologies, and exploring the mechanics of successful business models. What excites me most is the process of turning insights into action—transforming raw ideas into innovative products and ventures that make a real impact. Whether it's experimenting with AI, mentoring startups, or crafting go-to-market strategies that unlock growth, I find joy in the intersection of learning and building. Innovation is not just what I do—it's how I think and how I express my love for solving problems that matter.",
  },
  {
    question: "The life experience that best prepared me for executive responsibility",
    answer:
      "My collegiate journey stands out as the ultimate training ground for executive leadership, akin to the invaluable lessons shared in Ben Horowitz's \"The Hard Thing About Hard Things.\" Reflecting on those seven years—completing both my Bachelor's and Master's Degrees in a timeframe notably shorter than the norm—brings to mind the trials and triumphs encountered amidst an academic landscape marked by unconventional grading systems, perplexing exam content, and an overwhelming workload that often encroached on sleep. Yet, within this crucible of challenges, I discovered a community of resilient individuals who faced adversity with unwavering determination and camaraderie. Our shared experiences taught us that survival was paramount, fostering a collective spirit that propelled us forward despite the odds, united by a singular objective and fueled by moments of shared joy. Through these trials, I gleaned profound insights into authentic leadership, the transformative power of teamwork, the symbiotic relationship between teaching and learning, the generosity of lifting others, and the humility required to glean wisdom from missteps. True leaders, I realized, are perpetual students and teachers, fostering an environment where every member is empowered to soar higher together as a cohesive unit.",
  },
]
