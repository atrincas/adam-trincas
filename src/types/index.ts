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

export type State = {
  language: string
}

export type Context = {
  state: State
  dispatch: React.Dispatch<Action>
}

export type Children = {
  children: React.ReactNode
}

export type Action = {
  type: 'LANGUAGE_CHANGED'
  value: string
}
