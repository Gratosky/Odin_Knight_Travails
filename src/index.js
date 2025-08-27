import { KnightTravails } from "./knight_travails.mjs";

const knight = new KnightTravails();

const path = knight.solve([0, 0], [7, 7]);

if (path) {
  console.log(
    `The shortest path from [0, 0] to [7, 7] is ${path.length - 1} moves:`
  );
  for (const pos of path) {
    console.log(pos);
  }
} else {
  console.log("No path found.");
}
