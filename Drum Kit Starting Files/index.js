let numOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numOfDrums; i++) {
 
 document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   this.style.color="orange"

   var audio = new Audio("sounds/tom-3.mp3");
   audio.play();

 }); 
}
  

 
  



