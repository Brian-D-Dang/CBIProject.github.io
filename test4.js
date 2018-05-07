//Photo Holder
var ProblemCounter = 0;
var PhotoArr = [
  //bus1
  "http://www.skoolie.net/attachments/photobucket/img_49923_24a77a2e9fefe8207653ef0a12e0bdf5.jpg",
  //clock2
  "https://www.ikea.com/PIAimages/0540839_PE653259_S5.JPG",
  //shirt3
  "https://assets.academy.com/mgen/50/10740350.jpg",
  //toothpaste4
  "https://smedia.webcollage.net/rwvfp/wc/cp/27558611/module/colgatetotal/_cp/products/1453146599810/tab-c597110d-4c3f-48b6-95df-406f6ce682d9/f87fde8e-c63e-49fd-9843-49600ed06b42.jpg.w480.jpg",
  //5Paper
  "http://tmib.com/wp-content/uploads/2014/08/stack-of-paper.jpg",
  //6Tree
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Birnbaum_am_Lerchenberg_retouched.jpg/310px-Birnbaum_am_Lerchenberg_retouched.jpg",
  //7Headphone
  "https://gloimg.gbtcdn.com/gb/2015/201506/goods-img/1501695532736964518.jpg",
  //8Calculator
  "https://m.media-amazon.com/images/S/aplus-media/mg/a48e575c-d047-4ba5-89b0-1c8977511564.png",
  //9Spahge
  "https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/2048x1365/gallery-1506456062-delish-spaghetti-meatballs.jpg?resize=768:*",
  //10Whale
  "https://media.treehugger.com/assets/images/2017/01/blue-whale-size.jpg",
  //11Plane
  "https://upload.wikimedia.org/wikipedia/commons/c/cb/Ryanair.arp.750pix.jpg",
  //12Lightbulb
  "https://cdn.shopify.com/s/files/1/1815/1183/products/Tom_Raffield_Tala-Gaia-6w-lightbulb-tinted_on_1616pix_42a8fc37-b32e-44a0-b3f8-92d3ea48bced.jpg?v=1513092615",
  //13Apple
  "https://storage.googleapis.com/zopnow-static/images/products/320/fresh-apple-red-delicious-v-500-g.png",
  //14Grapes
  "https://www.organicfacts.net/wp-content/uploads/2013/05/Grapes11.jpg",
  //15Worm
  "https://img-new.cgtrader.com/items/25678/de6f806aab/worm-pose-1-3d-model-max-obj-3ds-c4d.jpg",
  //16paperClip
  "https://upload.wikimedia.org/wikipedia/commons/3/3d/Paperclip-01_%28xndr%29.jpg",
  //17toothbrush
  "https://cdn.shopify.com/s/files/1/0725/9041/products/oral_b_crossaction_extra_soft_large.jpg?v=1462965151",
  //18Jello
  "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/7/24/0/cc-belanger_watermelon-limeade-jello-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1351633244318.jpeg",
  //19Giraffe
  "http://cdn.newsapi.com.au/image/v1/dacbd6a0440cf2d11c556150a1853b39",
  //20/19Hippo
  "http://cdn.natgeotv.com.au/factsheets/thumbnails/Article%20-%20Fiona%20the%20Famous%20Baby%20Hippo.jpg?v=29&azure=false&scale=both&width=640&height=426&mode=crop"
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
  "Pencil",
  "Pen",
  "Shark",
  "Glasses",
  "Tree"
  ];
var answersThree = [
  "Toothpaste",
  "Floss",
  "Skateboard",
  "Printer",
  "Puppy",
  "Waterbottle",
  "Paper",
  "Toothbrush"
  ];
var answersFour = [
  "Calculator",
  "Plane",
  "Whale",
  "Spaghetti",
  "Lightbulb",
  "Apple",
  "Grapes",
  "Worms"
  ];
//random multiplied by the photoarray length
var ran = Math.floor(Math.random()*PhotoArr.length);
//randomforAnswers
var ran1 = Math.floor(Math.random()*answersOne.length);
var ran2 = Math.floor(Math.random()*answersOne.length);
var ran3 = Math.floor(Math.random()*answersOne.length);

var ranUno = Math.floor(Math.random()*answersTwo.length);
var ranUno1 = Math.floor(Math.random()*answersTwo.length);
var ranUno2 = Math.floor(Math.random()*answersTwo.length);

var ranDos = Math.floor(Math.random()*answersThree.length);
var ranDos1 = Math.floor(Math.random()*answersThree.length);
var ranDos2 = Math.floor(Math.random()*answersThree.length);

var ranTres = Math.floor(Math.random()*answersFour.length);
var ranTres1 = Math.floor(Math.random()*answersFour.length);
var ranTres2 = Math.floor(Math.random()*answersFour.length);

