import React from 'react'
import styled from 'styled-components/macro'
import Digit from './Digit'

type Props = {
  value: number,
  show: boolean
}

const Wrapper = styled.div<{show: boolean}>`
  position: absolute;
  top: 5px;
  right: 150px;
  display: ${({show}) => show ? 'block' : 'none'}
`

const SegmentWrapper = styled.div`
  position: relative;
`

const Display: React.FC<Props> = ({value, show}) => {
  const valueStr = value.toString().padStart(3, "0")
  const hundred = parseInt(valueStr[0])
  const dec = parseInt(valueStr[1])
  const unit = parseInt(valueStr[2])

  return (
    <Wrapper show={show}>
      <SegmentWrapper>
        <Digit value={unit} posX="0px" posY="0px"/>
        <Digit value={dec} posX="-40px" posY="0px"/>
        <Digit value={hundred} posX="-80px" posY="0px"/>
      </SegmentWrapper>
    </Wrapper>
  )
}

export default Display