import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro'

import Wolf from './components/Wolf';
import Background from './components/Background';
import EggLeftUpper from './components/EggLeftUpper';
import EggLeftLower from './components/EggLeftLower';
import EggRightUpper from './components/EggRightUpper';
import EggRightLower from './components/EggRightLower';
import { useInterval } from './hooks/useInterval';
import { GlobalStyle } from './globalStyle';
import { v4 } from 'uuid'
import Display from './components/Display/Display';

const StyledBoard = styled.div`
  background-color: #C4CCC1;
  width: 520px;
  height: 365px;
  margin: auto;
  padding: 0;
  position: relative;
`
const Scores = styled.p`
  position: absolute;
  top: 0;
  right: 130px;
  font-family: 'LCDDisplay';
  font-size: 70px;
  margin: 0;
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
  const [score, setScore] = useState(0)
  const [wolfPos, setWolfPos] = useState(0)
  console.log("update")

  useEffect(() => { //запуск игры
    setDelay(300)
    document.addEventListener("keydown", listeners);
    return () => document.removeEventListener("keydown", listeners);
  }, [])

  useInterval(tick, delay)  //обновление игрового поля

  function play() {
    setSlope1(oldArray => [...oldArray, eggPos])
    setSlope2(oldArray => [...oldArray, eggPos])
    setSlope3(oldArray => [...oldArray, eggPos])
    setSlope4(oldArray => [...oldArray, eggPos])
  }

  function tick() {
    shuffle()
    addScore()
    removeEgg()
    speed()
    setScore(score => score+=1)
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

  function addScore() {
    slope1.map(eggPos => {
      if(eggPos >= 5 && wolfPos===0) setScore(score => score+=1)
    })
    slope2.map(eggPos => {
      if(eggPos >= 5 && wolfPos===1) setScore(score => score+=1)
    })
    slope3.map(eggPos => {
      if(eggPos >= 5 && wolfPos===2) setScore(score => score+=1)
    })
    slope4.map(eggPos => {
      if(eggPos >= 5 && wolfPos===3) setScore(score => score+=1)
    })
  }

  function removeEgg() {  //удаление скатившегося яйца из массива
    setSlope1(slope => slope.filter(eggPos => eggPos < 5))
    setSlope2(slope => slope.filter(eggPos => eggPos < 5))
    setSlope3(slope => slope.filter(eggPos => eggPos < 5))
    setSlope4(slope => slope.filter(eggPos => eggPos < 5))
  }

  function shuffle() {
    const boolRand = Math.random() < 0.5
    if(boolRand) return
    let tempArr = []
          //какой массив участвует в раздаче яиц
    if(score < 50) {
      if((slope1.length && slope1[slope1.length-1] > 2) || slope1.length === 0 ) tempArr.push(0)
      if((slope4.length && slope4[slope4.length-1] > 2) || slope4.length === 0 ) tempArr.push(3)
    }
    else if (score < 100) {
      if((slope1.length && slope1[slope1.length-1] > 2) || slope1.length === 0 ) tempArr.push(0)
      if((slope2.length && slope2[slope2.length-1] > 2) || slope2.length === 0 ) tempArr.push(1)
      if((slope3.length && slope3[slope3.length-1] > 2) || slope3.length === 0 ) tempArr.push(2)
    } else {
      if((slope1.length && slope1[slope1.length-1] > 2) || slope1.length === 0 ) tempArr.push(0)
      if((slope2.length && slope2[slope2.length-1] > 2) || slope2.length === 0 ) tempArr.push(1)
      if((slope3.length && slope3[slope3.length-1] > 2) || slope3.length === 0 ) tempArr.push(2)
      if((slope4.length && slope4[slope4.length-1] > 2) || slope4.length === 0 ) tempArr.push(3)
    }

    const rand = Math.floor(Math.random() * 4)
    if(tempArr.length) {  //если имеется пустой массив
      switch(tempArr[rand]) {
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
    }
  }

  function speed() {
    if(score >= 999) {
      setScore(0)
    } else if(score > 500) {
      setDelay(100)
    } else if(score > 400) {
      setDelay(130)
    } else if(score > 300) {
      setDelay(150)
    } else if(score > 200) {
      setDelay(200)
    } else if(score > 50) {
      setDelay(250)
    }
  }

  function listeners(e: KeyboardEvent) {
    if (e.key === 'w' || e.key === 'W' || e.key === 'ц' || e.key === 'Ц') setWolfPos(0)
    else if (e.key === 's' || e.key === 'S' || e.key === 'ы' || e.key === 'Ы') setWolfPos(1)
    else if (e.key === 'e' || e.key === 'E' || e.key === 'у' || e.key === 'У') setWolfPos(2)
    else if (e.key === 'd' || e.key === 'D' || e.key === 'в' || e.key === 'В') setWolfPos(3)
  }

  return (
    <>
      <StyledBoard>
        <Background />
        {slope1.map(item => <EggLeftUpper key={v4()} sprite={item} /> )}
        {slope2.map(item => <EggLeftLower key={v4()} sprite={item} /> )}
        {slope3.map(item => <EggRightUpper key={v4()} sprite={item} /> )}
        {slope4.map(item => <EggRightLower key={v4()} sprite={item} /> )}
        <Wolf sprite={wolfPos}/>
        <Display value={score}/>
      </StyledBoard>
      <GlobalStyle />
    </>
  );
}

export default App;
