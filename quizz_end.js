let btn = document.getElementById("score")
let score = localStorage.getItem("points")
btn.addEventListener("click", function(){
btn.innerHTML = "<button></button>"
btn.innerText = score;
})
