interface Mountain {
  name: string;
  height: number;
};

let mountains: Mountain[] = [
  { name: "kilaminjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

function findNameOfTallestMountain(mountains: Mountain[]): string {
  let currentTallest = 0;
  let currentName = "";

  for (let mountain of mountains) {
    if (mountain.height > currentTallest) {
      currentTallest = mountain.height;
      currentName = mountain.name;
    }
  }
  return currentName;
};

console.log(findNameOfTallestMountain(mountains));
export {Mountain, findNameOfTallestMountain};