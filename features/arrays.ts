const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMaker = [['f150'], ['corolla'], ['camaro']];
const carsBy: string[][] = [];

//help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push('2');

// help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types

const importantDate: (Date | string)[] = [new Date()];

importantDate.push('2030-10-10');

importantDate.push(new Date());
