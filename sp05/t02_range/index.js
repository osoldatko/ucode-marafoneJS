
function checkDivision(i = 1,z = 60) {
    for (; i <= z; i++) {
        if (i % 2 != 0 && i % 3 != 0 && i % 10 != 0) {
            console.log(`The number ${i} -`);
        }
        if (i % 2 == 0 && i % 3 != 0 && i % 10 != 0) {
            console.log(`The number ${i} is divisible by 2`);
        }
        if (i % 2 != 0 && i % 3 == 0 && i % 10 != 0) {
            console.log(`The number ${i} is divisible by 3`);
        }
        if (i % 2 == 0 && i % 3 == 0 && i % 10 != 0) {
            console.log(`The number ${i} is divisible by 2, is divisible by 3`);
        }
        if (i % 3 != 0 && i % 10 == 0) {
            console.log(`The number ${i} is divisible by 2, is divisible by 10`);
        }
        if (i % 2 == 0 && i % 3 == 0 && i % 10 == 0) {
            console.log(`The number ${i} is divisible by 2, is divisible by 3, is divisible by 10`);
        }
    }
}

module.exports.checkDivision = checkDivision;
