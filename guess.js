var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
colorDisplay.textContent = pickedColor;

init();

function init(){
  modeButtonSetUp();
  setUpSquares();
  reset();
  resetButton.addEventListener("click", function(){
    reset();
  });
}

function modeButtonSetUp(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    })
  }
}

function setUpSquares(){
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        message.textContent = "Correct!";
        changeColor(clickedColor);
        h1.style.backgroundColor = this.style.backgroundColor;
        resetButton.textContent = "Play Again?";
      }else{
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again";
      }
    });
  }
}

function reset(){
  colors = generateColors(numSquares);
  pickedColor = pickColor();
  resetButton.textContent = "New Colors";
  colorDisplay.textContent = pickedColor;
  message.textContent = "";
  h1.style.backgroundColor = "steelblue";
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
    squares[i].style.backgroundColor = colors[i];
  };
}

function changeColor(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateColors(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")"
}
