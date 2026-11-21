
let input = prompt("Enter calculation: ");
let operator = "";

if (input.includes("+")) {
    operator = "+";
}
else if (input.includes("-")) {
    operator = "-";
}
else if (input.includes("*")) {
    operator = "*";
}
else if (input.includes("/")) {
    operator = "/";
}

const values = input.split(operator)
const num1 = values[0];
const num2 = values[1];


function calculate(num1, num2) {

    let res = 0;
    const p = document.getElementById("p");

    switch(operator) {
        case "+":
            res = num1 + num2;
            console.log(res)
            p.textContent = res
            break;
        case "-":
            res = num1 - num2;
            console.log(res)
            p.textContent = res
            break;
        case "*":
            res = num1 * num2;
            console.log(res)
            p.textContent = res
            break;
        case "/":
            res = num1 / num2;
            console.log(res)
            p.textContent = res
            break;
    }
}

calculate(parseInt(num1), parseInt(num2));
