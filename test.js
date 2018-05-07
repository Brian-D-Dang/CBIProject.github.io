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
var answersOne = [
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
var answersTwo = [
  "Sandwich",
  "Button",
  "Penicl",
  "Pen",
  "Shark",
  "Glasses"
  ];
var answersThree = [
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
var ran1 = Math.floor(Math.random()*answersOne.length);
var ran2 = Math.floor(Math.random()*answersOne.length);
var ran3 = Math.floor(Math.random()*answersOne.length);
var ranUno = Math.floor(Math.random()*answersTwo.length);
var problemReload = 0;

var answer1 = document.getElementById('answerX').innerHTML = "Bus";
var answer2 = document.getElementById('answerY').innerHTML = "Cat";
var answer3 = document.getElementById('answerZ').innerHTML = "Car";
//grabs a random photo and arranges the answers accordingly
function RanPho() {
  document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[0]+')';
  document.getElementById('centerPho').style.backgroundSize = "cover";
  if (answersOne[ran1] == "Bus") {
    answer1 = document.getElementById('answerX').innerHTML = "Bus";
    answer2 = document.getElementById('answerY').innerHTML = "Tissue";
    answersOne[0] = "Juice";
    answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
  }
  else if (answersOne[ran2] == "Bus") {
    answersOne[0] = "Juice";
    answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
    answer2 = document.getElementById('answerY').innerHTML = "Bus";
    answer3 = document.getElementById('answerZ').innerHTML = "Underwear";
  }
  else if (answersOne[ran3] == "Bus") {
    answer1 = document.getElementById('answerX').innerHTML = "Toaster";
    answersOne[0] = "Juice";
    answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
    answer3 = document.getElementById('answerZ').innerHTML = "Bus";
  }
  else {
    answer1 = document.getElementById('answerX').innerHTML = "Bus";
    answer2 = document.getElementById('answerY').innerHTML = "Cat";
    answer3 = document.getElementById('answerZ').innerHTML = "Car";
  }
}

//CHECKONE
function CheckIfOne() {
  if (answer1 == "Bus") {
    window.alert("Right!");
      document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[1]+')';
      document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersOne[ran1] == "Clock") {
      answer1 = document.getElementById('answerX').innerHTML = "Clock";
      answer2 = document.getElementById('answerY').innerHTML = "Tissue";
      answersOne[4] = "Juice";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersOne[ran2] == "Clock") {
      answersOne[4] = "Juice";
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Clock";
      answer3 = document.getElementById('answerZ').innerHTML = "Keyboard";
    }
    else if (answersOne[ran3] == "Clock") {
      answer1 = document.getElementById('answerX').innerHTML = "Toaster";
      answersOne[4] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Clock";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Clock";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Soap";
    }
  }
  
  
  
  
  else if (answer1 == "Clock") {
    window.alert("Right!");
      document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[2]+')';
      document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersOne[ran1] == "Shirt") {
      answer1 = document.getElementById('answerX').innerHTML = "Shirt";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answersOne[8] = "Juice";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersOne[ran2] == "Clock") {
      answersOne[8] = "Juice";
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Shirt";
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
    }
    else if (answersOne[ran3] == "Clock") {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answersOne[8] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Shirt";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Shirt";
      answersOne[8] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Soap";
    }
  }
  else if (answer1 == "Shirt") {
    window.alert("Right!");
  }
  else {
    window.alert('Try Again!');
  }
}
//REMEMBER STILL IN CHECKONE




function CheckIfTwo() {
  if (answer2 == "Bus") {
    window.alert("Right!");
      document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[1]+')';
      document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersOne[ran1] == "Clock") {
      answer1 = document.getElementById('answerX').innerHTML = "Clock";
      answer2 = document.getElementById('answerY').innerHTML = "Tissue";
      answersOne[4] = "Juice";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersOne[ran2] == "Clock") {
      answersOne[4] = "Juice";
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Clock";
      answer3 = document.getElementById('answerZ').innerHTML = "Keyboard";
    }
    else if (answersOne[ran3] == "Clock") {
      answer1 = document.getElementById('answerX').innerHTML = "Toaster";
      answersOne[4] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Clock";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Clock";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Car";
    }
  }
  else if (answer2 == "Clock") {
    window.alert("Right!");
      document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[2]+')';
      document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersOne[ran1] == "Shirt") {
      answer1 = document.getElementById('answerX').innerHTML = "Shirt";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answersOne[8] = "Juice";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersOne[ran2] == "Clock") {
      answersOne[8] = "Juice";
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Shirt";
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
    }
    else if (answersOne[ran3] == "Clock") {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answersOne[8] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Shirt";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Shirt";
      answersOne[8] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Soap";
    }
  }
  else if (answer2 == "Shirt") {
    window.alert("Right!");
  }
  else {
    window.alert('Try Again!')
  }
}






function CheckIfThree() {
  if (answer3 == "Bus") {
    window.alert("Right!");
      document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[1]+')';
      document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersOne[ran1] == "Clock") {
      answer1 = document.getElementById('answerX').innerHTML = "Clock";
      answer2 = document.getElementById('answerY').innerHTML = "Tissue";
      answersOne[4] = "Juice";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersOne[ran2] == "Clock") {
      answersOne[4] = "Juice";
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Clock";
      answer3 = document.getElementById('answerZ').innerHTML = "Keyboard";
    }
    else if (answersOne[ran3] == "Clock") {
      answer1 = document.getElementById('answerX').innerHTML = "Toaster";
      answersOne[4] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Clock";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Clock";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Car";
    }
  }
  else if (answer3 == "Clock") {
    window.alert("Right!");
      document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[2]+')';
      document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersOne[ran1] == "Shirt") {
      answer1 = document.getElementById('answerX').innerHTML = "Shirt";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answersOne[8] = "Juice";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersOne[ran2] == "Clock") {
      answersOne[8] = "Juice";
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Shirt";
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
    }
    else if (answersOne[ran3] == "Clock") {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answersOne[8] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Shirt";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Shirt";
      answersOne[8] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Soap";
    }
  }
  else if (answer3 == "Shirt") {
    window.alert("Right!");
  }
  else {
    window.alert('Try Again!')
  }
}



//check if the answer is correct or not