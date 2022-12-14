function checkBound(newVal, min, max, width) {
    if (newVal - width/2 < min) {
        return false
    } if (newVal + width/2 > max) {
        return false
    }
    return true
}

function checkPaddleBound(change, original) {
    // max: original + paddleWidth / 2 + change < ncol * (xSpace + boxWidth)
    // min: original + paddleWidth / 2 + change > xStart
    return checkBound(original + change, 
                      leftWall.position.x + boxHeight,
                      rightWall.position.x - boxHeight, paddleWidth)
}


function correctBallVelocity() {
    // if !(leftWall < ball X < rightWall) :
    //    invert X velocity
    if (!checkBound(ballMesh.position.x, 
        leftWall.position.x + boxHeight,
        rightWall.position.x - boxHeight, ballRadius)) {
        ballVelocity.x *= -1;
    }
    // if !(topWall > ball y) :
    //    invert Y velocity
    if (topWall.position.y - boxHeight/2 <= ballMesh.position.y + ballRadius/2) {
        ballVelocity.y *= -1;
    }
                    
}

function gameOver(ballPosition, paddlePosition) {
    if (ballPosition.y < paddlePosition.y) {
        return true
    }
    return false
}

function ballCollision(ballPosition, objectPosition, width) {
    
    circleDistancex = Math.abs(ballPosition.x - objectPosition.x);
    circleDistancey = Math.abs(ballPosition.y - objectPosition.y);

    if (circleDistancex > (width/2 + ballRadius)) { return false; }
    if (circleDistancey > (boxHeight/2 + ballRadius)) { return false; }

    if (circleDistancex <= (width/2)) { return 1; } 
    if (circleDistancey <= (boxHeight/2)) { return 2; }

    cornerDistance_sq = (circleDistancex - width/2)^2 +
                         (circleDistancey - boxHeight/2)^2;

    return (cornerDistance_sq <= (ballRadius^2));
}

function checkBoxCollisions() {
    
    for (let c = 0; c < ncol; c++) {
        for (let r = 0; r < nrow; r++) {
            if (cubes[c][r].active) {
                collide = ballCollision(ballMesh.position, cubes[c][r].cube.position, boxWidth)
                if (collide) {
                    scene.remove(cubes[c][r].cube)
                    cubes[c][r].active = false
                    if (collide == 1) {
                        ballVelocity.y *= -1
                    } else {
                        ballVelocity.x *= -1
                    }
                }
            }
        }
    }
}