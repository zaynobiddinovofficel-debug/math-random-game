import { elMathrProblem, elBox, elStop } from "../html-elements.js";

function random (point) {
    return Math.trunc(Math.random() * point);
};

function results(result) {
    const array = [];

    while(true) {
            if (array.length === 16) {
                break;
            } else {
                array.push(random(100));
            }
        }
        const randomIndex = random(array.length)
        array[randomIndex] = result;
        return array;
}
    


function changeActions() {
const mathSings = ["+", "-", "*", "/"];
let randomIndex = random(mathSings.length);

let a = random(10);
let b = random(10);
const sign = mathSings[randomIndex]; 
    
if (sign === "/") {
   while (a < b || a % b !== 0) {
      a = random(10);
      b = random(10);
   }    
}
const display = `${a} ${mathSings[randomIndex]} ${b}`
const result = eval(display);
return { display, result };
};

function ui(results, display) {
    results.forEach((element) => {
        const span = document.createElement("span");
        elMathrProblem.innerText = display;
        span.innerText = element;
        elBox.appendChild(span);
    });
}

setInterval(() => {
    const {display, result} = changeActions(); 

    ui(results(result), display); 
     
}, 5000);

const id = setInterval(() => {
    elBox.innerHTML = "";
}, 10000);

elStop.addEventListener("click", () => {
    clearInterval(id);
});