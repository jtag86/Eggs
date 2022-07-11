import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import rabbitImage from '../assets/img/rabbit.png'


const StyledRabbit = styled.img<{show: boolean}>`
  position: absolute;
  left: 81px;
  top: 15px;
  height: 90px;
  display: ${({show}) => show ? 'block' : 'none'};
`

const Wrapper = styled.div<{show: boolean}>`
  display: ${({show}) => show ? 'block' : 'none'}
`

type Props = {
  show: boolean,
  flash: boolean
}

const Rabbit: React.FC<Props> = ({show, flash}) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if(flash === true) setVisible(!visible)
  }, [flash])

  return (
    <Wrapper show={show}>
      <StyledRabbit show={visible}  src={rabbitImage}/>
    </Wrapper>
  )
}

export default Rabbit

