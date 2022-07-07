import React from 'react'
import styled from 'styled-components/macro'

import tree from '../assets/img/tree.png'

import grassCenterLeft from '../assets/img/grassCenterLeft.png'
import grassCenterRight from '../assets/img/grassCenterRight.png'
import grassLeft from '../assets/img/grassLeft.png'
import grassRight from '../assets/img/grassRight.png'
import grassLeftLower from '../assets/img/grassLeftLower.png'
import grassRightLower from '../assets/img/grassRightLower.png'

import plankLeftLower from '../assets/img/plankLeftLower.png'
import plankLeftUpper from '../assets/img/plankLeftUpper.png'
import plankRightLower from '../assets/img/plankRightLower.png'
import plankRightUpper from '../assets/img/plankRightUpper.png'

import chickenLeftUpper from '../assets/img/chickenLeftUpper.png'
import chickenLeftLower from '../assets/img/chickenLeftLower.png'
import chickenRightUpper from '../assets/img/chickenRightUpper.png'
import chickenRightLower from '../assets/img/chickenRightLower.png'

const GrassLeftLower = styled.img`
  position: absolute;
  top: 300px;
  left: 0px;
  width: 100px;
`

const GrassRightLower = styled.img`
  position: absolute;
  top: 300px;
  right: 0px;
  width: 100px;
`

const GrassCenterLeftUpper = styled.img`
  position: absolute;
  top: 310px;
  left: 140px;
  width: 70px;
`

const GrassCenterLeftLower = styled.img`
  position: absolute;
  top: 330px;
  left: 170px;
  width: 70px;
`

const GrassCenterRightUpper = styled.img`
  position: absolute;
  top: 310px;
  right: 140px;
  width: 70px;
`

const GrassCenterRightLower = styled.img`
  position: absolute;
  top: 330px;
  right: 170px;
  width: 70px;
`

const GrassLeft = styled.img`
  position: absolute;
  top: 230px;
  left: 0px;
  width: 70px;
`

const GrassRight = styled.img`
  position: absolute;
  top: 230px;
  right: 0px;
  width: 70px;
`

const PlankLeftLower = styled.img`
  position: absolute;
  top: 195px;
  left: 0px;
  width: 100px;
`

const PlankLeftUpper = styled.img`
  position: absolute;
  top: 115px;
  left: 0px;
  width: 100px;
`

const PlankRightLower = styled.img`
  position: absolute;
  top: 195px;
  right: 0px;
  width: 100px;
`

const PlankRightUpper = styled.img`
  position: absolute;
  top: 115px;
  right: 0px;
  width: 100px;
`

const GrassCenterLeft = styled.img`
  position: absolute;
  top: 200px;
  left: 0px;
  width: 100px;
`


const ChikenLeftUppper = styled.img`
  position: absolute;
  top: 55px;
  left: 0px;
  height: 60px;
`

const ChikenLeftLower = styled.img`
  position: absolute;
  top: 135px;
  left: 0px;
  height: 60px;
`

const ChikenRightUpper = styled.img`
  position: absolute;
  top: 55px;
  right: 0px;
  height: 60px;
`

const ChikenRightLower = styled.img`
  position: absolute;
  top: 135px;
  right: 0px;
  height: 60px;
`

const Background = () => {
  return (
    <>
      <ChikenLeftUppper src={chickenLeftUpper} />
      <ChikenLeftLower src={chickenLeftLower} />
      <ChikenRightUpper src={chickenRightUpper} />
      <ChikenRightLower src={chickenRightLower} />

      <GrassLeftLower src={grassLeftLower} />
      <GrassRightLower src={grassRightLower} />
      <GrassCenterLeftUpper src={grassCenterLeft} />
      <GrassCenterLeftLower src={grassCenterLeft} />
      <GrassCenterRightUpper src={grassCenterRight} />
      <GrassCenterRightLower src={grassCenterRight} />
      <GrassLeft src={grassLeft} />
      <GrassRight src={grassRight} />
      <PlankLeftLower src={plankLeftLower}/>
      <PlankLeftUpper src={plankLeftUpper}/>
      <PlankRightLower src={plankRightLower}/>
      <PlankRightUpper src={plankRightUpper}/>

      {/* <GrassCenterLeft src={grassCenterLeft} /> */}
    </>
  )
}

export default Background