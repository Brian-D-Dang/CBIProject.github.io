//Photo Holder
var PhotoArr = [
  //bus
  "http://www.skoolie.net/attachments/photobucket/img_49923_24a77a2e9fefe8207653ef0a12e0bdf5.jpg",
  //clock
  "https://www.ikea.com/PIAimages/0540839_PE653259_S5.JPG",
  //shirt
  "https://assets.academy.com/mgen/50/10740350.jpg",
  //toothpaste
  "https://smedia.webcollage.net/rwvfp/wc/cp/27558611/module/colgatetotal/_cp/products/1453146599810/tab-c597110d-4c3f-48b6-95df-406f6ce682d9/f87fde8e-c63e-49fd-9843-49600ed06b42.jpg.w480.jpg"
  
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
var answerOne = [
  "Sandwich",
  "Button",
  "Penicl",
  "Pen",
  "Shark",
  "Glasses"
  ];
var answerTwo = [
  "Toothpaste",
  "Floss",
  "Paper",
  "Printer",
  "Lightbulb",
  "Waterbottle"
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
   if (answer[ran1] == "Bus") {
   var answer1 = document.getElementById('answerX').innerHTML = "Bus";
   answer[0] = "Chair";
   var answer2 = document.getElementById('answerY').innerHTML = answer[ran2];
   var answer3 = document.getElementById('answerZ').innerHTML = "Watch";
   }
   else if (answer[ran2] == "Bus") {
   answer[0] = "Chair";
   answer1 = document.getElementById('answerX').innerHTML = answer[ran3];
   answer2 = document.getElementById('answerY').innerHTML = "Phone";
   answer3 = document.getElementById('answerZ').innerHTML = "Bus";
   }
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







//check if the answer is correct or not
function CheckIfOne() {
    var answer1 = document.getElementById('answerX').innerHTML = "Chocolate";
    var answer2 = document.getElementById('answerY').innerHTML = "Clock";
    var answer3 = document.getElementById('answerZ').innerHTML = "Rat";
  //If Stateme
  if (answer1 == "Bus") {
  window.alert('Right!');
  document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[1]+')';
  document.getElementById('centerPho').style.backgroundSize = "cover";
   if (answer[ran1] == "Clock") {
   answer1 = document.getElementById('answerX').innerHTML = "Clock";
   answer[4] = "Chair";
   answer2 = document.getElementById('answerY').innerHTML = answer[ran2];
   answer3 = document.getElementById('answerZ').innerHTML = "Couch";
   }
   else if (answer[ran2] == "Clock") {
    answer[4] = "Chair";
    answer1 = document.getElementById('answerX').innerHTML = answer[ran3];
    answer2 = document.getElementById('answerY').innerHTML = "Computer";
    answer3 = document.getElementById('answerZ').innerHTML = "Clock";
   }
   else if (answer[ran3] == "Clock") {
    answer1 = document.getElementById('answerX').innerHTML = "Tissue";
    answer[4] = "Chair";
    answer2 = document.getElementById('answerY').innerHTML = "Clock";
    answer3 = document.getElementById('answerZ').innerHTML = answer[ran1];
   }
   else {
    answer1 = document.getElementById('answerX').innerHTML = "Chocolate";
    answer2 = document.getElementById('answerY').innerHTML = "Clock";
    answer3 = document.getElementById('answerZ').innerHTML = "Rat";
   }
  }
  //If Statement Randomized
  //This is problem 1
  else if (answer2 == "Bus") {
  window.alert('Right!');
  document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[1]+')';
  document.getElementById('centerPho').style.backgroundSize = "cover";
   if (answer[ran1] == "Clock") {
   answer1 = document.getElementById('answerX').innerHTML = "Clock";
   answer[4] = "Chair";
   answer2 = document.getElementById('answerY').innerHTML = answer[ran2];
   answer3 = document.getElementById('answerZ').innerHTML = "Couch";
   }
   else if (answer[ran2] == "Clock") {
    answer[4] = "Chair";
    answer1 = document.getElementById('answerX').innerHTML = answer[ran3];
    answer2 = document.getElementById('answerY').innerHTML = "Computer";
    answer3 = document.getElementById('answerZ').innerHTML = "Clock";
   }
   else if (answer[ran3] == "Clock") {
    answer1 = document.getElementById('answerX').innerHTML = "Tissue";
    answer[4] = "Chair";
    answer2 = document.getElementById('answerY').innerHTML = "Clock";
    answer3 = document.getElementById('answerZ').innerHTML = answer[ran1];
   }
   else {
    answer1 = document.getElementById('answerX').innerHTML = "Chocolate";
    answer2 = document.getElementById('answerY').innerHTML = "Clock";
    answer3 = document.getElementById('answerZ').innerHTML = "Rat";
   }
  }
  else if (answer3 == "Bus") {
  window.alert('Right!');
  document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[1]+')';
  document.getElementById('centerPho').style.backgroundSize = "cover";
   if (answer[ran1] == "Clock") {
   answer1 = document.getElementById('answerX').innerHTML = "Clock";
   answer[4] = "Chair";
   answer2 = document.getElementById('answerY').innerHTML = answer[ran2];
   answer3 = document.getElementById('answerZ').innerHTML = "Couch";
   }
   else if (answer[ran2] == "Clock") {
    answer[4] = "Chair";
    answer1 = document.getElementById('answerX').innerHTML = answer[ran3];
    answer2 = document.getElementById('answerY').innerHTML = "Computer";
    answer3 = document.getElementById('answerZ').innerHTML = "Clock";
   }
   else if (answer[ran3] == "Clock") {
    answer1 = document.getElementById('answerX').innerHTML = "Tissue";
    answer[4] = "Chair";
    answer2 = document.getElementById('answerY').innerHTML = "Clock";
    answer3 = document.getElementById('answerZ').innerHTML = answer[ran1];
   }
   else {
    answer1 = document.getElementById('answerX').innerHTML = "Chocolate";
    answer2 = document.getElementById('answerY').innerHTML = "Clock";
    answer3 = document.getElementById('answerZ').innerHTML = "Rat";
   }
  }
  //This is problem 2
  
  else if (answer1 === "Clock") {
  window.alert('Right!');
  document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[2]+')';
  document.getElementById('centerPho').style.backgroundSize = "cover";
   if (answer[ran1] == "Shirt") {
   answer1 = document.getElementById('answerX').innerHTML = "Shirt";
   answer[8] = "Backpack";
   answer2 = document.getElementById('answerY').innerHTML = answer[ran2];
   answer3 = document.getElementById('answerZ').innerHTML = "Fan";
   }
   else if (answer[ran2] == "Shirt") {
    answer[8] = "Backpack";
    answer1 = document.getElementById('answerX').innerHTML = answer[ran3];
    answer2 = document.getElementById('answerY').innerHTML = "Battery";
    answer3 = document.getElementById('answerZ').innerHTML = "Shirt";
   }
   else if (answer[ran3] == "Shirt") {
    answer1 = document.getElementById('answerX').innerHTML = "Key";
    answer[8] = "Backpack";
    answer2 = document.getElementById('answerY').innerHTML = "Shirt";
    answer3 = document.getElementById('answerZ').innerHTML = answer[ran1];
   }
   else {
    answer1 = document.getElementById('answerX').innerHTML = "Box";
    answer2 = document.getElementById('answerY').innerHTML = "Counter";
    answer3 = document.getElementById('answerZ').innerHTML = "Shirt";
   }
  }
  else if (answer2 === "Clock") {
  window.alert('Right!');
  document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[2]+')';
  document.getElementById('centerPho').style.backgroundSize = "cover";
   if (answer[ran1] == "Shirt") {
   answer1 = document.getElementById('answerX').innerHTML = "Shirt";
   answer[8] = "Backpack";
   answer2 = document.getElementById('answerY').innerHTML = answer[ran2];
   answer3 = document.getElementById('answerZ').innerHTML = "Fan";
   }
   else if (answer[ran2] == "Shirt") {
    answer[8] = "Backpack";
    answer1 = document.getElementById('answerX').innerHTML = answer[ran3];
    answer2 = document.getElementById('answerY').innerHTML = "Battery";
    answer3 = document.getElementById('answerZ').innerHTML = "Shirt";
   }
   else if (answer[ran3] == "Shirt") {
    answer1 = document.getElementById('answerX').innerHTML = "Key";
    answer[8] = "Backpack";
    answer2 = document.getElementById('answerY').innerHTML = "Shirt";
    answer3 = document.getElementById('answerZ').innerHTML = answer[ran1];
   }
   else {
    answer1 = document.getElementById('answerX').innerHTML = "Box";
    answer2 = document.getElementById('answerY').innerHTML = "Counter";
    answer3 = document.getElementById('answerZ').innerHTML = "Shirt";
   }
  }
  else if (answer3 === "Clock") {
  window.alert('Right!');
  document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[2]+')';
  document.getElementById('centerPho').style.backgroundSize = "cover";
   if (answer[ran1] == "Shirt") {
   answer1 = document.getElementById('answerX').innerHTML = "Shirt";
   answer[8] = "Backpack";
   answer2 = document.getElementById('answerY').innerHTML = answer[ran2];
   answer3 = document.getElementById('answerZ').innerHTML = "Fan";
   }
   else if (answer[ran2] == "Shirt") {
    answer[8] = "Backpack";
    answer1 = document.getElementById('answerX').innerHTML = answer[ran3];
    answer2 = document.getElementById('answerY').innerHTML = "Battery";
    answer3 = document.getElementById('answerZ').innerHTML = "Shirt";
   }
   else if (answer[ran3] == "Shirt") {
    answer1 = document.getElementById('answerX').innerHTML = "Key";
    answer[8] = "Backpack";
    answer2 = document.getElementById('answerY').innerHTML = "Shirt";
    answer3 = document.getElementById('answerZ').innerHTML = answer[ran1];
   }
   else {
    answer1 = document.getElementById('answerX').innerHTML = "Box";
    answer2 = document.getElementById('answerY').innerHTML = "Counter";
    answer3 = document.getElementById('answerZ').innerHTML = "Shirt";
   }
  }
  else if (answer1 === "Shirt") {
  window.alert('Right!');
  document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[2]+')';
  document.getElementById('centerPho').style.backgroundSize = "cover";
  }
  else if (answer2 === "Shirt") {
  window.alert('Right!');
  document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[2]+')';
  document.getElementById('centerPho').style.backgroundSize = "cover";
  }
  else if (answer3 === "Shirt") {
  window.alert('Right!');
  document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[2]+')';
  document.getElementById('centerPho').style.backgroundSize = "cover";
  }
  //this is problem three
  else {
    window.alert('Try Again!');
  }
}