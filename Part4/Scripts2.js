var acc = document.getElementsByClassName("accordion");
var plus = document.getElementsByClassName("plus");
var i;
console.log(plus);

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    var plus = this.getElementsByClassName("plus")[0];
    if (panel.style.display === "block") {
        panel.style.display = "none";
        plus.innerText="+";
    } 
    else {
        panel.style.display = "block";
        plus.innerText="-";
    }
  });
}