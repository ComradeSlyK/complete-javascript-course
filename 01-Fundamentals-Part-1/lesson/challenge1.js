console.log("challenge1.js")

// Data 1
let markHeight = 1.69;
let markMass = 78;
let markBMI = markMass / (markHeight ** 2);
let johnHeight = 1.95;
let johnMass = 92;
let johnBMI = johnMass / (johnHeight ** 2);
console.log(markBMI, johnBMI)

let markHigherBMI = (markBMI > johnBMI);
console.log(markHigherBMI)

// Data 2
markHeight = 1.88;
markMass = 95;
markBMI = markMass / (markHeight ** 2);
johnHeight = 1.76;
johnMass = 85;
johnBMI = johnMass / (johnHeight ** 2);
console.log(markBMI, johnBMI)

markHigherBMI = (markBMI > johnBMI);
console.log(markHigherBMI)
