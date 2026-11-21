

function calc() {
    const h = document.getElementById("h");

    const option1 = document.getElementById("operator").value;
    const input1 = Number(document.getElementById("input1").value);
    const input2 = Number(document.getElementById("input2").value);

    let res = 0;

    switch(option1) {
        case "add":
            res = input1 + input2
            break;
        case "subtract":
            res = input1 - input2
            break;
        case "multiply":
            res = input1 * input2
            break;
        case "divide":
            res = input1 / input2
            break;
        }
    
        console.log(res);
        h.textContent = res;
}
