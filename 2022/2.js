import { parseInputAsStrings } from '../inputs/helper.js'

const input = parseInputAsStrings('inputs/2022/2.txt').map((element) =>
  element.split(' ')
)

const scores = {
  A: 1,
  X: 1,
  B: 2,
  Y: 2,
  C: 3,
  Z: 3,
}

const DRAW = 3
const WIN = 6
const LOSS = 0

const pointsForBattle = (opponentMove, playerMove) => {
  switch (Math.abs(opponentMove - playerMove)) {
    case 0:
      return DRAW
    case 1:
      if (opponentMove < playerMove) {
        return WIN
      }
      break
    default:
      if (opponentMove > playerMove) {
        return WIN
      }
  }

  return LOSS
}

let total = 0

input.forEach((element) => {
  const [opponentMove, playerMove] = element

  total += pointsForBattle(scores[opponentMove], scores[playerMove])
  total += scores[playerMove]
})

export const d2p1 = total
