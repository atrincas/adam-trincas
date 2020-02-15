import React from 'react'
import { SubSection, SkilssSectionTitle, SkillsList, TasksList } from './styles'

type SkillsSectionProps = {
  title: string
  skills: string[]
}
type ExperienceSectionProps = {
  mainTitle: string
  subTitle: string
  period: string
  tasks?: string[]
}

function SkillsSection({ title, skills }: SkillsSectionProps) {
  return (
    <section>
      <SkilssSectionTitle>{title}</SkilssSectionTitle>
      <SkillsList>
        {skills.map(skill => (
          <li>{skill}</li>
        ))}
      </SkillsList>
    </section>
  )
}

function ExperienceSection({ mainTitle, subTitle, period, tasks }: ExperienceSectionProps) {
  return (
    <SubSection>
      <h4>
        <strong>{mainTitle}</strong>
      </h4>
      <h5>{subTitle}</h5>
      <h6>{period}</h6>
      {tasks && (
        <TasksList>
          {tasks.map(task => (
            <li>{task}</li>
          ))}
        </TasksList>
      )}
    </SubSection>
  )
}

export { SkillsSection, ExperienceSection }
