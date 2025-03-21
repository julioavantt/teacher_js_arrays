const users = [
 { names: "Alice", age: 17 },
 { names: "Bob", age: 30 },
 { names: "Julio", age: 23 },
];

total = 0;
promedio = 0;

users.forEach((item) => (total = total + item.age));

total;
promedio = total / users.length;

promedio;
