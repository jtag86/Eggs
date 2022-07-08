//////////////////////
//Класс StateMachine//
//////////////////////

export class StateMachine {
  activeState: Function | null = null

  constructor() {}

  setState(state: Function): void {
    this.activeState = state
  }

  update(): void {
    if(this.activeState) this.activeState()
  }
}