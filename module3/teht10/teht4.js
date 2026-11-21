
const form = document.querySelector("#form");
const p = document.querySelector("#p");

form.addEventListener("submit", function(event) {
    event.preventDefault()

    const fname = document.querySelector(`[name="firstName"]`).value;
    const mname = document.querySelector(`[name="middleName"]`).value;
    const lname = document.querySelector(`[name="lastName"]`).value;

    p.textContent = `Your name is: ${fname} ${mname} ${lname}`;
});

