import React from 'react'
import { Base, Heading, SubHeading, Nav, Circle, Arrow, Text, Link } from './styles'

function Home() {
  return (
    <Base>
      <header>
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
          <Text className="text">Bekijk mijn C.V.</Text>
        </Link>
      </Nav>
    </Base>
  )
}

export default Home
