
let num = Number(prompt("Enter number: "));

const ul = document.getElementById("ul")
const li = document.createElement("li");

let isPrime = true;

if (num <= 1 || !Number.isInteger(num)) {
    isPrime = false;
} else {
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break
        }
    }
}

if (isPrime) {
    li.appendChild(document.createTextNode(num + " Is a prime number"))
}else {
    li.appendChild(document.createTextNode(num + " Is NOT a prime number"))
}

ul.appendChild(li)