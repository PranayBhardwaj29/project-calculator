const screen = document.querySelector(".screen");
const buttons = document.querySelector(".buttons");

let currInput = "";

buttons.addEventListener("click", function (e) {
    if (!isNaN(e.target.textContent)) {
        if (currInput === "") {
            currInput = e.target.textContent;
        } else {
            currInput += e.target.textContent;
        }
        screen.textContent = currInput;
    } else if (e.target.textContent === 'CLEAR') {
        screen.textContent = 0;
        currInput = "";
    } else if (e.target.textContent === '←') {
        currInput = currInput.toString().slice(0, -1);
        screen.textContent = currInput || '0';
    }
});
