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
  education: Education[]
  frameworksLibraries: string[]
  jobExperience: JobExperience[]
  languages: string[]
  softSkills: string[]
}

export type StateKey =
  | 'education'
  | 'frameworksLibraries'
  | 'jobExperience'
  | 'languages'
  | 'softSkills'
