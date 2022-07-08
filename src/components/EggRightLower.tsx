import React from 'react'
import styled from 'styled-components/macro'

import egg from '../assets/img/egg.png'

const Egg1 = styled.img`
  position: absolute;
  top: 186px;
  right: 37px;
  height: 20px;
  transform: rotate(60deg);
`

const Egg2 = styled.img`
  position: absolute;
  top: 196px;
  right: 57px;
  height: 20px;
  transform: rotate(-40deg);
`

const Egg3 = styled.img`
  position: absolute;
  top: 205px;
  right: 72px;
  height: 20px;
  transform: rotate(110deg);
`

const Egg4 = styled.img`
  position: absolute;
  top: 216px;
  right: 90px;
  height: 20px;
  transform: rotate(190deg);
`

const Egg5 = styled.img`
  position: absolute;
  top: 235px;
  right: 107px;
  height: 20px;
  transform: rotate(110deg);
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