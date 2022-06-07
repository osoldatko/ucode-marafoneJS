let beginR = +prompt('Enter the number for the beginning of a range', '1');
let endR = +prompt('Enter the number for the end of a range', '100');

function checkD(beginR, endR) {
    for (let i = beginR; i <= endR; i++) {
        let description = " - "
        if (i % 2 === 0) {
            description = "is even"
        }
        if (i % 3 === 0 && i % 2 !== 0) {
            description = "is a multiple of 3"
        }
        else if (i % 3 === 0) {
            description = description.concat(",a multiple of 3")
        }
        if (i % 10 === 0) {
            description = description.concat(",a multiple of 10")
        }
        console.log(i + description + "\n")
    }
}

checkD(beginR, endR);