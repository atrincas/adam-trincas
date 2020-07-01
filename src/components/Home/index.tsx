import React from 'react'
import { useTranslation } from 'react-i18next'

import { Base, Heading, SubHeading, Nav, Circle, Arrow, Text, Link } from './styles'
import LanguageForm from '../LanguageForm'

function Home() {
  const { t } = useTranslation()

  return (
    <Base>
      <header>
        <LanguageForm />
        <hgroup>
          <Heading>Adam Trincas</Heading>
          <SubHeading>Frontend Developer</SubHeading>
        </hgroup>
      </header>
      <Nav>
        <Link href="/cv">
          <Circle className="circle" aria-hidden="true">
            <Arrow></Arrow>
          </Circle>
          <Text className="text">{t('home:link')}</Text>
        </Link>
      </Nav>
    </Base>
  )
}

export default Home
