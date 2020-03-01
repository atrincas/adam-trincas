import React, { useState, useEffect } from 'react'

import { SkillsSection, ExperienceSection } from './Sections'

import {
  Base,
  Main,
  ProfilePicture,
  ContactList,
  MainSection,
  SectionHeader,
  SideSection,
  SideSubSection,
  SideSubSectionHeader,
  Link,
  SubSectionTitleWrapper,
  SkillsWrapper,
  Wrapper,
  Loader
} from '../../styles'

import { AdressCardIcon, ToolboxIcon, BriefcaseIcon, GraduationCapIcon } from '../Icons'
import { Header } from './Header'
import Footer from '../Footer'
import db from '../../firestore'
import { State, StateKey } from '../../types'

function Resume() {
  const [state, setState] = useState<State | null>(null)

  useEffect(() => {
    let newState = {} as State
    db.collection('resume')
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data())
        data.forEach(obj => {
          const key = Object.keys(obj)[0] as StateKey
          newState[key] = obj[key]
        })
        setState(newState)
      })
  }, [])

  if (!state)
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    )

  return (
    <>
      <Base>
        <Main>
          <section>
            <Header name="Adam Trincas" title="Frontend Developer">
              <ProfilePicture />
            </Header>
            <SideSection>
              <SideSubSection>
                <SideSubSectionHeader>
                  <SubSectionTitleWrapper>
                    <AdressCardIcon />
                    <h3>Contact</h3>
                  </SubSectionTitleWrapper>
                </SideSubSectionHeader>
                <ContactList>
                  <li>atrincas@gmail.com</li>
                  <li>
                    <Link href="https://www.linkedin.com/in/adamtrincas/" target="blank">
                      linkedin.com/atrincas
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/atrincas" target="blank">
                      github.com/atrincas
                    </Link>
                  </li>
                  <li>Rotterdam, Zuid-Holland</li>
                </ContactList>
              </SideSubSection>
              <SideSubSection>
                <SideSubSectionHeader>
                  <SubSectionTitleWrapper>
                    <ToolboxIcon />
                    <h3>Skills</h3>
                  </SubSectionTitleWrapper>
                </SideSubSectionHeader>
                <SkillsWrapper>
                  <SkillsSection title="Talen" skills={state.languages} />
                  <SkillsSection
                    title="Frameworks & Libraries"
                    skills={state.frameworksLibraries}
                  />
                  <SkillsSection title="Soft Skills" skills={state.softSkills} />
                </SkillsWrapper>
              </SideSubSection>
            </SideSection>
          </section>
          <MainSection>
            <section>
              <SectionHeader>
                <BriefcaseIcon />
                <h3>Werkervaring</h3>
              </SectionHeader>
              {state.jobExperience.map(job => (
                <ExperienceSection
                  key={job.period}
                  mainTitle={job.mainTitle}
                  subTitle={job.subTitle}
                  period={job.period}
                  tasks={job.tasks}
                />
              ))}
            </section>
            <section>
              <SectionHeader>
                <GraduationCapIcon />
                <h3>Opleidingen</h3>
              </SectionHeader>
              {state.education.map(education => (
                <ExperienceSection
                  key={education.period}
                  mainTitle={education.mainTitle}
                  subTitle={education.subTitle}
                  period={education.period}
                />
              ))}
            </section>
          </MainSection>
        </Main>
      </Base>
      <Footer fixedPosition={false} />
    </>
  )
}

export { Resume }
