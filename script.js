const name = document.querySelector("#name");
const fivePx = document.querySelector("#five-px");
const tenPx = document.querySelector("#ten-px");

function changeFivePx(){
  name.style.border = "solid 5px";
}

function changeTenPx(){
  name.style.border = "solid 10px";
}

fivePx.addEventListener("click", changeFivePx)
tenPx.addEventListener("click", changeTenPx)