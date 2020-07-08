import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import * as queryString from 'query-string'

import { SkillsSection, ExperienceSection } from './Sections'

import { Wrapper, Loader, SideSubSection, Link } from '../../styles'

import profilePicture from '../../images/atrincas.jpeg'

import { AdressCardIcon, ToolboxIcon, BriefcaseIcon, GraduationCapIcon } from '../Icons'
import { Header } from './Header'
import { Navigation } from '../Navigation'
import Footer from '../Footer'
import db from '../../firestore'
import i18n from '../../i18n'
import { PersonalDetails, JobExperience, Education } from '../../types'
import LanguageForm from '../LanguageForm'
import { store } from '../../store'

const Base = styled.div`
  color: ${(props) => props.theme.colors.darkBlue};
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.gutters.mobile.medium} 0;
  transition: margin-left 0.5s;
  max-width: 950px;
  margin: 0 auto;
  font-size: ${(props) => props.theme.typography.fontSizes.desktop.small};
  border: 1px solid ${(props) => props.theme.colors.darkBlue};
  border-radius: 5px;
`

const SectionHeader = styled.header<{ fullWidth?: boolean }>`
  display: block;
  font-size: ${(props) => props.theme.typography.fontSizes.desktop.medium};
  font-style: italic;
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blue};
  padding: ${(props) => props.theme.gutters.desktop.extraSmall};
  width: auto;

  & h3 {
    display: inline;
  }
`

const MainSection = styled.section`
  margin-top: 0;
  padding-left: ${(props) => props.theme.gutters.desktop.extraLarge};
`

export const Main = styled.main`
  display: grid;
  grid-template-areas: 'aside' 'main';
  grid-template-columns: 1fr 2fr;
`

const ProfilePicture = styled.div`
  display: inline-block;
  width: 150px;
  height: 150px;
  background: url(${profilePicture}) center / contain no-repeat;
  border: 2px solid ${(props) => props.theme.colors.white};
  border-radius: 50%;
`

const SideSection = styled.section`
  padding-right: ${(props) => props.theme.gutters.desktop.medium};
`

const SideSubSectionHeader = styled.header`
  display: block;
  font-size: ${(props) => props.theme.typography.fontSizes.desktop.medium};
  font-style: italic;
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};

  & h3 {
    display: inline;
  }

  &::before,
  &::after {
    content: ' ';
    display: block;
    width: 100%;
    border: 1px solid ${(props) => props.theme.colors.darkBlue};
    margin: ${(props) => props.theme.gutters.desktop.extraSmall};
  }
`

const SubSectionTitleWrapper = styled.div`
  padding: 0 ${(props) => props.theme.gutters.desktop.extraSmall};
`

const ContactList = styled.ul`
  list-style: none;
  padding: ${(props) => props.theme.gutters.desktop.small}
    ${(props) => props.theme.gutters.desktop.medium};

  li {
    margin-bottom: 0.5rem;

    &::before {
      font-family: FontAwesome;
      margin-right: ${(props) => props.theme.gutters.mobile.small};
    }

    &:nth-child(1) {
      &::before {
        content: '\f0e0'; // email
      }
    }

    &:nth-child(2) {
      &::before {
        content: '\f08c'; // linkedin
      }
    }

    &:nth-child(3) {
      &::before {
        content: '\f092'; // github
      }
    }

    &:nth-child(4) {
      &::before {
        content: '\f3c5'; // location
      }
    }

    &::before {
      margin-right: ${(props) => props.theme.gutters.desktop.small};
    }
  }
`

const SkillsWrapper = styled.div`
  padding: ${(props) => props.theme.gutters.mobile.medium}
    ${(props) => props.theme.gutters.mobile.large};

  & section {
    margin-bottom: ${(props) => props.theme.gutters.mobile.medium};
  }
`

function ResumePDF(props) {
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails | null>(null)
  const [loaded, setLoaded] = useState(false)
  const { dispatch } = useContext(store)
  const { t } = useTranslation()

  useEffect(() => {
    db.doc('resume/personalDetails')
      .get()
      .then((snapshot) => {
        const data = snapshot.data() as PersonalDetails
        setPersonalDetails(data)
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

    const currentLanguage = queryString.parse(props.location.search).lang === 'nl' ? 'nl' : 'en'
    dispatch({ type: 'LANGUAGE_CHANGED', value: currentLanguage })
  }, [])

  if (!personalDetails || !loaded)
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    )

  const { fullName, profession, email, github, linkedIn, location } = personalDetails

  return (
    <>
      <Navigation />
      <LanguageForm />
      <Base style={{ maxWidth: 'none' }}>
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
                    <Link href={linkedIn.link} target="blank">
                      {linkedIn.title}
                    </Link>
                  </li>
                  <li>
                    <Link href={github.link} target="blank">
                      {github.title}
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
                )
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
                )
              )}
            </section>
          </MainSection>
        </Main>
      </Base>
      <Footer fixedPosition={false} />
    </>
  )
}

export { ResumePDF }