var problemReload = 0;

var answer1 = document.getElementById('answerX').innerHTML = "Bus";
var answer2 = document.getElementById('answerY').innerHTML = "Cat";
var answer3 = document.getElementById('answerZ').innerHTML = "Car";
//grabs a random photo and arranges the answers accordingly
function RanPho() {
  ProblemCounter++;
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
  //problem1
  if ((answer1 == "Bus")&&(ProblemCounter == 1)) {
      ProblemCounter++;
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
  
  
  
  //problem2
  else if ((answer1 == "Clock")&&(ProblemCounter == 2)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[2]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersOne[ran1] == "Shirt") {
      answer1 = document.getElementById('answerX').innerHTML = "Shirt";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answersOne[8] = "Juice";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran2];
    }
    else if (answersOne[ran2] == "Clock") {
      answersOne[8] = "Juice";
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran2];
      answer2 = document.getElementById('answerY').innerHTML = "Shirt";
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
    }
    else if (answersOne[ran3] == "Clock") {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answersOne[8] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran2];
      answer3 = document.getElementById('answerZ').innerHTML = "Shirt";
    }
    else {
      answersOne[8] = "Juice";
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran2];
      answer2 = document.getElementById('answerY').innerHTML = "Shirt";
      answer3 = document.getElementById('answerZ').innerHTML = "Soap";
    }
  }
  //problem3
  else if ((answer1 == "Shirt")&&(ProblemCounter == 3)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[3]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersThree[ranDos] == "Toothpaste") {
      answer1 = document.getElementById('answerX').innerHTML = "Toothpaste";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answersThree[0] = "Juice";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos];
    }
    else if (answersThree[ranDos] == "Toothpaste") {
      answersThree[0] = "Juice";
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos];
      answer2 = document.getElementById('answerY').innerHTML = "Toothpaste";
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
    }
    else if (answersThree[ranDos] == "Toothpaste") {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answersThree[0] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = "Toothpaste";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Soap";
      answer3 = document.getElementById('answerZ').innerHTML = "Toothpaste";
      answersThree[0] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      
    }
  }
  //problem 4
  else if ((answer1 == "Toothpaste")&&(ProblemCounter == 4)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[4]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersThree[ranDos] == "Paper") {
      answer1 = document.getElementById('answerX').innerHTML = "Paper";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answersThree[6] = "Juice";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos];
    }
    else if (answersThree[ranDos] == "Paper") {
      answersThree[6] = "Juice";
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos];
      answer2 = document.getElementById('answerY').innerHTML = "Paper";
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
    }
    else if (answersThree[ranDos] == "Paper") {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answersThree[6] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = "Paper";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Soap";
      answer3 = document.getElementById('answerZ').innerHTML = "Paper";
      answersThree[6] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
    }
  }
  //problem 5
  else if ((answer1 == "Paper")&&(ProblemCounter == 5)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[5]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersTwo[ranUno] == "Tree") {
      answer1 = document.getElementById('answerX').innerHTML = "Tree";
      answersTwo[6] = "Glue";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersTwo[ranUno] == "Tree") {
      answersTwo[6] = "Glue";
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answer2 = document.getElementById('answerY').innerHTML = "Tree";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersTwo[ranUno] == "Tree") {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answersTwo[6] = "Binder";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Tree";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answersTwo[6] = "Binder";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Tree";
    }
  }
  //problem 6
  else if ((answer1 == "Tree")&&(ProblemCounter == 6)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[6]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersTwo[ranUno] == "Headphones") {
      answer1 = document.getElementById('answerX').innerHTML = "Headphones";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersTwo[ranUno] == "Headphones") {
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer2 = document.getElementById('answerY').innerHTML = "Headphones";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersTwo[ranUno] == "Headphones") {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = "Headphones";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = "Headphones";
    }
  }
  //problem 7
  else if ((answer1 == "Headphones")&&(ProblemCounter == 7)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[7]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Calculator") {
      answersFour[0] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = "Calculator";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Calculator") {
      answersFour[0] = "Gum";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer2 = document.getElementById('answerY').innerHTML = "Calculator";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Calculator") {
      answersFour[0] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = "Calculator";
    }
    else {
      answersFour[0] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer3 = document.getElementById('answerZ').innerHTML = "Calculator";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
    }
  }
  //problem 8
  else if ((answer1 == "Calculator")&&(ProblemCounter == 8)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[8]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Spaghetti") {
      answersFour[3] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = "Spaghetti";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Spaghetti") {
      answersFour[3] = "Gum";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer2 = document.getElementById('answerY').innerHTML = "Spaghetti";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Spaghetti") {
      answersFour[3] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = "Spaghetti";
    }
    else {
      answersFour[3] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer3 = document.getElementById('answerZ').innerHTML = "Spaghetti";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
    }
  }
