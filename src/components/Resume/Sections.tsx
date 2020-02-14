import React from 'react'
import { SubSection } from './styles'

type Props = {
  mainTitle: string
  subTitle: string
  period: string
  tasks?: string[]
}

function SkillsSection({ title, skills }) {
  return (
    <section>
      <h4>{title}</h4>
      <ul>
        {skills.map(skill => (
          <li>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

function ExperienceSection({ mainTitle, subTitle, period, tasks }: Props) {
  return (
    <SubSection>
      <h4>
        <strong>{mainTitle}</strong>
      </h4>
      <h5>{subTitle}</h5>
      <h6>{period}</h6>
      {tasks && tasks.map(task => <li>{task}</li>)}
    </SubSection>
  )
}

export { SkillsSection, ExperienceSection }
