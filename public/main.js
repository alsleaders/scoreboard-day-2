let countOfTimesClickedT1 = 0
let countOfTimesClickedT2 = 0
let numberOfQuarters = 1
let timeRemaining = 500
let interval

const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}

const startCountdown = () => {
  interval = setInterval(() => {
    timeRemaining -= 1
    console.log(timeRemaining)
    if (timeRemaining === 0) {
      clearInterval(interval)
    }
    const mins = Math.floor(timeRemaining / 60)
    const secs = timeRemaining - mins * 60
    console.log(mins, secs)
    document.querySelector('.updatedClock').textContent = mins + ':' + secs
  }, 1000)
}

const turnOffButton = () => {
  console.log('No button for you')
  document.querySelector('.clock-start').disabled = true
}
const updateCounterTeam1InHtml = () => {
  document.querySelector('.team1Score').textContent = countOfTimesClickedT1
  if (countOfTimesClickedT1 === 4) {
    document.querySelector('.team1Score').textContent = 'Winner!'
    document.querySelector('.team1Score').classList.add('winner')
  }
}

const updateCounterTeam2InHtml = () => {
  document.querySelector('.team2Score').textContent = countOfTimesClickedT2
  if (countOfTimesClickedT2 === 4) {
    document.querySelector('.team2Score').textContent = 'Winner!'
    document.querySelector('.team2Score').classList.add('winner')
  }
}

const addOneToCountT1 = () => {
  console.log('button was clicked')
  countOfTimesClickedT1 += 1
  if (countOfTimesClickedT1 === 4) {
    console.log('winner')
    document.querySelector('.team-1-add-1-button').disabled = true
  }
  updateCounterTeam1InHtml()
}

const addOneToCountT2 = () => {
  console.log('button was clicked')
  countOfTimesClickedT2 += 1
  if (countOfTimesClickedT2 === 4) {
    console.log('winner')
    document.querySelector('.team-2-add-1-button').disabled = true
  }
  updateCounterTeam2InHtml()
}

const subtractOneFromCountT1 = () => {
  console.log('button was clicked')
  countOfTimesClickedT1 -= 1
  if (countOfTimesClickedT1 <= 0) {
    console.log('negative')
    document.querySelector('.team-1-subtract-1-button').disabled = true
  }
  updateCounterTeam1InHtml()
}

const subtractOneFromCountT2 = () => {
  console.log('button was clicked')
  countOfTimesClickedT2 -= 1
  if (countOfTimesClickedT2 <= 0) {
    console.log('negative')
    document.querySelector('.team-2-subtract-1-button').disabled = true
  }
  updateCounterTeam2InHtml()
}

const updateTeamOneName = () => {
  const teamName1 = document.querySelector('.team-1-new-name').value
  console.log(teamName1)
  document.querySelector('.updatedTeam1Name').textContent = teamName1
}

const updateTeamTwoName = () => {
  const teamName2 = document.querySelector('.team-2-new-name').value
  console.log(teamName2)
  document.querySelector('.updatedTeam2Name').textContent = teamName2
}

const resetGame = () => {
  console.log('new game')
  countOfTimesClickedT1 = 0
  document.querySelector('.team1Score').textContent = countOfTimesClickedT1
  document.querySelector('.updatedTeam1Name').textContent = 'Team 1'
  countOfTimesClickedT2 = 0
  document.querySelector('.updatedTeam2Name').textContent = 'Team 2'
  document.querySelector('.team2Score').textContent = countOfTimesClickedT2
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
  timeRemaining = 500
  clearInterval(interval)
  document.querySelector('.team1Score').classList.remove('winner')
  document.querySelector('.team2Score').classList.remove('winner')
  document.querySelector('.updatedClock').textContent =
    'This is where the clock is going'
  document.querySelector('.clock-start').disabled = false
}

// let oneSecond = () => {
//   console.log('really count down 1 second')
//   periodTime -= 1
//   updateGameTime()
// }

// function oneSecond() {
//   periodTime = setInterval(subtractOne, 1000)
// }

// // // function subtractOne () {
// // //   periodTime -= 1;
// // }
// const startCountdown = () => {
//   console.log('game started')
//   oneSecond()
// }
// setInterval = minutes + ':' + seconds

// numberOfQuarters += 1
// document.querySelector('.present-quarter').textContent = numberOfQuarters

document.addEventListener('DOMContentLoaded', main)
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addOneToCountT1)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addOneToCountT2)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractOneFromCountT1)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractOneFromCountT2)
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeamOneName)
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeamTwoName)
document.querySelector('.game-over').addEventListener('click', resetGame)
document.querySelector('.clock-start').addEventListener('click', turnOffButton)
document.querySelector('.clock-start').addEventListener('click', startCountdown)
