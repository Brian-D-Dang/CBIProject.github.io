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
  "https://www.cookingclassy.com/wp-content/uploads/2018/01/instant-pot-spaghetti-12-500x500.jpgSpahge",
  //10Whale
  "https://media.treehugger.com/assets/images/2017/01/blue-whale-size.jpg",
  //11Plane
  "https://upload.wikimedia.org/wikipedia/commons/c/cb/Ryanair.arp.750pix.jpg",
  //12Lightbulb
  "https://images.homedepot-static.com/productImages/fbb45e61-e524-40f5-beca-4ea0058d8fce/svn/ge-incandescent-light-bulbs-50-250-htp2-6-64_1000.jpg",
  //13Apple
  "https://storage.googleapis.com/zopnow-static/images/products/320/fresh-apple-red-delicious-v-500-g.png",
  //14Grapes
  "https://www.organicfacts.net/wp-content/uploads/2013/05/Grapes11.jpg",
  //15Worm
  "https://img-new.cgtrader.com/items/25678/de6f806aab/worm-pose-1-3d-model-max-obj-3ds-c4d.jpg",
  //16paperClip
  "https://i.amz.mshcdn.com/yfYsTgi2vdJK7RQc2aDvVtSnbPw=/950x534/filters:quality(90)/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F516786%2F5eef2d9a-a4b9-443a-ac05-6f33fc0904f0.jpg",
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
  "Tree",
  "Headphones"
  ];
var answersThree = [
  "Toothpaste",
  "Floss",
  "Paper",
  "Printer",
  "Lightbulb",
  "Waterbottle",
  "Paper"
  ];
//random multiplied by the photoarray length
var ran = Math.floor(Math.random()*PhotoArr.length);
//randomforAnswers
var ran1 = Math.floor(Math.random()*answersOne.length);
var ran2 = Math.floor(Math.random()*answersOne.length);
var ran3 = Math.floor(Math.random()*answersOne.length);
var ranUno = Math.floor(Math.random()*answersTwo.length);
var ranDos = Math.floor(Math.random()*answersThree.length);
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
      answersOne[8] = "Juice";
      answer1 = document.getElementById('answerX').innerHTML = answersOne[ran1];
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
  else if ((answer1 == "Paper")&&(ProblemCounter == 5)) {
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
  else if ((answer1 == "Tree")&&(ProblemCounter == 6)) {
    ProblemCounter++;
    window.alert("Right!");
    document.getElementById('centerPho').style.backgroundImage = "url("+PhotoArr[6]+')';
    document.getElementById('centerPho').style.backgroundSize = "cover";
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
  }
  else {
    window.alert('Try Again!')
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
  else if ((answer3 == "Shirt")&&(ProblemCounter == 3)) {
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
  }
  else {
    window.alert('Try Again!')
  }
}


