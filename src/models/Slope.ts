/////////////////////
////////Класс Slope//
/////////////////////

import { Egg } from "./Egg"

export class Slope {
  eggs: Egg[]

  constructor() {
    this.eggs = []
    this.eggs.push(new Egg())
  }

  addEgg() {
    this.eggs.push(new Egg())
  }

  moveAllEggs() {
    for (let egg of this.eggs) {
      egg.move()
    }
  }
}