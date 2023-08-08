const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", "setStatus");

function setStatus() {
    const choice = select.value;

    if (choice === "buyer") {
        para.textContent = "Welcome, call us if you eed help with your order.";
    } else if (choice === "collab") {
        para.textContent = "Hit me up on linkedin";
    } else if (choice === "wholeseller") { para.textContent = "Show me the money"; }
    else {
        para.textContent = "";
    }
}









