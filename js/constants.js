// dimensions
const boxHeight = 0.15
const boxWidth = 0.45
const boxDepth = 0.3
const ballRadius = 0.05
const paddleWidth = 1.0
// space in between cubes
const xSpace = 0.5

// constants
const nrow = 8
const ncol = 14

// objects
let cubes = []
let initialPaddlePosition = {x: 0, y: -3, z:0}
let initialBallPosition = {x: 0, y: -2, z:0}
let ball
let colors = [
    "yellow","yellow",
    "green","green",
    "orange","orange",
    "red","red"]
let scoreVals = [
    1, 1,
    3, 3,
    5, 5,
    7, 7
]
let scoreElem = document.getElementById("score")
let livesElem = document.getElementById("lives")
let score = 0
let lives = 3

// x offset
let total_space = (ncol * (boxWidth + 0)) / 2
let xStart = -1 * total_space

// movement
let initialBallVelocity = {x: 0, y: -0.03, z: 0}
let ballVelocity = {...initialBallVelocity}
// keyboard input
let keyboardC = ["ArrowLeft", "ArrowRight"]
let keys = [0,0]