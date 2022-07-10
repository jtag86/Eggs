import React from 'react'
import styled from 'styled-components/macro'
import live from '../assets/img/live.png'

const Wrapper = styled.div`
  position: relative;
`

const Live = styled.img<{posX: string, posY: string}>`
  position: absolute;
  top: ${({posY}) => posY ? posY : '0px'};
  left: ${({posX}) => posX ? posX : '0px'};
  height: 30px;
`

type Props = {
  value: number
}

const Lives: React.FC<Props> = ({value}) => {
  return (
    <Wrapper>
      {(() => {
        switch(value) {
          case 1: return (
            <>
              <Live src={live} posX="360px" posY="90px" />
            </>
          )
          case 2: return (
            <>
              <Live src={live} posX="360px" posY="90px" />
              <Live src={live} posX="320px" posY="90px" />
            </>
          )
          case 3: return (
            <>
              <Live src={live} posX="360px" posY="90px" />
              <Live src={live} posX="320px" posY="90px" />
              <Live src={live} posX="280px" posY="90px" />
            </>
          )
        }
      })()}
    </Wrapper>
  )
}

export default Lives