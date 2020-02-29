import React from 'react'

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
  SkillsWrapper
} from '../../styles'

import { AdressCardIcon, ToolboxIcon, BriefcaseIcon, GraduationCapIcon } from '../Icons'
import { Header } from './Header'
import { jobExperience, education, languages, frameworksLibraries, other } from './data'

function Resume() {
  return (
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
                <SkillsSection title="Talen" skills={languages} />
                <SkillsSection title="Frameworks & Libraries" skills={frameworksLibraries} />
                <SkillsSection title="Overig" skills={other} />
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
            {jobExperience.map(job => (
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
            {education.map(education => (
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
  )
}

export { Resume }
