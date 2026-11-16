const t_array = ["Banana", "Apple", "Pear", "Strawberry",]

function concat_f(array_) {
    let res = "";

    for (let i = 0; i < array_.length; i++) {
        res = res.concat(array_[i]);
    }
    return res
};

let responce = concat_f(t_array)

let e = document.getElementById("div");
let text = document.createTextNode(responce)

e.appendChild(text)
console.log(responce)