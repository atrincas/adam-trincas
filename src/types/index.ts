export type personalDetails = {
  fullName: string
  profession: string
  email: string
  github: string
  linkedIn: string
  location: string
}
export type Education = {
  mainTitle: string
  period: string
  subTitle: string
}

export type JobExperience = {
  mainTitle: string
  period: string
  subTitle: string
  tasks: string[]
}

export type State = {
  personalDetails: personalDetails
  education: Education[]
  frameworksLibraries: string[]
  jobExperience: JobExperience[]
  languages: string[]
  softSkills: string[]
}
