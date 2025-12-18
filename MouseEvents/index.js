const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function(event){
    myBox.textContent = `Clicked here! 😁`;
    myBox.style.backgroundColor = "grey";});

myBtn.addEventListener("mouseover", event => {
    myBox.textContent = `Don't! 💀`;
    myBox.style.backgroundColor = "yellow";});

myBtn.addEventListener("mouseout", event => {
    myBox.textContent = `Click Me`;
    myBox.style.backgroundColor = "lightgreen";});