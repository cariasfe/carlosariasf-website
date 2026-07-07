export interface BoardEntry {
  organization: string
  dates: string
  description: string
  extra?: string
}

export const boards: BoardEntry[] = [
  {
    organization: "Council for Entrepreneurial Development (CED)",
    dates: "2018 – 2023",
    description:
      "CED connects entrepreneurial companies with high-growth resources to accelerate business growth.",
    extra:
      "High-Touch Support and Education: CED acts as the connective hub for entrepreneurial success, providing tailored support, education, access to capital, and crucial connections. Programs like Connect to Capital have facilitated over 10,000 investor introductions since 2014, enabling entrepreneurs to secure vital funding.",
  },
  {
    organization: "William Peace University",
    dates: "2020 – 2023",
    description:
      "William Peace University's mission is to prepare students for careers in the organizations of tomorrow. Rooted in the liberal arts tradition, the student develops an appreciation for life-long learning, a focus on meaningful careers, and skills for ethical citizenship.",
  },
]
