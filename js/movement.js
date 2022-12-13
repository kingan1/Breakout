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