//********************AddEventListner function******************* */
// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick(){
//     alert("I got Clicked!");
// }
//this can be the way or we can make anonamus function
// document.querySelector("button").addEventListener("click", function(){
//     alert("I got Clicked!");
// }); 
// var numberofDrumButton = document.querySelectorAll(".drum").length;
// for(var i =0; i<numberofDrumButton; i++)
// {
// document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//     alert("I got Clicked!");
// });
// }
// document.addEventListener("keypress", function(){
//     alert("Key is presssed!");
// });

//*****Detecting Button press ****** */
var numberofDrumButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberofDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    animationInButton(buttonInnerHTML);
  });
}
//***************Detecting keyboard press ************/
document.addEventListener("keypress", function(event){
   makeSound(event.key);
   animationInButton(event.key);
});
//***********************Animation in buttons********** */

function animationInButton(currentkey){
          var activeButton = document.querySelector("." + currentkey);
          activeButton.classList.add("pressed");

          setTimeout(function(){
            activeButton.classList.remove("pressed");
          }, 100);
}

function makeSound(key) {
  switch (key) {
    case "w":
      var ton1 = new Audio("music/sound1.mp3");
      ton1.play();
      break;

    case "a":
      var ton1 = new Audio("music/sound2.mp3");
      ton1.play();
      break;

    case "s":
      var ton1 = new Audio("music/sound3.mp3");
      ton1.play();
      break;

    case "d":
      var ton1 = new Audio("music/sound4.mp3");
      ton1.play();
      break;
    case "j":
      var ton1 = new Audio("music/sound5.mp3");
      ton1.play();
      break;
    case "k":
      var ton1 = new Audio("music/sound6.mp3");
      ton1.play();
      break;
    case "l":
      var ton1 = new Audio("music/sound7.mp3");
      ton1.play();
      break;
  }
}
