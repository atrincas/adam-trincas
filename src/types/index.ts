export type PersonalDetails = {
  email: string
  fullName: string
  github: { link: string; title: string }
  linkedIn: { link: string; title: string }
  location: string
  profession: string
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