//problem 9
  else if ((answer1 == "Spaghetti")&&(ProblemCounter == 9)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[9]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Whale") {
      answersFour[7] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = "Whale";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran2];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Whale") {
      answersFour[7] = "Gum";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran2];
      answer2 = document.getElementById('answerY').innerHTML = "Whale";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Whale") {
      answersFour[7] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran2];
      answer3 = document.getElementById('answerZ').innerHTML = "Whale";
    }
    else {
      answersFour[7] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer3 = document.getElementById('answerZ').innerHTML = "Whale";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran2];
    }
  }
  else if ((answer1 == "Whale")&&(ProblemCounter == 10)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[10]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres]== "Plane") {
      answersFour[1] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = "Plane";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Plane") {
      answersFour[1] = "Gum";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Plane";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Plane") {
      answersFour[1] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Plane";
    }
    else {
      answersFour[1] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer3 = document.getElementById('answerZ').innerHTML = "Plane";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
    }
  }
  else if ((answer1 == "Plane")&&(ProblemCounter == 11)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[11]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Lightbulb") {
      answer1 = document.getElementById('answerX').innerHTML = "Lightbulb";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
    }
    else if (answersFour[ranTres] == "Lightbulb") {
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer2 = document.getElementById('answerY').innerHTML = "Lightbulb";
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
    }
    else if (answersFour[ranTres] == "Lightbulb") {
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos];
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Lightbulb";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Lightbulb";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
    }
  }
  else if ((answer1 == "Lightbulb")&&(ProblemCounter == 12)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[12]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Apple") {
      answer1 = document.getElementById('answerX').innerHTML = "Apple";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Apple") {
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer2 = document.getElementById('answerY').innerHTML = "Apple";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Apple") {
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = "Apple";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = "Apple";
      answer2 = document.getElementById('answerY').innerHTML = answersFour[ranTres];
    }
  }
  else if ((answer1 == "Apple")&&(ProblemCounter == 13)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[13]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Grapes") {
      answer1 = document.getElementById('answerX').innerHTML = "Grapes";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno1];
    }
    else if (answersFour[ranTres] == "Grapes") {
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer2 = document.getElementById('answerY').innerHTML = "Grapes";
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno1];
    }
    else if (answersFour[ranTres] == "Grapes") {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno1];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = "Grapes";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = "Grapes";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno1];
    }
  }
  else if ((answer1 == "Grapes")&&(ProblemCounter == 14)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[14]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Worms") {
      answer1 = document.getElementById('answerX').innerHTML = "Worms";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranUno1];
    }
    else if (answersFour[ranTres] == "Worms") {
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Worms";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranUno1];
    }
    else if (answersFour[ranTres] == "Worms") {
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranUno1];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Worms";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Worms";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranUno1];
    }
  }
  else if ((answer1 == "Worms")&&(ProblemCounter == 15)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[15]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Paperclip") {
      answer1 = document.getElementById('answerX').innerHTML = "Paperclip";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres1];
    }
    else if (answersFour[ranTres] == "Paperclip") {
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer2 = document.getElementById('answerY').innerHTML = "Paperclip";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres1];
    }
    else if (answersFour[ranTres] == "Paperclip") {
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres1];
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Paperclip";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres1];
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
      answer2 = document.getElementById('answerY').innerHTML = "Paperclip";
    }
  }
  else if ((answer1 == "Paperclip")&&(ProblemCounter == 16)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[16]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Toothbrush") {
      answer1 = document.getElementById('answerX').innerHTML = "Toothbrush";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres2];
    }
    else if (answersFour[ranTres] == "Toothbrush") {
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Toothbrush";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres2];
    }
    else if (answersFour[ranTres] == "Toothbrush") {
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres2];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Toothbrush";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Toothbrush";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = answersFour[ranTres2];
    }
  }
  else if ((answer1 == "Toothbrush")&&(ProblemCounter == 17)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[17]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Jello") {
      answer1 = document.getElementById('answerX').innerHTML = "Jello";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno2];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos2];
    }
    else if (answersFour[ranTres] == "Jello") {
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno2];
      answer2 = document.getElementById('answerY').innerHTML = "Jello";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos2];
    }
    else if (answersFour[ranTres] == "Jello") {
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos2];
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno2];
      answer3 = document.getElementById('answerZ').innerHTML = "Jello";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno2];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos2];
      answer2 = document.getElementById('answerY').innerHTML = "Jello";
    }
  }
  else if ((answer1 == "Jello")&&(ProblemCounter == 18)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[18]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Giraffe") {
      answer1 = document.getElementById('answerX').innerHTML = "Giraffe";
      answer2 = document.getElementById('answerY').innerHTML = answersFour[ranTres2];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos];
    }
    else if (answersFour[ranTres] == "Jello") {
      answer2 = document.getElementById('answerY').innerHTML = answersFour[ranTres2];
      answer2 = document.getElementById('answerY').innerHTML = "Giraffe";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos];
    }
    else if (answersFour[ranTres] == "Jello") {
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos2];
      answer2 = document.getElementById('answerY').innerHTML = answersFour[ranTres2];
      answer3 = document.getElementById('answerZ').innerHTML = "Giraffe";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres2];
      answer3 = document.getElementById('answerZ').innerHTML = "Giraffe";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
    }
  }
  else if ((answer1 == "Giraffe")&&(ProblemCounter == 19)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[19]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Hippo") {
      answer1 = document.getElementById('answerX').innerHTML = "Hippo";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran2];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos1];
    }
    else if (answersFour[ranTres] == "Hippo") {
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran2];
      answer2 = document.getElementById('answerY').innerHTML = "Hippo";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos1];
    }
    else if (answersFour[ranTres] == "Hippo") {
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos1];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran2];
      answer3 = document.getElementById('answerZ').innerHTML = "Hippo";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran2];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos1];
      answer2 = document.getElementById('answerY').innerHTML = "Hippo";
    }
  }
  else if ((answer1 == "Hippo")&&(ProblemCounter == 20)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[20]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    window.alert("GoodJob!");
    location.reload();
  }
  else {
    window.alert('Try Again!');
  }
}
//REMEMBER STILL IN CHECKONE




