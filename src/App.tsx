import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro'
import useSound from 'use-sound';


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
import Lives from './components/Lives';
import BreakEgg from './components/BreakEgg';
import Bg from './assets/img/bg.png'
import Rabbit from './components/Rabbit';

import clapSound from './assets/sound/tick.mp3'
import clapSound1 from './assets/sound/tick1.mp3'
import clapSound2 from './assets/sound/tick2.mp3'
import clapSound3 from './assets/sound/tick3.mp3'
import clapSound4 from './assets/sound/catch.mp3'
import breakSound from './assets/sound/break.mp3'

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 800px;
`

const BoardWrapper = styled.div`
  position: absolute;
  top: 149px;
  left: 269px;
`
const Board = styled.div`
  background-color: #C4CCC1;
  width: 520px;
  height: 365px;
  padding: 0;
  position: relative;
`

const BgImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1065px;
`

const StartButton = styled.div`
  position: absolute;
  top: -67px;
  left: 622px;
  width: 68px;
  height: 42px;
  z-index: 10;
  border-radius: 45%;
`

const LeftUpperButton = styled.div`
  position: absolute;
  top: 217px;
  left: -183px;
  width: 90px;
  height: 90px;
  z-index: 10;
  border-radius: 50%;

  &:hover {
    border: 7px solid white;
  }
`

const LeftLowerButton = styled.div`
  position: absolute;
  top: 342px;
  left: -183px;
  width: 90px;
  height: 90px;
  z-index: 10;
  border-radius: 50%;

  &:hover {
    border: 7px solid white;
  }
`

const RightUpperButton = styled.div`
  position: absolute;
  top: 217px;
  right: -188px;
  width: 90px;
  height: 90px;
  z-index: 10;
  border-radius: 50%;
  &:hover {
    border: 7px solid white;
  }
`

const RightLowerButton = styled.div`
  position: absolute;
  top: 342px;
  right: -188px;
  width: 90px;
  height: 90px;
  z-index: 10;
  border-radius: 50%;
  &:hover {
    border: 7px solid white;
  }
`

