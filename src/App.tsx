import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro'

import Wolf from './components/Wolf';
import Background from './components/Background';
import EggLeftUpper from './components/EggLeftUpper';
import EggLeftLower from './components/EggLeftLower';
import EggRightUpper from './components/EggRightUpper';
import EggRightLower from './components/EggRightLower';
import useField from './utils/gameLogic';
import { useInterval } from './hooks/useInterval';
import { v4 } from 'uuid'

const StyledBoard = styled.div`
  background-color: #C4CCC1;
  width: 520px;
  height: 365px;
  margin: auto;
  padding: 0;
  position: relative;
`

const eggPos = 0
const timeDelay = 500
let currentState: Function  = () => {}
let slopeNum = 0

function* generator() {
  while(1){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
  }
}

let gen = generator()

function App() {
  const [ delay, setDelay ] = useState<number | null>(null)
  const [slope1, setSlope1] = useState<number[]>([])
  const [slope2, setSlope2] = useState<number[]>([])
  const [slope3, setSlope3] = useState<number[]>([])
  const [slope4, setSlope4] = useState<number[]>([])


  useEffect(() => { //запуск игры
    play()
    setDelay(500)
  }, [])

  useInterval(tick, delay)  //обновление игрового поля

  function play() {
    setSlope1(oldArray => [...oldArray, eggPos])
    setSlope2(oldArray => [...oldArray, eggPos])
    setSlope3(oldArray => [...oldArray, eggPos])
    setSlope4(oldArray => [...oldArray, eggPos])
  }

  function tick() {
    console.log("tick")

    shuffle()
    removeEgg()
    const slopeNum = gen.next().value
    switch(slopeNum) {
      case (1):
        setSlope1(slope => slope.map(eggPos => eggPos+=1))
        return
      case (2):
        setSlope2(slope => slope.map(eggPos => eggPos+=1))
        return
      case (3):
        setSlope3(slope => slope.map(eggPos => eggPos+=1))
        return
      case (4):
        setSlope4(slope => slope.map(eggPos => eggPos+=1))
        return
    }

  }

  function removeEgg() {  //удаление скатившегося яйца из массива
    setSlope1(slope => slope.filter(eggPos => eggPos < 5))
    setSlope2(slope => slope.filter(eggPos => eggPos < 5))
    setSlope3(slope => slope.filter(eggPos => eggPos < 5))
    setSlope4(slope => slope.filter(eggPos => eggPos < 5))
  }

  function shuffle() {
    let tempArr = []
    
    if(slope1.length === 0) tempArr.push(0)
    if(slope2.length === 0) tempArr.push(1)
    if(slope3.length === 0) tempArr.push(2)
    if(slope4.length === 0) tempArr.push(3)

    const rand = Math.floor(Math.random() * tempArr.length)
    if(tempArr.length) {  //если имеется пустой массив
      const value = tempArr[rand]

      console.log("tempArr[rand]", tempArr[rand])

      switch(value) {
        case 0: 
          setSlope1(slope => [...slope, eggPos])
          return
        case 1: 
          setSlope2(slope => [...slope, eggPos])
          return
        case 2: 
          setSlope3(slope => [...slope, eggPos])
          return
        case 3: 
          setSlope4(slope => [...slope, eggPos])
          return
      }
      console.log("finish")
    }
  }

  return (
    <StyledBoard>
      <Background />
      {slope1.map(item => <EggLeftUpper key={v4()} sprite={item} /> )}
      {slope2.map(item => <EggLeftLower key={v4()} sprite={item} /> )}
      {slope3.map(item => <EggRightUpper key={v4()} sprite={item} /> )}
      {slope4.map(item => <EggRightLower key={v4()} sprite={item} /> )}
    </StyledBoard>
  );
}

export default App;
