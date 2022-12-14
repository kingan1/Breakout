const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

camera.position.z = 5
document.addEventListener('keydown', onKeyPress, false)
document.addEventListener('keyup', onKeyUp, false)

function onKeyPress(event) {
    if (keyboardC.includes(event.code)) {
        event.preventDefault()
        keys[keyboardC.indexOf(event.code)] = true
    }
}
function onKeyUp(event) {
    if (keyboardC.includes(event.code)) {
        event.preventDefault()
        keys[keyboardC.indexOf(event.code)] = false
    }
}

function animate () {
    requestAnimationFrame(animate)
    // left
    // right
    d = 0.05
    ballMesh.position.add(ballVelocity)

    // ensure ball is within bounds
    correctBallVelocity()

    
    if (keys[0]) {
        // if the left key was pressed
        if (checkPaddleBound(-1 * d, paddleMesh.position.x))
            paddleMesh.position.x -= d
    } else if (keys[1]) {
        // if the right key was pressed
        if (checkPaddleBound(d, paddleMesh.position.x))
            paddleMesh.position.x += d
    }

    // if the ball goes below the paddle
    if (gameOver(ballMesh.position, paddleMesh.position)) {
        // decrease lives
        if (lives == 0) {
            // console.log("DONE")
            ballVelocity.x = 0
            ballVelocity.y = 0
            document.getElementById("gameover").innerText = "GAME OVER";
        } else {
            lives -= 1
            livesElem.innerText = String(lives).padStart(3, 0)
            resetGame()
        }

    }

    // if the ball hits the paddle
    collide_val = ballCollision(ballMesh.position, paddleMesh.position, paddleWidth)
    if (collide_val) {
        ballVelocity.y *= -1
        // console.log(-1 * ((ballMesh.position.x - paddleMesh.position.x)))
        ballVelocity.x += (0.03* (ballMesh.position.x - paddleMesh.position.x))
        
    }
    checkBoxCollisions()

    renderer.render(scene, camera)
};

setupScene()
animate()
