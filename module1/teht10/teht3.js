
let dice_num = Number(prompt("Enter number of dices: "));
let wanted = Number(prompt("Enter eye numbers sum: "));

let sum_count = 0;
function roll_dice(dice_num) {
    for (let i = 0; i < 10000; i++) {
        let eye_num_sum = 0;

        for (let j = 1; j <= dice_num; j++) {
            let eye_num = Math.floor(Math.random() * 6) + 1;
            eye_num_sum += eye_num;
        }

        if (eye_num_sum == wanted) {
            sum_count += 1
        }
    }
    let res = (sum_count / 10000) * 100
    const e = document.getElementById("div");
    const p = document.createTextNode(`Probability to get sum ${wanted} with ${dice_num} dice is ${res} %`);

    e.appendChild(p)
    console.log(res + "%")
}

roll_dice(dice_num);
