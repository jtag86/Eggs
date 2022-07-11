import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import break1 from '../assets/img/breakEgg/1.png'
import break2 from '../assets/img/breakEgg/2.png'
import break3 from '../assets/img/breakEgg/3.png'
import break4 from '../assets/img/breakEgg/4.png'
import break5 from '../assets/img/breakEgg/5.png'
import { useInterval } from '../hooks/useInterval'


const Wrapper = styled.div<{show: boolean}>`
  position: relative;
  display: ${({show}) => show ? 'block' : 'none'}
`

const BreakLeft1 = styled.img`
  position: absolute;
  top: 320px;
  left: 95px;
  width: 45px;
`

const BreakLeft2 = styled.img`
  position: absolute;
  top: 290px;
  left: 100px;
  width: 20px;
`

const BreakLeft3 = styled.img`
  position: absolute;
  top: 283px;
  left: 70px;
  width: 15px;
`

const BreakLeft4 = styled.img`
  position: absolute;
  top: 283px;
  left: 40px;
  width: 15px;
`

const BreakLeft5 = styled.img`
  position: absolute;
  top: 283px;
  left: 10px;
  width: 15px;
`

const BreakRight1 = styled.img`
  position: absolute;
  top: 320px;
  right: 95px;
  width: 45px;
  transform: scale(-1, 1);
`

const BreakRight2 = styled.img`
  position: absolute;
  top: 290px;
  right: 100px;
  width: 20px;
  transform: scale(-1, 1);
`

const BreakRight3 = styled.img`
  position: absolute;
  top: 283px;
  right: 70px;
  width: 15px;
  transform: scale(-1, 1);
`

const BreakRight4 = styled.img`
  position: absolute;
  top: 283px;
  right: 40px;
  width: 15px;
  transform: scale(-1, 1);
`

const BreakRight5 = styled.img`
  position: absolute;
  top: 283px;
  right: 10px;
  width: 15px;
  transform: scale(-1, 1);
`

type Props = {
  sprite: number,
  side: number,
  show: boolean,
}

const BreakEgg: React.FC<Props> = ({sprite, side, show}) => {

  return (
    <Wrapper show={show}>
      {
        side?
        (
          (() => {
            switch(sprite) {
              case 1: return <BreakLeft1 src={break1}/>
              case 2: return <BreakLeft2 src={break2}/>
              case 3: return <BreakLeft3 src={break3}/>
              case 4: return <BreakLeft4 src={break4}/>
              case 5: return <BreakLeft5 src={break5}/>
            }
          })()
        ) : (
          (() => {
            switch(sprite) {
              case 1: return <BreakRight1 src={break1}/>
              case 2: return <BreakRight2 src={break2}/>
              case 3: return <BreakRight3 src={break3}/>
              case 4: return <BreakRight4 src={break4}/>
              case 5: return <BreakRight5 src={break5}/>
            }
          })()
        )
      }

    </Wrapper>
  )
}

export default BreakEgg