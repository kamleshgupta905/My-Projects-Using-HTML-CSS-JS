let heading = document.getElementById("heading");
let input = document.getElementById("userbutton");
let button = document.getElementById("changebutton");


button.addEventListener("click", function () {
    heading.textContent = "this is my life";
    heading.style.color = "blue";
    input.value = "";
});