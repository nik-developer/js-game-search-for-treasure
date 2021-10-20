function getRandomNumber(size) {
    return ~~(Math.random() * size);
};
function getDistance(event, target) {
    const diffX = event.offsetX - target.x;
    const diffY = event.offsetY - target.y;
    return Math.sqrt((diffX ** 2) + (diffY ** 2))
}
function getDistanceHint(distance) {
    if (distance < 10) {
        return "Обожжешься!"
    } else if (distance < 20) {
        return "Очень горячо"
    } else if (distance < 40) {
        return "Горячо"
    } else if (distance < 80) {
        return "Тепло"  
    } else if (distance < 160) {
        return "Холодно"
    } else if (distance < 320) {
        return "Очень холодно"
    } else if (distance < 640) {
        return "Холодрыга: брррррр"
    } else {
        return "Замерзнешь!"
    }
};

const width = 600;
const height = 600;
let clicks = 0;
const clickLimit = 50;
        
const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
document.querySelector(".map").addEventListener("click", (event) => {
    clicks++;
    if (clicks > clickLimit) {
        alert("КОНЕЦ ИГРЫ")
        return;
    }
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);

    const distanceRef = document.querySelector(".distance");
    distanceRef.textContent = (distanceHint)

    const clickRef = document.querySelector(".clicks-remaining");
    clickRef.textContent = ("Осталось " + (clickLimit - clicks) + " попыток.")
    
    if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks)
    }
});







