
function makeNewCube (color) {
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)
    const material = new THREE.MeshPhongMaterial({
        color
    })
    const cube = new THREE.Mesh(geometry, material)
    return cube
}

function addLights () {
    // soft
    const ambientColor = 0x404040 
    const ambientIntensity = 1.0
    scene.add(new THREE.AmbientLight(ambientColor, ambientIntensity))

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(0, -1, 5)
    scene.add(directionalLight)

    const geometryBackground = new THREE.PlaneGeometry(100, 100)
    const materialBackground = new THREE.MeshPhongMaterial({ color: 0x000000 })

    const background = new THREE.Mesh(geometryBackground, materialBackground)
    background.position.set(0, 0, -1)
    scene.add(background)
}

function makeCubes () {
    // cube object is {
    //     cube: cube,
    //     active: true / false
    // }
    for (let c = 0; c < ncol; c++) {
        const row = []
        for (let r = 0; r < nrow; r++) {
            const cube = makeNewCube(colors[r])
            cube.position.x = xStart + (c * xSpace)
            cube.position.y = (r * boxHeight*2)

            row.push({
                cube: cube,
                active: true})
            scene.add(cube)
        }
        cubes.push(row)
    }
    numActive = ncol * nrow
}

function setupScene() {
    makeCubes()
    addLights()
}