const eggPos = 0

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
  const [show, setShow] = useState(false)
  const [ delay, setDelay ] = useState<number | null>(null)
  const [slope1, setSlope1] = useState<number[]>([])
  const [slope2, setSlope2] = useState<number[]>([])
  const [slope3, setSlope3] = useState<number[]>([])
  const [slope4, setSlope4] = useState<number[]>([])
  const [score, setScore] = useState(0)
  const [wolfPos, setWolfPos] = useState(0)
  const [lives, setLives] = useState(0)
  const [breakEggSpriteLeft, setBreakEggSpriteLeft] = useState(10)
  const [breakEggSpriteRight, setBreakEggSpriteRight] = useState(10)

  const [tickSound] = useSound(clapSound)
  const [tickSound1] = useSound(clapSound1)
  const [tickSound2] = useSound(clapSound2)
  const [tickSound3] = useSound(clapSound3)
  const [tickSound4] = useSound(clapSound4)
  const [tickSound5] = useSound(breakSound)
  

  useEffect(() => { 
    return () => document.removeEventListener("keydown", listeners, true);
  }, [])

  useInterval(tick, delay)  

  function play() {
    setShow(true)
    setScore(0)
    setWolfPos(0)
    setDelay(250)
    document.addEventListener("keydown", listeners);
  }

  function tick() {
    shuffle()
    removeEgg()
    incTicks()
    addScore()
    checkGameOver()
    const slopeNum = gen.next().value
    breakEgg()
    switch(slopeNum) {
      case (1):
        if(slope1.length) {
          setSlope1(slope => slope.map(eggPos => eggPos+=1))
          tickSound1()
        }
        return
      case (2):
        if(slope2.length) {
          setSlope2(slope => slope.map(eggPos => eggPos+=1))
          tickSound2()
        }
        return
      case (3):
        if(slope3.length) {
          setSlope3(slope => slope.map(eggPos => eggPos+=1))
          tickSound()
        }
        return
      case (4):
        if(slope4.length) {
          setSlope4(slope => slope.map(eggPos => eggPos+=1))
          tickSound3()
        }
        return
    }
  }


  function breakEgg() {
    setBreakEggSpriteLeft(sprite => sprite+=1)
    setBreakEggSpriteRight(sprite => sprite+=1)
  }

  function addScore() {
    slope1.map(eggPos => {
      if(eggPos >= 4 && wolfPos===0) {
        setScore(score => score+=1)
        tickSound4()
      }
      if(eggPos >= 4 && wolfPos!==0) {
        setBreakEggSpriteLeft(0)
        setLives(lives => lives+=1)
        tickSound5()
      }
    })
    slope2.map(eggPos => {
      if(eggPos >= 4 && wolfPos===1) {
        setScore(score => score+=1)
        tickSound4()
      }
      if(eggPos >= 4 && wolfPos!==1) {
        setBreakEggSpriteLeft(0)
        setLives(lives => lives+=1)
        tickSound5()
      }
    })
    slope3.map(eggPos => {
      if(eggPos >= 4 && wolfPos===2) {
        setScore(score => score+=1)
        tickSound4()
      }
      if(eggPos >= 4 && wolfPos!==2) {
        setBreakEggSpriteRight(0)
        setLives(lives => lives+=1)
        tickSound5()
      }
    })
    slope4.map(eggPos => {
      if(eggPos >= 4 && wolfPos===3) {
        setScore(score => score+=1)
        tickSound4()
      }
      if(eggPos >= 4 && wolfPos!==3) {
        setBreakEggSpriteRight(0)
        setLives(lives => lives+=1)
        tickSound5()
      }
    })
  }

  function removeEgg() {  //удаление скатившегося яйца из массива
    setSlope1(slope => slope.filter(eggPos => eggPos < 4))
    setSlope2(slope => slope.filter(eggPos => eggPos < 4))
    setSlope3(slope => slope.filter(eggPos => eggPos < 4))
    setSlope4(slope => slope.filter(eggPos => eggPos < 4))
  }

  function shuffle() {
    const boolRand = Math.random() < 0.5
    if(boolRand) return
    let tempArr = []
          //какой массив участвует в раздаче яиц
    if(score < 50) {
      if((slope1.length && slope1[slope1.length-1] > 4) || slope1.length === 0 ) tempArr.push(0)
      if((slope3.length && slope3[slope3.length-1] > 4) || slope3.length === 0 ) tempArr.push(2)
      if((slope4.length && slope4[slope4.length-1] > 4) || slope4.length === 0 ) tempArr.push(3)
    }
    else if (score < 100) {
      if((slope1.length && slope1[slope1.length-1] > 4) || slope1.length === 0 ) tempArr.push(0)
      if((slope2.length && slope2[slope2.length-1] > 4) || slope2.length === 0 ) tempArr.push(1)
      if((slope3.length && slope3[slope3.length-1] > 4) || slope3.length === 0 ) tempArr.push(2)
    } else {
      if((slope1.length && slope1[slope1.length-1] > 4) || slope1.length === 0 ) tempArr.push(0)
      if((slope2.length && slope2[slope2.length-1] > 4) || slope2.length === 0 ) tempArr.push(1)
      if((slope3.length && slope3[slope3.length-1] > 4) || slope3.length === 0 ) tempArr.push(2)
      if((slope4.length && slope4[slope4.length-1] > 4) || slope4.length === 0 ) tempArr.push(3)
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

  function incTicks() {
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
      setDelay(200)
    }
  }

  function listeners(e: KeyboardEvent) {
    if (e.key === 'w' || e.key === 'W' || e.key === 'ц' || e.key === 'Ц') setWolfPos(0)
    else if (e.key === 's' || e.key === 'S' || e.key === 'ы' || e.key === 'Ы') setWolfPos(1)
    else if (e.key === 'e' || e.key === 'E' || e.key === 'у' || e.key === 'У') setWolfPos(2)
    else if (e.key === 'd' || e.key === 'D' || e.key === 'в' || e.key === 'В') setWolfPos(3)
  }

  function checkGameOver() {
    if(lives ===4) {
      setLives(0)
      setDelay(null)
      setShow(false)
    }
  }

  return (
    <>
    <Wrapper>
      <BoardWrapper>
        <Board>
          <Background />
          {slope1.map(item => <EggLeftUpper show={show} key={v4()} sprite={item} /> )}
          {slope2.map(item => <EggLeftLower show={show} key={v4()} sprite={item} /> )}
          {slope3.map(item => <EggRightUpper show={show} key={v4()} sprite={item} /> )}
          {slope4.map(item => <EggRightLower  show={show} key={v4()} sprite={item} /> )}
          <Wolf show={show} sprite={wolfPos}/>
          <Display show={true} value={score}/>
          <Lives show={show}value={lives}/>
          <BreakEgg show={show} side={0} sprite={breakEggSpriteRight}/>
          <BreakEgg show={show} side={1} sprite={breakEggSpriteLeft}/>
          <Rabbit show={show} flash={Math.random() < 0.1} />
          <StartButton onClick={play}/>
          <LeftUpperButton onClick={() =>setWolfPos(0)} />
          <LeftLowerButton onClick={() =>setWolfPos(1)}/>
          <RightUpperButton onClick={() =>setWolfPos(2)}/>
          <RightLowerButton onClick={() =>setWolfPos(3)}/>
        </Board>
      </BoardWrapper>
      <BgImage src={Bg} />
    </Wrapper>
    <GlobalStyle />
    </>
  );
}

export default App;
