let firstN = String(prompt("What is your first name?"));
let lastN = String(prompt("What is your last name?"));
let check1 = firstN.match(/^[a-z]+$/i)
let check2 = lastN.match(/^[a-z]+$/i)
if (check1 && check2) {
    firstN = firstN.charAt(0).toUpperCase() + firstN.slice(1).toLowerCase();
    lastN = lastN.charAt(0).toUpperCase() + lastN.slice(1).toLowerCase();
    console.log(`Hey, ${firstN} ${lastN}`);
    alert(`Hey, ${firstN} ${lastN}`);
}
else {
    console.log("Wrong input!");
    alert("Wrong input!");
}