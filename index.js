const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(totalBatteries); // Output: 31

// Code your solution here
