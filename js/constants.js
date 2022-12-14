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

// x offset
total_space = (ncol * (boxWidth + 0)) / 2
xStart = -1 * total_space

// movement
ballVelocity = {x: 0, y: -0.03, z: 0}

// keyboard input
keyboardC = ["ArrowLeft", "ArrowRight"]
keys = [0,0]