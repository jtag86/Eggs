import React from 'react'
import styled from 'styled-components/macro'
import Digit from './Digit'

type Props = {
  value: number
}

const Wrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 150px;
`

const SegmentWrapper = styled.div`
  position: relative;
`

const Display: React.FC<Props> = ({value}) => {
  const valueStr = value.toString().padStart(3, "0")
  const hundred = parseInt(valueStr[0])
  const dec = parseInt(valueStr[1])
  const unit = parseInt(valueStr[2])
  console.log(valueStr)


  return (
    <Wrapper>
      <SegmentWrapper>
        <Digit value={unit} posX="0px" posY="0px"/>
        <Digit value={dec} posX="-40px" posY="0px"/>
        <Digit value={hundred} posX="-80px" posY="0px"/>
      </SegmentWrapper>
    </Wrapper>
  )
}

export default Display