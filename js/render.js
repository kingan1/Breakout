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

    if (keys[0]) {
        if (checkPaddleBound(-1 * d, paddleMesh.position.x))
            paddleMesh.position.x -= d
    } else if (keys[1]) {
        if (checkPaddleBound(d, paddleMesh.position.x))
            paddleMesh.position.x += d
    }

    if (gameOver(ballMesh.position, paddleMesh.position)) {
        scene.remove(ballMesh)
        scene.remove(paddleMesh)
        console.log("OVER")
    }

    renderer.render(scene, camera)
};

setupScene()
animate()
