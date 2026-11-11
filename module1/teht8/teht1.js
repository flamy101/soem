
let year1 = Number(prompt("Enter first year: "));
let year2 = Number(prompt("Enter second year: "));

const ul = document.getElementById("un_li");
for( i = year1; i <= year2; i++) {
    const li = document.createElement("li");
    let value = document.createTextNode(i);
    
    li.appendChild(value);
    ul.appendChild(li)
}
