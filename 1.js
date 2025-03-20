const arr = [
 { name: "Julio", age: 23 },
 { name: "Lucía", age: 17 },
];

let total = 0;
let promedioEdad = 0;

arr.forEach((item) => (total += item.age));
promedioEdad = total / arr.length;

total;
promedioEdad;
