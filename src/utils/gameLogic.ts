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

class Egg {
  pos: number
  speed: number

  constructor() {
    this.pos = 0
  }

  move() {
    this.pos+=1
  }
}

class Slope {
  eggs: Egg[]

  constructor() {
    this.eggs = []
  }

  push() {
    this.eggs.push(new Egg())
  }

  moveAllEggs() {
    // for(const obj of this.eggs) {
    //   obj.move()
    // }
  }
}

export class Field {
  fsm: StateMachine
  iter: number
  slopes: Slope[]
  wolfPos: number
  slopeNum: number

  constructor() {
    this.fsm = new StateMachine()
    this.iter = 0
    this.slopes.push(new Slope()) 
    // this.slopes[1] = new Slope()
    // this.slopes[2] = new Slope()
    // this.slopes[3] = new Slope()
    this.wolfPos = 0
    this.slopeNum = 0
    this.shuffle = this.shuffle.bind(this)
    document.addEventListener("keydown", this.listeners);
  }
  
  shuffle() {
    // const rand = Math.floor(Math.random() * 4)
    // switch(rand) {
    //   case 0: 
    //     this.fsm.setState(this.slopes[0].moveAllEggs)
    //     return
    //   case 1: 
    //     this.fsm.setState(this.slopes[1].moveAllEggs)
    //     return
    //   case 2: 
    //     this.fsm.setState(this.slopes[2].moveAllEggs)
    //     return
    //   case 3: 
    //     this.fsm.setState(this.slopes[3].moveAllEggs)
    //     return
    // }
  }

  moveAllSlopes() {
    // this.slopes[this.slopeNum++].moveAllEggs()
    // if(this.slopeNum==3) this.slopeNum = 0
  }

  update(useStatesUpdate: Function) {
    setInterval(() => {
      this.fsm.update()
      useStatesUpdate()
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

const useField = () => {
  const [field] = useState(new Field())
  const [slopes, setSlopes] = useState<Slope[]>()

  useEffect(() => {
    field.update( () => {  //отправляем колбэк для постоянного обновления
      
      // setSlopes(field.slopes)
    })
  }, [])

  return [
    slopes,
  ]
}

export default useField

