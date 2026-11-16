
let num = Number(prompt("Enter number of candidates: "))

function candidate(num) {
    let candidates = [];

    for (let i = 1; i <= num; i++) {
        let name = prompt(`Condidate ${i}, name: `)

        candidates.push({
            "name": name,
            "number": i,
            "votes": 0
        });
    }

    return candidates
}

function vote(candidates) {
    let voters = Number(prompt("Enter number of voters: "));

    for (let i = 0; i < voters; i++) {
        let vote = prompt("Who your voting? ");

        if (vote === null || vote.trim() === "") {
            continue;
        }

        const candidate = candidates.find(
            candidate => candidate.name.toLowerCase() === vote.toLowerCase()
        );

        if (candidate) {
            candidate.votes++
        }
    }
    candidates.sort((a, b) => b.votes - a.votes)

}

const res = candidate(num);
vote(res);

const winner = `The winner is ${res[0].name} with ${res[0].votes} votes.`;
console.log(winner);

const h = document.getElementById("h");
const hText = document.createTextNode(winner)
const ul = document.getElementById("ul");

h.appendChild(hText);

for (let i = 0; i < res.length; i++) {
    const li = document.createElement("li");
    let text = document.createTextNode(res[i]["number"] + " Name: " + res[i]["name"] + ": Votes: " + res[i]["votes"]);
    ul.appendChild(li);
    li.appendChild(text);
}
console.log(res);