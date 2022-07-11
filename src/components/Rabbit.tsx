import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import RabbitImage from '../assets/img/rabbit.png'


const StyledRabbit = styled.img<{show: boolean}>`
  position: absolute;
  left: 81px;
  top: 15px;
  height: 90px;
  display: ${({show}) => show ? 'block' : 'none'};
`

type Props = {
  show: boolean
}

const Rabbit: React.FC<Props> = ({show}) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if(show === true) setVisible(!visible)
  }, [show])

  return (
    <StyledRabbit show={visible}  src={RabbitImage}/>
  )
}

export default Rabbit

