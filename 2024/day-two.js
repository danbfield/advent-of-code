import { parseInputAsStrings } from '../inputs/helper.js'

const reports = parseInputAsStrings('inputs/2024/2.txt')

const unsafeReports = []

for (let i = 0; i < reports.length; i++) {
  // Replaces "7 6 4 2 1" with [ 7, 6, 4, 2, 1 ]
  const report = reports[i]
    .split(/(\s+)/)
    .filter((item) => item !== ' ')
    .map((item) => parseInt(item))

  // Take a sneak peek, find out if we're increasing in value
  const initialTrajectoryIsIncreasing = report[0] < report[1]

  for (let j = 0; j < report.length; j++) {
    if (j !== report.length - 1) {
      // Get the current and next level for comparison
      const currentLevel = report[j]
      const nextLevel = report[j + 1]

      // Check our current trajectory, are we still increasing?
      const currentTrajectory = currentLevel < nextLevel

      // If not, we're unsafe, and we can break out.
      if (initialTrajectoryIsIncreasing !== currentTrajectory) {
        unsafeReports.push(report)
        break
      }

      // Figure out the difference
      const levelDifference = Math.abs(currentLevel - nextLevel)

      // Any two adjacent levels differ by at least one and at most three.
      // If it breaks this contract, add it to an unsafe report & break the loop.
      // We don't care about other levels if we know the report is already broken.
      if (levelDifference > 3 || levelDifference < 1) {
        unsafeReports.push(report)
        break
      }
    }
  }
}

const d2p1 = reports.length - unsafeReports.length
const d2p2 = 0

export { d2p1, d2p2 }
