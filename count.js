export let values = document.querySelectorAll(".num");
 let interval = 3000;

    values.forEach((valueDisplay) => {
        let startValue = 0 ;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1 ;
            valueDisplay.textContent = startValue ;
            if(startValue == endValue){
                clearInterval(counter);
            }
        },duration);
    });


let icon = document.getElementById("click-icon");
let input = document.getElementById("input-search");


let handlecall = () => {
    input.style = `display: block;transition: all 0.3s ease-in;`;
};

let handlecalldb = () => {
    input.style = `display: none;transition: all 0.3s ease-in;`;
};


icon.addEventListener("click" , handlecall);
icon.addEventListener("dblclick" , handlecalldb);
