import wolfLeftUpper from '../assets/img/wolfLeftUpper.png'
import wolfLeftLower from '../assets/img/wolfLeftLower.png'
import wolfRightUpper from '../assets/img/wolfRightUpper.png'
import wolfRightLower from '../assets/img/wolfRightLower.png'
import styled from 'styled-components/macro'
import React from 'react'

const WolfLeftUpper = styled.img`
  position: absolute;
  top: 145px;
  left: 120px;
  height: 140px;
`

const WolfLeftLower = styled.img`
  position: absolute;
  top: 146px;
  left: 111px;
  height: 140px;
`

const WolfRightUpper = styled.img`
  position: absolute;
  top: 150px;
  right: 112px;
  height: 140px;
`

const WolfRightLower = styled.img`
  position: absolute;
  top: 150px;
  right: 115px;
  height: 140px;
`

type Props = {
  sprite: number,
}

const Wolf: React.FC<Props> = ({sprite}) => {
  return (
    <>
      {(() => {
        switch(sprite) {
          case 0: return <WolfLeftUpper src={wolfLeftUpper} />
          case 1: return <WolfLeftLower src={wolfLeftLower} />
          case 2: return <WolfRightUpper src={wolfRightUpper} />
          case 3: return <WolfRightLower src={wolfRightLower} />
        }
      })()}
    </>
  )
}

export default Wolf