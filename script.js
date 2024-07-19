// selecting elements

let inputBar = document.getElementById("num");
let addBtn = document.getElementById("addbtn");
let colorBar = document.getElementById("color");
let dropdown = document.querySelector("select");
let cont = document.querySelector(".cont");


addBtn.addEventListener("click", function ( ) {
    let n = inputBar.value;
    let circle = colorBar.value;
    let shape = dropdown.value;
    
    // console.log(n, circle, shape); //working!!

    // reset
    cont.innerHTML = "";
    // css
    
    for (let i = 1; i  <= n; i++) {
        let div = document.createElement("div");
        div.classList.add(shape);
        div.style.backgroundColor = circle;
        cont.appendChild(div);
    }


});