import React from 'react'
import styled from 'styled-components/macro'

import egg from '../assets/img/egg.png'

const Egg1 = styled.img`
  position: absolute;
  top: 104px;
  left: 37px;
  height: 20px;
  transform: rotate(25deg);
`

const Egg2 = styled.img`
  position: absolute;
  top: 114px;
  left: 52px;
  height: 20px;
  transform: rotate(80deg);
`

const Egg3 = styled.img`
  position: absolute;
  top: 125px;
  left: 71px;
  height: 20px;
  transform: rotate(-10deg);
`

const Egg4 = styled.img`
  position: absolute;
  top: 135px;
  left: 90px;
  height: 20px;
  transform: rotate(50deg);
`

const Egg5 = styled.img`
  position: absolute;
  top: 160px;
  left: 107px;
  height: 20px;
  transform: rotate(-80deg);
`

type Props = {
  sprite: number
}

const EggLeftUpper: React.FC<Props> = ({sprite}) => {
  return (
    <>
      {(() => {
        switch(sprite) {
          case 0: return <Egg1 src={egg} />
          case 1: return <Egg2 src={egg} />
          case 2: return <Egg3 src={egg} />
          case 3: return <Egg4 src={egg} />
          case 4: return <Egg5 src={egg} />
        }
      })()}
    </>
  )
}

export default EggLeftUpper