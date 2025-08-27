//Function to check if a move is on the board

export class KnightTravails {
  constructor() {
    this.knightMoves = [
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
    ];
  }

  _isValidMove(x, y) {
    return x >= 0 && x <= 7 && y >= 0 && y <= 7;
  }

  solve(start, end) {
    const queue = [[start, [start]]];

    const visited = new Set();
    visited.add(JSON.stringify(start));

    //The main BFS loop.
    while (queue.length > 0) {
      //Dequeue current position and and its path
      const [currentPos, path] = queue.shift();

      //Check if we've reached the destination
      if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
        return path;
      }

      //Loop through all possible knight moves
      for (const move of this.knightMoves) {
        const newX = currentPos[0] + move[0];
        const newY = currentPos[1] + move[1];

        //Create a new position array for consistency
        const newPos = [newX, newY];

        //Check if new move is valid and has not been visited
        if (
          this._isValidMove(newX, newY) &&
          !visited.has(JSON.stringify(newPos))
        ) {
          visited.add(JSON.stringify(newPos));

          // Create new path by adding new position
          const newPath = [...path, newPos];

          queue.push([newPos, newPath]);
        }
      }
    }

    //If loop finishes without finding the end
    return null;
  }
}
