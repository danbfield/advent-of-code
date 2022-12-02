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

const scoreEarnedThisRound = (opponentMove, playerMove) => {
  let scoreThisRound = 0

  switch (Math.abs(opponentMove - playerMove)) {
    case 0:
      scoreThisRound += DRAW
      break
    case 1:
      if (opponentMove < playerMove) {
        scoreThisRound += WIN
      }
      break
    default:
      if (opponentMove > playerMove) {
        scoreThisRound += WIN
      }
  }

  scoreThisRound += playerMove

  return scoreThisRound
}

let total = 0

for (let i = 0; i < input.length; i++) {
  const [opponentMove, playerMove] = input[i]

  const opponentMoveScore = scores[opponentMove]
  const playerMoveScore = scores[playerMove]

  total += scoreEarnedThisRound(opponentMoveScore, playerMoveScore)
}

export const d2p1 = total
