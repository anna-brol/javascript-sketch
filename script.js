// Create board
const board = document.getElementById("container");
const btnWhite = document.createElement("button");
const btnBlack = document.createElement("button");
const btnRgb = document.createElement("button");
const buttonContainer = document.querySelector('buttons');
let chooseColor = "rgb(177, 112, 171)";

function createBoard(size){
    let gridColumns = "";
    for (let i = 0; i < size; i++) gridColumns +="auto ";
    board.style.gridTemplateColumns = gridColumns;

    for (r = 0; r < (size*size); r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "box";
}};

//initial board
createBoard(16);

//Create buttons 
btn_container.appendChild(btnWhite).classList.add('btn');
btnWhite.textContent = "White";

btnWhite.addEventListener('click' , () =>{
chooseColor = `rgb(255, 255, 255)`;
})

btn_container.appendChild(btnBlack).classList.add('btn');
btnBlack.textContent = "Black";

btnBlack.addEventListener('click' , () =>{
    chooseColor = `rgb(0, 0, 0)`;
})

btn_container.appendChild(btnRgb).classList.add('btn');
btnRgb.textContent = "Random RGB";

btnRgb.addEventListener('click' , () =>{
    let R = Math.floor(Math.random() * 255);
    let B = Math.floor(Math.random() * 255);
    let G = Math.floor(Math.random() * 255);
    chooseColor = `rgb(${R}, ${B}, ${G})`;
})

//Draw
let mouseDown = 0;
document.onmousedown = function() {
    ++mouseDown;
}
document.onmouseup = function() {
    --mouseDown;
}

board.addEventListener('mouseover', function (m) {
    if (mouseDown) {
        m.target.style.backgroundColor = chooseColor;
    }
});