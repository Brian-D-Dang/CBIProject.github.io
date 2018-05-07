//Photo Holder
var PhotoArr = [
  "https://i.pinimg.com/originals/f1/97/fa/f197fa51290d58f878f5db984a61dd11.jpg",
  "https://www.ikea.com/PIAimages/0540839_PE653259_S5.JPG",
  "https://assets.academy.com/mgen/50/10740350.jpg"
];
//answers
var answer = [
  "Bus",
  "Cat",
  "Car",
  "Chocolate",
  "Clock",
  "Rat",
  "Burger",
  "Computer",
  "Shirt"
  ];
//random multiplied by the photoarray length
var ran = Math.floor(Math.random()*PhotoArr.length);
//randomforAnswers
var ran1 = Math.floor(Math.random()*answer.length);
var ran2 = Math.floor(Math.random()*answer.length);
var ran3 = Math.floor(Math.random()*answer.length);
var problemReload = 0;
//grabs a random photo and arranges the answers accordingly
function RanPho() {
  document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[0]+')';
  document.getElementById('centerPho').style.backgroundSize = "cover";
  if (problemReload === 0) {
    problemReload++;
    window.alert(problemReload);
   if (answer[ran1] == "Bus") {
   var answer1 = document.getElementById('answerX').innerHTML = "Bus";
   answer[0] = "Chair";
   var answer2 = document.getElementById('answerY').innerHTML = answer[ran2];
   var answer3 = document.getElementById('answerZ').innerHTML = "Watch";
   }
   else if (answer[ran2] == "Bus") {
   answer1 = document.getElementById('answerX').innerHTML = answer[ran3];
   answer[0] = "Chair";
   answer2 = document.getElementById('answerY').innerHTML = "Phone";
   answer3 = document.getElementById('answerZ').innerHTML = "Bus";   }
   else if (answer[ran3] == "Bus") {
   answer1 = document.getElementById('answerX').innerHTML = "Tissue";
   answer[0] = "Chair";
   answer2 = document.getElementById('answerY').innerHTML = "Bus";
   answer3 = document.getElementById('answerZ').innerHTML = answer[ran1];
   }
   else {
   answer1 = document.getElementById('answerX').innerHTML = "Bus";
   answer2 = document.getElementById('answerY').innerHTML = "Cat";
   answer3 = document.getElementById('answerZ').innerHTML = "Car";
   }
  }
  else if (problemReload == 1) {
    
    problemReload++;
    window.alert('hello');
   var answer4 = document.getElementById('answerX').innerHTML = "Chocolate";
   
   var answer5 = document.getElementById('answerY').innerHTML = "Clock";
   
   var answer6 = document.getElementById('answerZ').innerHTML = "Rat";
  }
  else if (problemReload == 2) {
    problemReload++;
   var answer7 = document.getElementById('answerX').innerHTML = "Burger";
   
   var answer8 = document.getElementById('answerY').innerHTML = "Computer";
   
   var answer9 = document.getElementById('answerZ').innerHTML = "Shirt";
  }
}
//check if the answer is correct or not
function CheckIfOne() {
  if (document.getElementById('answerX').innerHTML === "Bus") {
  window.alert('Right!');
  location.reload();
  }
  else {
    window.alert('Try Again!');
  }
}

function CheckIfTwo() {
  if (document.getElementById('answerY').innerHTML === "Clock") {
  window.alert('Right!');
  location.reload();
  }
  else {
    window.alert('Try Again!');
  }
}

function CheckIfThree() {
  if (document.getElementById('answerZ').innerHTML === "Shirt") {
  window.alert('Right!');
  location.reload();
  }
  else {
    window.alert('Try Again!');
  }
}