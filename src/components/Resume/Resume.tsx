import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

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
  Loader,
  LanguageForm,
} from '../../styles'

import { AdressCardIcon, ToolboxIcon, BriefcaseIcon, GraduationCapIcon } from '../Icons'
import { Header } from './Header'
import { Navigation } from '../Navigation'
import Footer from '../Footer'
import db from '../../firestore'
import i18n from '../../i18n'
import { State, JobExperience, Education } from '../../types'

function Resume() {
  const [state, setState] = useState<State | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [language, setLanguage] = useState('nl')
  const { t } = useTranslation()
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  useEffect(() => {
    db.doc('resume/0')
      .get()
      .then((snapshot) => {
        const data = snapshot.data() as State
        setState(data)
      })

    db.collection('translations')
      .get()
      .then((querySnapshot) => {
        let docsProcessed = 0
        querySnapshot.forEach((doc) => {
          docsProcessed++
          i18n.addResourceBundle(doc.id, 'resume', doc.data())
          if (docsProcessed === querySnapshot.size) {
            setLoaded(true)
          }
        })
      })
  }, [])

  if (!state || !loaded)
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    )

  const { fullName, profession, email, github, linkedIn, location } = state.personalDetails

  return (
    <>
      <Navigation />
      <LanguageForm>
        <label htmlFor="language-select"></label>
        <select
          id="language-select"
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value)
            changeLanguage(e.target.value)
          }}
        >
          <option value="nl">Nederlands</option>
          <option value="en">English</option>
        </select>
      </LanguageForm>
      <Base>
        <Main>
          <section>
            <Header name={fullName} title={profession}>
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
                  <li>{email}</li>
                  <li>
                    <Link href={linkedIn} target="blank">
                      linkedin.com/atrincas
                    </Link>
                  </li>
                  <li>
                    <Link href={github} target="blank">
                      github.com/atrincas
                    </Link>
                  </li>
                  <li>{location}</li>
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
                  <SkillsSection
                    title={t('resume:headers.languages')}
                    skills={t('resume:languages', { returnObjects: true })}
                  />
                  <SkillsSection
                    title="Frameworks & Libraries"
                    skills={t('resume:frameworksLibraries', { returnObjects: true })}
                  />
                  <SkillsSection
                    title="Soft Skills"
                    skills={t('resume:softSkills', { returnObjects: true })}
                  />
                </SkillsWrapper>
              </SideSubSection>
            </SideSection>
          </section>
          <MainSection>
            <section>
              <SectionHeader>
                <BriefcaseIcon />
                <h3>{t('resume:headers.workExperience')}</h3>
              </SectionHeader>
              {t('resume:jobExperience', { returnObjects: true }).map(
                ({ mainTitle, period, subTitle, tasks }: JobExperience) => (
                  <ExperienceSection
                    key={period}
                    mainTitle={mainTitle}
                    subTitle={subTitle}
                    period={period}
                    tasks={tasks}
                  />
                ),
              )}
            </section>
            <section>
              <SectionHeader>
                <GraduationCapIcon />
                <h3>{t('resume:headers.education')}</h3>
              </SectionHeader>
              {t('resume:education', { returnObjects: true }).map(
                ({ mainTitle, period, subTitle }: Education) => (
                  <ExperienceSection
                    key={period}
                    mainTitle={mainTitle}
                    subTitle={subTitle}
                    period={period}
                  />
                ),
              )}
            </section>
          </MainSection>
        </Main>
      </Base>
      <Footer fixedPosition={false} />
    </>
  )
}

export { Resume }
