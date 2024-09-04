// Получаем элемент canvas и его контекст
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Размеры холста и игры
const canvasSize = 400;
const cellSize = 20;

// Задаем размеры холста
canvas.width = canvasSize;
canvas.height = canvasSize;

// Начальные настройки игры
let snake = [
    { x: cellSize * 5, y: cellSize * 5 },
    { x: cellSize * 4, y: cellSize * 5 },
    { x: cellSize * 3, y: cellSize * 5 }
];
let direction = { x: 1, y: 0 };
let food = getRandomFoodPosition();
let score = 0;

// Функция для случайной позиции еды
function getRandomFoodPosition() {
    let x = Math.floor(Math.random() * (canvasSize / cellSize)) * cellSize;
    let y = Math.floor(Math.random() * (canvasSize / cellSize)) * cellSize;
    return { x, y };
}

function updateGame() {
    // Движение змейки
    const head = { x: snake[0].x + direction.x * cellSize, y: snake[0].y + direction.y * cellSize };
    snake.unshift(head);

    // Проверка съела ли змейка еду
    if (head.x === food.x && head.y === food.y) {
        score++;
        food = getRandomFoodPosition();
    } else {
        snake.pop(); // Убираем последний элемент, если не съели еду
    }

    // Проверка на столкновение с границами или самим собой
    if (
        head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    ) {
        resetGame();
    }
}

// Функция для перерисовки игры
function drawGame() {
    // Очищаем холст
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Рисуем еду
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, cellSize, cellSize);

    // Рисуем змейку
    ctx.fillStyle = "green";
    snake.forEach(segment => ctx.fillRect(segment.x, segment.y, cellSize, cellSize));
}

// Функция для сброса игры
function resetGame() {
    snake = [
        { x: cellSize * 5, y: cellSize * 5 },
        { x: cellSize * 4, y: cellSize * 5 },
        { x: cellSize * 3, y: cellSize * 5 }
    ];
    direction = { x: 1, y: 0 };
    food = getRandomFoodPosition();
    score = 0;
}

// Функция для обработки нажатий клавиш
function handleKeyPress(event) {
    switch (event.key) {
        case "ArrowUp":
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
        case "ArrowDown":
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
        case "ArrowLeft":
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
        case "ArrowRight":
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
    }
}

// Запуск игры
function gameLoop() {
    updateGame();
    drawGame();
}

// Запускаем игровой цикл с интервалом 100 мс
setInterval(gameLoop, 100);

// Добавляем обработчик нажатия клавиш
window.addEventListener("keydown", handleKeyPress);