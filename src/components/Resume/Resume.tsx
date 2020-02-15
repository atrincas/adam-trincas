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
  Link
} from '../../styles'

import { AdressCardIcon, ToolboxIcon, CodeIcon, BriefcaseIcon, GraduationCapIcon } from '../Icons'
import { Header } from './Header'

const jobExperience = [
  {
    mainTitle: 'Frontend Developer',
    subTitle: 'Mobiel.nl',
    period: '07/2019 - Heden',
    tasks: ['Coding', 'Coding', 'More coding']
  },
  {
    mainTitle: 'Medewerker WFM',
    subTitle: 'Woonstad Rotterdam (woningcorporatie)',
    period: '08/2015 – 06/2019',
    tasks: [
      'Ontwikkelen en opstellen van roosters.',
      'Verantwoordelijk voor het maken van dagelijkse managementrapportages en verschillende analyses.',
      'Monitoren inzet en productiviteit van de medewerkers. Waar nodig medewerkers hierop aanspreken.',
      'Aanspreekpunt en sparringspartner voor verschillende afdelingen en medewerkers.'
    ]
  },
  {
    mainTitle: 'Medewerker Klantcontact',
    subTitle: 'Woonstad Rotterdam (woningcorporatie)',
    period: '08/2012 – 08/2015',
    tasks: [
      'Telefonisch klantcontact: Informatie verstrekken, vragen beantwoorden, weerstandsgesprekken voeren.',
      'Baliewerkzaamheden: Ontvangen en te woord staan van klanten. Intake en urgentieaanvragen indienen.',
      'Administratieve handelingen: E-mail beantwoorden, opdrachtbonnen voor aannemers aanmaken.'
    ]
  }
]

const education = [
  {
    mainTitle: 'Luchtvaarttechnologie voltijd',
    subTitle: 'Hogeschool Inholland Delft',
    period: '2007 – 2009'
  },
  {
    mainTitle: 'Havo, Profiel Natuur & Techniek',
    subTitle: 'Gemini College Ridderkerk',
    period: '2001 – 2007'
  }
]

const languages = ['HTML', 'CSS', 'Javascript', 'Ruby']

const frameworksLibraries = ['React', 'Redux', 'Styled-components', 'Ruby on Rails']

const other = ['git(hub)']

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
                <AdressCardIcon />
                <h3>Contact</h3>
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
                <ToolboxIcon />
                <h3>Skills</h3>
              </SideSubSectionHeader>
              <SkillsSection title="Talen" skills={languages} />
              <SkillsSection title="Frameworks & Libraries" skills={frameworksLibraries} />
              <SkillsSection title="Overig" skills={other} />
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
              <CodeIcon />
              <h3>Persoonlijke projecten</h3>
            </SectionHeader>
            <p style={{ padding: '1rem' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum error molestiae
              assumenda libero obcaecati nesciunt unde, sapiente itaque at, ratione autem vero sunt
              dolor temporibus velit minus. Veniam, commodi nobis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eum, iste illum ex debitis neque ea, optio adipisci
              natus nesciunt fugiat beatae praesentium? Commodi obcaecati natus impedit architecto
              temporibus, error veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio facilis beatae labore praesentium dolorem perferendis quos nobis id,
              repellat similique magnam culpa corrupti delectus adipisci repudiandae. Suscipit nihil
              doloribus ipsam.
            </p>
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
