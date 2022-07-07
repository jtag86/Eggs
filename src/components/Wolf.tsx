import wolfLeftUpper from '../assets/img/wolfLeftUpper.png'
import wolfLeftLower from '../assets/img/wolfLeftLower.png'
import wolfRightUpper from '../assets/img/wolfRightUpper.png'
import wolfRightLower from '../assets/img/wolfRightLower.png'
import styled from 'styled-components/macro'
import React from 'react'

const WolfLeftUpper = styled.img`
  position: absolute;
  top: 130px;
  left: 110px;
  height: 170px;
`

const WolfLeftLower = styled.img`
  position: absolute;
  top: 130px;
  left: 110px;
  height: 170px;
`

const WolfRightUpper = styled.img`
  position: absolute;
  top: 130px;
  right: 110px;
  height: 170px;
`

const WolfRightLower = styled.img`
  position: absolute;
  top: 130px;
  right: 110px;
  height: 170px;
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