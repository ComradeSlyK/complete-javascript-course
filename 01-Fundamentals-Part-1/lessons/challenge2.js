console.log("challenge2.js")

// Data 1
var markHeight = 1.69;
var markMass = 78;
var markBMI = markMass / (markHeight ** 2);
var johnHeight = 1.95;
var johnMass = 92;
var johnBMI = johnMass / (johnHeight ** 2);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`)
} else if (markBMI < johnBMI) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`)
} else {
    console.log(`John's and Mark's BMI are the same (${johnBMI})`)
}

// Data 2
markHeight = 1.88;
markMass = 95;
markBMI = markMass / (markHeight ** 2);
johnHeight = 1.76;
johnMass = 85;
johnBMI = johnMass / (johnHeight ** 2);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`)
} else if (markBMI < johnBMI) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`)
} else {
    console.log(`John's and Mark's BMI are the same (${johnBMI})`)
}
