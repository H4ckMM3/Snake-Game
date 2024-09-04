
**Canvas and Context:**

- We get the `<canvas>` element and its 2D context, which allows us to draw on the canvas.
- We set the canvas dimensions and the size of each cell (`cellSize`) for the game.

**Initial Settings:**

- We create the initial state of the snake, consisting of three segments.
- We set the initial direction for the snake's movement.
- We generate the initial food position using the `getRandomFoodPosition` function.
- We set the initial score.

**Game Update (updateGame):**

- We create a new head of the snake that moves in the current direction.
- We check if the snake has eaten the food. If yes, we increase the score and generate new food. If not, we remove the last segment of the snake.
- We check if the snake has collided with the boundaries of the field or with itself. If a collision occurs, the game resets.

**Game Rendering (drawGame):**

- We clear the canvas before each new frame.
- We draw the food and the snake.

**Game Reset (resetGame):**

- We reset the snake, direction, and score to their initial state when a collision happens.

**Key Press Handling (handleKeyPress):**

- We set the new direction of the snake's movement depending on the pressed key (arrow keys).

**Game Loop (gameLoop):**

- The `gameLoop` function runs, which updates and redraws the game every 100 milliseconds.

**Game Start:**

- The game loop starts using `setInterval`, and an event listener is added for each key press.
![image](https://github.com/user-attachments/assets/2ff56989-293b-42f9-bde8-fb1436a612c2)
