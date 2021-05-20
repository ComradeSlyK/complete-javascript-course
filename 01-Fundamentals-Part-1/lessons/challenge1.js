console.log("challenge1.js")

var markHigherBMI;

// Data 1
var markHeight = 1.69;
var markMass = 78;
var markBMI = markMass / (markHeight ** 2);
var johnHeight = 1.95;
var johnMass = 92;
var johnBMI = johnMass / (johnHeight ** 2);
console.log(markBMI, johnBMI)
markHigherBMI = (markBMI > johnBMI);
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
