


export class GameState {
  board = {
    wolfPos: 0,
    eggLeftUpperPos: 0,
    eggLeftLowerPos: 0,
    eggRightUpperPos: 0,
    eggRightLowerPos: 0,
  };
  static instance = GameState

  getNewBoard() {
    return {
      wolfPos: 0,
      eggLeftUpperPos: 0,
      eggLeftLowerPos: 0,
      eggRightUpperPos: 0,
      eggRightLowerPos: 0,
      points: 0,
    }
  }

  constructor() {
    this.startNewGame()
  }

  startNewGame() {
    this.board = this.getNewBoard()
  }

  moveWolf(value: number) {
    this.board = {
      ...this.board,
      wolfPos: value
    }
  }

  moveEggLeftUpper() {
    this.board = {
      ...this.board,
      eggLeftUpperPos: this.board.eggLeftUpperPos + 1
    }
  }

  getState() {
    return {
      board: this.board
    }
  }

}