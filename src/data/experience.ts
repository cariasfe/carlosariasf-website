export interface ExperienceEntry {
  organization: string
  role?: string
  dates: string
}

export const experience: ExperienceEntry[] = [
  { organization: "Sandvine", dates: "September 2020 – Present" },
  {
    organization: "Council for Entrepreneurial Development",
    role: "Board Member",
    dates: "January 2018 – June 2023",
  },
  {
    organization: "William Peace University",
    role: "Board Member",
    dates: "March 2020 – February 2023",
  },
  { organization: "Cisco", dates: "June 2013 – September 2020" },
  {
    organization: "Tekelec (Acquired by Oracle)",
    dates: "August 2009 – June 2013",
  },
  {
    organization: "mBalance B.V. (Acquired by Tekelec)",
    dates: "October 2007 – August 2009",
  },
  {
    organization: "European Computer Telecom",
    dates: "July 2006 – September 2007",
  },
  { organization: "Telefónica R&D", dates: "June 2005 – July 2006" },
  {
    organization: "IBM Business Consulting Group",
    dates: "November 2004 – June 2005",
  },
]
