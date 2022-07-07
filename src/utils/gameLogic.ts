import React, { useState, useEffect } from 'react'
import { setConstantValue } from 'typescript'
import { useInterval } from './useInterval'

class StateMachine {
  activeState: Function | null = null

  constructor() {}

  setState(state: Function): void {
    this.activeState = state
  }

  update(): void {
    if(this.activeState) this.activeState()
  }
}

export class Board {
  fsm: StateMachine
  iter: number
  eggLeftUpperPos: number
  eggLeftLowerPos: number
  eggRightUpperPos: number
  eggRightLowerPos: number
  wolfPos: number

  constructor() {
    this.fsm = new StateMachine()
    this.iter = 0    
    this.eggLeftUpperPos = 0
    this.eggLeftLowerPos = 0
    this.eggRightUpperPos = 0
    this.eggRightLowerPos = 0
    this.wolfPos = 0
    this.shuffle = this.shuffle.bind(this)
    this.rollingEggLeftUpper = this.rollingEggLeftUpper.bind(this)
    this.rollingEggLeftLower = this.rollingEggLeftLower.bind(this)
    this.rollingEggRightUpper = this.rollingEggRightUpper.bind(this)
    this.rollingEggRightLower = this.rollingEggRightLower.bind(this)
    this.fsm.setState(this.shuffle)
    document.addEventListener("keyup", this.listeners);
  }
  
  shuffle() {
    const rand = Math.floor(Math.random() * 4)
    switch(rand) {
      case 0: 
        this.fsm.setState(this.rollingEggLeftUpper)
        return
      case 1: 
        this.fsm.setState(this.rollingEggLeftUpper)
        return
      case 2: 
        this.fsm.setState(this.rollingEggLeftUpper)
        return
      case 3: 
        this.fsm.setState(this.rollingEggLeftUpper)
        return
    }
  }

  rollingEggLeftUpper() {
    if(this.eggLeftUpperPos>=5) return
    this.eggLeftUpperPos+=1
  }

  rollingEggLeftLower() {
    if(this.eggLeftLowerPos>=5) return
    this.eggLeftLowerPos+=1
  }

  rollingEggRightUpper() {
    if(this.eggRightUpperPos>=5) return
    this.eggRightUpperPos+=1
  }

  rollingEggRightLower() {
    if(this.eggRightLowerPos>=5) return
    this.eggRightLowerPos+=1
  }

  update(useStatesUpdate: Function) {
    setInterval(() => {
      if(this.iter % 10)
      useStatesUpdate()
      this.fsm.update()
      this.iter+=1;
    }, 100)
  }

  listeners = (e: KeyboardEvent) => {
    if (e.key === 'w' || e.key === 'W' || e.key === 'ц' || e.key === 'Ц') {
      this.wolfPos = 0
    }
    else if (e.key === 's' || e.key === 'S' || e.key === 'ы' || e.key === 'Ы') {
      this.wolfPos = 1
    }
    else if (e.key === 'e' || e.key === 'E' || e.key === 'у' || e.key === 'У') {
      this.wolfPos = 2
    }
    else if (e.key === 'd' || e.key === 'D' || e.key === 'в' || e.key === 'В') {
      this.wolfPos = 3
    }
  }
}

const useGameState = () => {
  const [board] = useState(new Board())
  const [wolfPos, setWolfPos] = useState(0)
  const [eggLeftUpperPos, setEggLeftUpperPos] = useState(0)
  const [iter, setIter] = useState(0)


  useEffect(() => {
    board.update((iter: number) => {

      setEggLeftUpperPos(board.eggLeftUpperPos)
      setWolfPos(board.wolfPos)
    })
  }, [])

  // const tick = () => {

  //   if(iter % 10){

  //   }

  //   setEggLeftUpperPos(board.eggLeftUpperPos)
  //   setWolfPos(board.wolfPos)
  //   setIter((prev) => prev+1)
  // }

  // useInterval( () => tick(), 100)

  return [
    eggLeftUpperPos,
    wolfPos
  ]
}

export default useGameState

