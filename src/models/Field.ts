/////////////////////
////////Класс Field//
/////////////////////

import { Slope } from "./Slope"
import { StateMachine } from "./StateMachine"

export class Field {
  fsm: StateMachine
  iter: number
  slopes: Slope[]
  wolfPos: number
  slopeNum: number

  constructor() {
    this.fsm = new StateMachine()
    this.iter = 0
    this.slopes = []
    this.slopes[0] = new Slope()
    this.moveAllSlopes()
    // this.slopes[1] = new Slope()
    // this.slopes[2] = new Slope()
    // this.slopes[3] = new Slope()
    this.wolfPos = 0
    this.slopeNum = 0
    this.shuffle = this.shuffle.bind(this)
    document.addEventListener("keydown", this.listeners);
  }
  
  shuffle() {
  }

  moveAllSlopes() {
    // this.slopes[0].moveAllEggs()
    // if(this.slopeNum==3) this.slopeNum = 0
    this.slopes[0].eggs[0].pos+=1
    console.log(this.slopes[0])
  }

  update(useStatesUpdate: Function) {
    setInterval(() => {
      this.fsm.update()
      useStatesUpdate()
      this.iter+=1;
    }, 1000)
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