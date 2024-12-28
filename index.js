let homeScore = 0
let guestScore = 0

let homeScoreDisplay = document.getElementById("home-score")
let guestScoreDisplay = document.getElementById("guest-score")
homeScoreDisplay.textContent = homeScore
guestScoreDisplay.textContent = guestScore

let homeScoreText = document.getElementById("home-text")
let guestScoreText = document.getElementById("guest-text")

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreDisplay.textContent = homeScore
    guestScoreDisplay.textContent = guestScore
    guestScoreText.style.textShadow = 'none'
    homeScoreText.style.textShadow = 'none'
}

function incrementScore(increment, side) {
    if (side == 'home') {
        homeScore += increment
        homeScoreDisplay.textContent = homeScore
    } else {
        guestScore += increment
        guestScoreDisplay.textContent = guestScore
    }
    
    if (homeScore > guestScore) {
        homeScoreText.style.textShadow = "0 0 10px yellow"
        guestScoreText.style.textShadow = 'none'
    } else if (guestScore > homeScore) {
        guestScoreText.style.textShadow = "0 0 10px yellow"
        homeScoreText.style.textShadow = 'none'
    } else {
        guestScoreText.style.textShadow = 'none'
        homeScoreText.style.textShadow = 'none'
    }
}