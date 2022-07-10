import React from 'react'
import styled from 'styled-components/macro'
import segment from '../../assets/img/segment.png'

const Wrapper = styled.div<{posX: string, posY: string}>`
  position: absolute;
  top: ${({posY}) => posY ? posY : '0px'};
  left: ${({posX}) => posX ? posX : '0px'};
`

const DigitWrapper = styled.div`
  position: relative;
  height: 70px;
  width: 30px;
`

const SegmentA = styled.img`
  position: absolute;
  top: -5px;
  left: 10px;
  height: 20px;
  transform: rotate(90deg);
`

const SegmentB = styled.img`
  position: absolute;
  top: 8px;
  left: 21px;
  height: 20px;
`

const SegmentC = styled.img`
  position: absolute;
  top: 34px;
  left: 21px;
  height: 20px;
`

const SegmentD = styled.img`
  position: absolute;
  top: 47px;
  left: 10px;
  height: 20px;
  transform: rotate(90deg);
`

const SegmentE = styled.img`
  position: absolute;
  top: 34px;
  left: -1px;
  height: 20px;
`

const SegmentF = styled.img`
  position: absolute;
  top: 8px;
  left: -1px;
  height: 20px;
`

const SegmentG = styled.img`
  position: absolute;
  top: 21px;
  left: 10px;
  height: 20px;
  transform: rotate(90deg);
`

type Props = {
  value: number,
  posX: string,
  posY: string
}

const Digit: React.FC<Props> = ({value, posX, posY}) => {
  return (
    <Wrapper posX={posX} posY={posY}>
      <DigitWrapper>
        {(() => {
          switch(value) {
            case 1: return (
              <>
                <SegmentB src={segment}/>
                <SegmentC src={segment}/>
              </>
            )
            case 2: return (
              <>
                <SegmentA src={segment}/>
                <SegmentB src={segment}/>
                <SegmentG src={segment}/>
                <SegmentE src={segment}/>
                <SegmentD src={segment}/>
              </>
            )
            case 3: return (
              <>
                <SegmentA src={segment}/>
                <SegmentB src={segment}/>
                <SegmentG src={segment}/>
                <SegmentC src={segment}/>
                <SegmentD src={segment}/>
              </>
            )
            case 4: return (
              <>
                <SegmentF src={segment}/>
                <SegmentB src={segment}/>
                <SegmentG src={segment}/>
                <SegmentC src={segment}/>
              </>
            )
            case 5: return (
              <>
                <SegmentA src={segment}/>
                <SegmentF src={segment}/>
                <SegmentG src={segment}/>
                <SegmentC src={segment}/>
                <SegmentD src={segment}/>
              </>
            )
            case 6: return (
              <>
                <SegmentA src={segment}/>
                <SegmentF src={segment}/>
                <SegmentG src={segment}/>
                <SegmentC src={segment}/>
                <SegmentD src={segment}/>
                <SegmentE src={segment}/>
              </>
            )
            case 7: return (
              <>
                <SegmentA src={segment}/>
                <SegmentB src={segment}/>
                <SegmentC src={segment}/>
              </>
            )
            case 8: return (
              <>
                <SegmentA src={segment}/>
                <SegmentB src={segment}/>
                <SegmentC src={segment}/>
                <SegmentD src={segment}/>
                <SegmentE src={segment}/>
                <SegmentF src={segment}/>
                <SegmentG src={segment}/>
              </>
            )
            case 9: return (
              <>
                <SegmentA src={segment}/>
                <SegmentB src={segment}/>
                <SegmentC src={segment}/>
                <SegmentD src={segment}/>
                <SegmentF src={segment}/>
                <SegmentG src={segment}/>
              </>
            )
            case 0: return (
              <>
                <SegmentA src={segment}/>
                <SegmentB src={segment}/>
                <SegmentC src={segment}/>
                <SegmentD src={segment}/>
                <SegmentE src={segment}/>
                <SegmentF src={segment}/>
              </>
            )
          }
        })()}    
      </DigitWrapper>
    </Wrapper>
  )
}

export default Digit