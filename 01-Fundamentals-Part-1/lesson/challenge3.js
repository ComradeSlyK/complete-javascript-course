console.log("challenge3.js")

var dScore1;
var dScore2;
var dScore3;
var dAvg;
var kScore1;
var kScore2;
var kScore3;
var kAvg;

// Data 1
dScore1 = 96;
dScore2 = 108;
dScore3 = 89;
dAvg = (dScore1 + dScore2 + dScore3) / 3;
kScore1 = 88;
kScore2 = 91;
kScore3 = 100;
kAvg = (kScore1 + kScore2 + kScore3) / 3;
if (dAvg > kAvg) {
    console.log("Dolphins team wins")
} else if (kAvg > dAvg) {
    console.log("Koala team wins")
} else {
    console.log("It's a boring draw")
}

// Data 2
dScore1 = 97;
dScore2 = 112;
dScore3 = 101;
dAvg = (dScore1 + dScore2 + dScore3) / 3;
kScore1 = 109;
kScore2 = 95;
kScore3 = 123;
kAvg = (kScore1 + kScore2 + kScore3) / 3;
if (dAvg > kAvg && dAvg > 100) {
    console.log("Dolphins team wins")
} else if (kAvg > dAvg && kAvg > 100) {
    console.log("Koala team wins")
} else {
    console.log("It's a boring draw")
}

// Data 3
dScore1 = 97;
dScore2 = 112;
dScore3 = 101;
dAvg = (dScore1 + dScore2 + dScore3) / 3;
kScore1 = 109;
kScore2 = 95;
kScore3 = 106;
kAvg = (kScore1 + kScore2 + kScore3) / 3;
if (dAvg > kAvg && dAvg > 100) {
    console.log("Dolphins team wins")
} else if (kAvg > dAvg && kAvg > 100) {
    console.log("Koala team wins")
} else if (kAvg === dAvg && kAvg > 100) {
    console.log("It's a boring draw")
} else {
    console.log("Noone reached the lower limit score of 100")
}