function CheckIfTwo() {
  if ((answer2 == "Bus")&&(ProblemCounter == 1)) {
    ProblemCounter++;
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
  else if ((answer2 == "Clock")&&(ProblemCounter == 2)) {
    ProblemCounter++;
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
  else if ((answer2 == "Shirt")&&(ProblemCounter == 3)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[3]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersThree[ranDos] == "Toothpaste") {
      answer1 = document.getElementById('answerX').innerHTML = "Toothpaste";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answersThree[0] = "Juice";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos];
    }
    else if (answersThree[ranDos] == "Toothpaste") {
      answersThree[0] = "Juice";
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos];
      answer2 = document.getElementById('answerY').innerHTML = "Toothpaste";
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
    }
    else if (answersThree[ranDos] == "Toothpaste") {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answersThree[0] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = "Toothpaste";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Soap";
      answer3 = document.getElementById('answerZ').innerHTML = "Toothpaste";
      answersThree[0] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      
    }
  }
  else if ((answer2 == "Toothpaste")&&(ProblemCounter == 4)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[4]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersThree[ranDos] == "Paper") {
      answer1 = document.getElementById('answerX').innerHTML = "Paper";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answersThree[6] = "Juice";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos];
    }
    else if (answersThree[ranDos] == "Paper") {
      answersThree[6] = "Juice";
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos];
      answer2 = document.getElementById('answerY').innerHTML = "Paper";
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
    }
    else if (answersThree[ranDos] == "Paper") {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answersThree[6] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = "Paper";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Soap";
      answer3 = document.getElementById('answerZ').innerHTML = "Paper";
      answersThree[6] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      
    }
  }
  else if ((answer2 == "Paper")&&(ProblemCounter == 5)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[5]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersTwo[ranUno]) {
      answer1 = document.getElementById('answerX').innerHTML = "Tree";
      answersTwo[6] = "Glue";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersTwo[ranUno]) {
      answersTwo[6] = "Glue";
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answer2 = document.getElementById('answerY').innerHTML = "Tree";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersTwo[ranUno]) {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answersTwo[6] = "Binder";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Tree";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answersTwo[6] = "Binder";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Tree";
    }
  }
  else if ((answer2 == "Tree")&&(ProblemCounter == 6)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[6]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersTwo[ranUno] == "Headphones") {
      answer1 = document.getElementById('answerX').innerHTML = "Headphones";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersTwo[ranUno] == "Headphones") {
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
      answer2 = document.getElementById('answerY').innerHTML = "Headphones";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersTwo[ranUno] == "Headphones") {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
      answer3 = document.getElementById('answerZ').innerHTML = "Headphones";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
      answer3 = document.getElementById('answerZ').innerHTML = "Headphones";
    }
  }
  else if ((answer2 == "Headphones")&&(ProblemCounter == 7)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[7]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Calculator") {
      answersFour[0] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = "Calculator";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Calculator") {
      answersFour[0] = "Gum";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer2 = document.getElementById('answerY').innerHTML = "Calculator";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres1];
    }
    else if (answersFour[ranTres] == "Calculator") {
      answersFour[0] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
      answer3 = document.getElementById('answerZ').innerHTML = "Calculator";
    }
    else {
      answersFour[0] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer3 = document.getElementById('answerZ').innerHTML = "Calculator";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
    }
  }
  //problem 8
  else if ((answer2 == "Calculator")&&(ProblemCounter == 8)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[8]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Spaghetti") {
      answersFour[3] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = "Spaghetti";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Spaghetti") {
      answersFour[3] = "Gum";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
      answer2 = document.getElementById('answerY').innerHTML = "Spaghetti";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres1];
    }
    else if (answersFour[ranTres] == "Spaghetti") {
      answersFour[3] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres1];
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
      answer3 = document.getElementById('answerZ').innerHTML = "Spaghetti";
    }
    else {
      answersFour[3] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres1];
      answer3 = document.getElementById('answerZ').innerHTML = "Spaghetti";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
    }
  }
  else if ((answer2 == "Spaghetti")&&(ProblemCounter == 9)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[9]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Whale") {
      answersFour[7] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = "Whale";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Whale") {
      answersFour[7] = "Gum";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Whale";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Whale") {
      answersFour[7] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Whale";
    }
    else {
      answersFour[7] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer3 = document.getElementById('answerZ').innerHTML = "Whale";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
    }
  }
  else if ((answer2 == "Whale")&&(ProblemCounter == 10)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[10]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres]== "Plane") {
      answersFour[1] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = "Plane";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Plane") {
      answersFour[1] = "Gum";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Plane";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Plane") {
      answersFour[1] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Plane";
    }
    else {
      answersFour[1] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer3 = document.getElementById('answerZ').innerHTML = "Plane";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
    }
  }
  else if ((answer2== "Plane")&&(ProblemCounter == 11)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[11]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Lightbulb") {
      answer1 = document.getElementById('answerX').innerHTML = "Lightbulb";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
    }
    else if (answersFour[ranTres] == "Lightbulb") {
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer2 = document.getElementById('answerY').innerHTML = "Lightbulb";
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
    }
    else if (answersFour[ranTres] == "Lightbulb") {
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos];
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Lightbulb";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Lightbulb";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
    }
  }
  else if ((answer2 == "Lightbulb")&&(ProblemCounter == 12)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[12]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Apple") {
      answer1 = document.getElementById('answerX').innerHTML = "Apple";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Apple") {
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer2 = document.getElementById('answerY').innerHTML = "Apple";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Apple") {
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = "Apple";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = "Apple";
      answer2 = document.getElementById('answerY').innerHTML = answersFour[ranTres];
    }
  }
  else if ((answer2 == "Apple")&&(ProblemCounter == 13)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[13]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Grapes") {
      answer1 = document.getElementById('answerX').innerHTML = "Grapes";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno1];
    }
    else if (answersFour[ranTres] == "Grapes") {
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer2 = document.getElementById('answerY').innerHTML = "Grapes";
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno1];
    }
    else if (answersFour[ranTres] == "Grapes") {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno1];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = "Grapes";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = "Grapes";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno1];
    }
  }
  else if ((answer2 == "Grapes")&&(ProblemCounter == 14)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[14]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Worms") {
      answer1 = document.getElementById('answerX').innerHTML = "Worms";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranUno1];
    }
    else if (answersFour[ranTres] == "Worms") {
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Worms";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranUno1];
    }
    else if (answersFour[ranTres] == "Worms") {
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranUno1];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Worms";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Worms";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranUno1];
    }
  }
  else if ((answer2 == "Worms")&&(ProblemCounter == 15)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[15]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Paperclip") {
      answer1 = document.getElementById('answerX').innerHTML = "Paperclip";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres1];
    }
    else if (answersFour[ranTres] == "Paperclip") {
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer2 = document.getElementById('answerY').innerHTML = "Paperclip";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres1];
    }
    else if (answersFour[ranTres] == "Paperclip") {
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres1];
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Paperclip";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres1];
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
      answer2 = document.getElementById('answerY').innerHTML = "Paperclip";
    }
  }
  else if ((answer2 == "Paperclip")&&(ProblemCounter == 16)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[16]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Toothbrush") {
      answer1 = document.getElementById('answerX').innerHTML = "Toothbrush";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres2];
    }
    else if (answersFour[ranTres] == "Toothbrush") {
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Toothbrush";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres2];
    }
    else if (answersFour[ranTres] == "Toothbrush") {
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres2];
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Toothbrush";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Toothbrush";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = answersFour[ranTres2];
    }
  }
  else if ((answer2 == "Toothbrush")&&(ProblemCounter == 17)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[17]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Jello") {
      answer1 = document.getElementById('answerX').innerHTML = "Jello";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno2];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos2];
    }
    else if (answersFour[ranTres] == "Jello") {
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno2];
      answer2 = document.getElementById('answerY').innerHTML = "Jello";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos2];
    }
    else if (answersFour[ranTres] == "Jello") {
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos2];
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno2];
      answer3 = document.getElementById('answerZ').innerHTML = "Jello";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno2];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos2];
      answer2 = document.getElementById('answerY').innerHTML = "Jello";
    }
  }
  else if ((answer2== "Jello")&&(ProblemCounter == 18)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[18]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Giraffe") {
      answer1 = document.getElementById('answerX').innerHTML = "Giraffe";
      answer2 = document.getElementById('answerY').innerHTML = answersFour[ranTres2];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos];
    }
    else if (answersFour[ranTres] == "Jello") {
      answer2 = document.getElementById('answerY').innerHTML = answersFour[ranTres2];
      answer2 = document.getElementById('answerY').innerHTML = "Giraffe";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos];
    }
    else if (answersFour[ranTres] == "Jello") {
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos2];
      answer2 = document.getElementById('answerY').innerHTML = answersFour[ranTres2];
      answer3 = document.getElementById('answerZ').innerHTML = "Giraffe";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres2];
      answer3 = document.getElementById('answerZ').innerHTML = "Giraffe";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
    }
  }
  else if ((answer2 == "Giraffe")&&(ProblemCounter == 19)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[19]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Hippo") {
      answer1 = document.getElementById('answerX').innerHTML = "Hippo";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran2];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos1];
    }
    else if (answersFour[ranTres] == "Hippo") {
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran2];
      answer2 = document.getElementById('answerY').innerHTML = "Hippo";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos1];
    }
    else if (answersFour[ranTres] == "Hippo") {
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos1];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran2];
      answer3 = document.getElementById('answerZ').innerHTML = "Hippo";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran2];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos1];
      answer2 = document.getElementById('answerY').innerHTML = "Hippo";
    }
  }
  else if ((answer2 == "Hippo")&&(ProblemCounter == 20)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[20]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    window.alert("GoodJob!");
    location.reload();

  }
  else {
    window.alert('Try Again!');
  }
}






