import React from 'react'
import { Base, Heading, SubHeading, Circle, Arrow, Text, Link } from './styles'

function Home() {
  return (
    <Base>
      <header>
        <hgroup>
          <Heading>Adam trincas</Heading>
          <SubHeading>Frontend Developer</SubHeading>
        </hgroup>
      </header>
      <nav>
        <Link href="/cv">
          <Circle className="circle" aria-hidden="true">
            <Arrow></Arrow>
          </Circle>
          <Text className="text">Bekijk mijn C.V.</Text>
        </Link>
      </nav>
    </Base>
  )
}

export default Home