function CheckIfThree() {
  if ((answer3 == "Bus")&&(ProblemCounter == 1)) {
    ProblemCounter++;
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
  else if ((answer3 == "Clock")&&(ProblemCounter == 2)) {
    ProblemCounter++;
    window.alert("Right!");
      document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[2]+')';
      document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersOne[ran1] == "Shirt") {
      answer1 = document.getElementById('answerX').innerHTML = "Shirt";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answersOne[8] = "Juice";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran2];
    }
    else if (answersOne[ran2] == "Clock") {
      answersOne[8] = "Juice";
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran2];
      answer2 = document.getElementById('answerY').innerHTML = "Shirt";
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
    }
    else if (answersOne[ran3] == "Clock") {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answersOne[8] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran2];
      answer3 = document.getElementById('answerZ').innerHTML = "Shirt";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Shirt";
      answersOne[8] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran2];
      answer3 = document.getElementById('answerZ').innerHTML = "Soap";
    }
  }
  else if ((answer3 == "Shirt")&&(ProblemCounter == 3)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[3]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersThree[ranDos] == "Toothpaste") {
      answer1 = document.getElementById('answerX').innerHTML = "Toothpaste";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answersThree[0] = "Juice";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos1];
    }
    else if (answersThree[ranDos] == "Toothpaste") {
      answersThree[0] = "Juice";
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos1];
      answer2 = document.getElementById('answerY').innerHTML = "Toothpaste";
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
    }
    else if (answersThree[ranDos] == "Toothpaste") {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answersThree[0] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
      answer3 = document.getElementById('answerZ').innerHTML = "Toothpaste";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Soap";
      answer3 = document.getElementById('answerZ').innerHTML = "Toothpaste";
      answersThree[0] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
      
    }
  }
  else if ((answer3 == "Toothpaste")&&(ProblemCounter == 4)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[4]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersThree[ranDos] == "Paper") {
      answer1 = document.getElementById('answerX').innerHTML = "Paper";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answersThree[6] = "Juice";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos];
    }
    else if (answersThree[ranDos] == "Paper") {
      answersThree[6] = "Juice";
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos];
      answer2 = document.getElementById('answerY').innerHTML = "Paper";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersThree[ranDos] == "Paper") {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Paper";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Soap";
      answer3 = document.getElementById('answerZ').innerHTML = "Paper";
      answersThree[6] = "Juice";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      
    }
  }
  else if ((answer3 == "Paper")&&(ProblemCounter == 5)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[5]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersTwo[ranUno]) {
      answer1 = document.getElementById('answerX').innerHTML = "Tree";
      answersTwo[6] = "Glue";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersTwo[ranUno]) {
      answersTwo[6] = "Glue";
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answer2 = document.getElementById('answerY').innerHTML = "Tree";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersTwo[ranUno]) {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answersTwo[6] = "Binder";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Tree";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answersTwo[6] = "Binder";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Tree";
    }
  }
  else if ((answer3 == "Tree")&&(ProblemCounter == 6)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[6]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersTwo[ranUno] == "Headphones") {
      answer1 = document.getElementById('answerX').innerHTML = "Headphones";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersTwo[ranUno] == "Headphones") {
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer2 = document.getElementById('answerY').innerHTML = "Headphones";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
    }
    else if (answersTwo[ranUno] == "Headphones") {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = "Headphones";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = "Headphones";
    }
  }
  else if ((answer3 == "Headphones")&&(ProblemCounter == 7)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[7]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Calculator") {
      answersFour[0] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = "Calculator";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres1];
    }
    else if (answersFour[ranTres] == "Calculator") {
      answersFour[0] = "Gum";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
      answer2 = document.getElementById('answerY').innerHTML = "Calculator";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres1];
    }
    else if (answersFour[ranTres] == "Calculator") {
      answersFour[0] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres1];
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
      answer3 = document.getElementById('answerZ').innerHTML = "Calculator";
    }
    else {
      answersFour[0] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres1];
      answer3 = document.getElementById('answerZ').innerHTML = "Calculator";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
    }
  }
  //problem 8
  else if ((answer3 == "Calculator")&&(ProblemCounter == 8)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[8]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Spaghetti") {
      answersFour[3] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = "Spaghetti";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres1];
    }
    else if (answersFour[ranTres] == "Spaghetti") {
      answersFour[3] = "Gum";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
      answer2 = document.getElementById('answerY').innerHTML = "Spaghetti";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres1];
    }
    else if (answersFour[ranTres] == "Spaghetti") {
      answersFour[3] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres1];
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
      answer3 = document.getElementById('answerZ').innerHTML = "Spaghetti";
    }
    else {
      answersFour[3] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres1];
      answer3 = document.getElementById('answerZ').innerHTML = "Spaghetti";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos1];
    }
  }
  else if ((answer3 == "Spaghetti")&&(ProblemCounter == 9)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[9]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Whale") {
      answersFour[7] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = "Whale";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Whale") {
      answersFour[7] = "Gum";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Whale";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Whale") {
      answersFour[7] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Whale";
    }
    else {
      answersFour[7] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer3 = document.getElementById('answerZ').innerHTML = "Whale";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
    }
  }
  else if ((answer3 == "Whale")&&(ProblemCounter == 10)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[10]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres]== "Plane") {
      answersFour[1] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = "Plane";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Plane") {
      answersFour[1] = "Gum";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Plane";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Plane") {
      answersFour[1] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Plane";
    }
    else {
      answersFour[1] = "Gum";
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer3 = document.getElementById('answerZ').innerHTML = "Plane";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
    }
  }
  else if ((answer3 == "Plane")&&(ProblemCounter == 11)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[11]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Lightbulb") {
      answer1 = document.getElementById('answerX').innerHTML = "Lightbulb";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
    }
    else if (answersFour[ranTres] == "Lightbulb") {
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
      answer2 = document.getElementById('answerY').innerHTML = "Lightbulb";
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
    }
    else if (answersFour[ranTres] == "Lightbulb") {
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos];
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Lightbulb";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Lightbulb";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
    }
  }
  else if ((answer3 == "Lightbulb")&&(ProblemCounter == 12)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[12]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Apple") {
      answer1 = document.getElementById('answerX').innerHTML = "Apple";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Apple") {
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer2 = document.getElementById('answerY').innerHTML = "Apple";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres];
    }
    else if (answersFour[ranTres] == "Apple") {
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = "Apple";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = "Apple";
      answer2 = document.getElementById('answerY').innerHTML = answersFour[ranTres];
    }
  }
  else if ((answer3 == "Apple")&&(ProblemCounter == 13)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[13]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Grapes") {
      answer1 = document.getElementById('answerX').innerHTML = "Grapes";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno1];
    }
    else if (answersFour[ranTres] == "Grapes") {
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer2 = document.getElementById('answerY').innerHTML = "Grapes";
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno1];
    }
    else if (answersFour[ranTres] == "Grapes") {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno1];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran3];
      answer3 = document.getElementById('answerZ').innerHTML = "Grapes";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Grapes";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran3];
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno1];
    }
  }
  else if ((answer3 == "Grapes")&&(ProblemCounter == 14)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[14]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Worms") {
      answer1 = document.getElementById('answerX').innerHTML = "Worms";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranUno1];
    }
    else if (answersFour[ranTres] == "Worms") {
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Worms";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranUno1];
    }
    else if (answersFour[ranTres] == "Worms") {
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranUno1];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Worms";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = "Worms";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranUno1];
    }
  }
  else if ((answer3 == "Worms")&&(ProblemCounter == 15)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[15]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Paperclip") {
      answer1 = document.getElementById('answerX').innerHTML = "Paperclip";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres1];
    }
    else if (answersFour[ranTres] == "Paperclip") {
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer2 = document.getElementById('answerY').innerHTML = "Paperclip";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres1];
    }
    else if (answersFour[ranTres] == "Paperclip") {
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres1];
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Paperclip";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres1];
      answer3 = document.getElementById('answerZ').innerHTML = answersTwo[ranUno];
      answer2 = document.getElementById('answerY').innerHTML = "Paperclip";
    }
  }
  else if ((answer3 == "Paperclip")&&(ProblemCounter == 16)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[16]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Toothbrush") {
      answer1 = document.getElementById('answerX').innerHTML = "Toothbrush";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres2];
    }
    else if (answersFour[ranTres] == "Toothbrush") {
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = "Toothbrush";
      answer3 = document.getElementById('answerZ').innerHTML = answersFour[ranTres2];
    }
    else if (answersFour[ranTres] == "Toothbrush") {
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres2];
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno];
      answer3 = document.getElementById('answerZ').innerHTML = "Toothbrush";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = "Toothbrush";
      answer3 = document.getElementById('answerZ').innerHTML = answersOne[ran1];
      answer2 = document.getElementById('answerY').innerHTML = answersFour[ranTres2];
    }
  }
  else if ((answer3 == "Toothbrush")&&(ProblemCounter == 17)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[17]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Jello") {
      answer1 = document.getElementById('answerX').innerHTML = "Jello";
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno2];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos2];
    }
    else if (answersFour[ranTres] == "Jello") {
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno2];
      answer2 = document.getElementById('answerY').innerHTML = "Jello";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos2];
    }
    else if (answersFour[ranTres] == "Jello") {
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos2];
      answer2 = document.getElementById('answerY').innerHTML = answersTwo[ranUno2];
      answer3 = document.getElementById('answerZ').innerHTML = "Jello";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersTwo[ranUno2];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos2];
      answer2 = document.getElementById('answerY').innerHTML = "Jello";
    }
  }
  else if ((answer3 == "Jello")&&(ProblemCounter == 18)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[18]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Giraffe") {
      answer1 = document.getElementById('answerX').innerHTML = "Giraffe";
      answer2 = document.getElementById('answerY').innerHTML = answersFour[ranTres2];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos];
    }
    else if (answersFour[ranTres] == "Jello") {
      answer2 = document.getElementById('answerY').innerHTML = answersFour[ranTres2];
      answer2 = document.getElementById('answerY').innerHTML = "Giraffe";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos];
    }
    else if (answersFour[ranTres] == "Jello") {
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos2];
      answer2 = document.getElementById('answerY').innerHTML = answersFour[ranTres2];
      answer3 = document.getElementById('answerZ').innerHTML = "Giraffe";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersFour[ranTres2];
      answer3 = document.getElementById('answerZ').innerHTML = "Giraffe";
      answer2 = document.getElementById('answerY').innerHTML = answersThree[ranDos];
    }
  }
  else if ((answer3 == "Giraffe")&&(ProblemCounter == 19)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[19]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    if (answersFour[ranTres] == "Hippo") {
      answer1 = document.getElementById('answerX').innerHTML = "Hippo";
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran2];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos1];
    }
    else if (answersFour[ranTres] == "Hippo") {
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran2];
      answer2 = document.getElementById('answerY').innerHTML = "Hippo";
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos1];
    }
    else if (answersFour[ranTres] == "Hippo") {
      answer1 = document.getElementById('answerX').innerHTML = answersThree[ranDos1];
      answer2 = document.getElementById('answerY').innerHTML = answersOne[ran2];
      answer3 = document.getElementById('answerZ').innerHTML = "Hippo";
    }
    else {
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran2];
      answer3 = document.getElementById('answerZ').innerHTML = answersThree[ranDos1];
      answer2 = document.getElementById('answerY').innerHTML = "Hippo";
    }
  }
  else if ((answer3 == "Hippo")&&(ProblemCounter == 20)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[20]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
    window.alert("GoodJob!");
    location.reload();
  }
  else {
    window.alert('Try Again!');
  }
}


