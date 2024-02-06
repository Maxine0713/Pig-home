// var myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// document.querySelector("html").onclick = function () {
//     alert("Ouch! Stop poking me!");
//   };

//   var myHTML = document.querySelector("img");
//   myHTML.onclick = function () {
//     alert("Don't Touch Me");
//   };

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
var myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/pig.png") {
        myImage.setAttribute("src", "images/pig_sleep.png");
    } else {
        myImage.setAttribute("src", "images/pig.png");
    }
};

function setUserName() {
    let myName = prompt("Please enter your name."); //產生一個對話視窗
    if(!myName || myName === null) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Little Cute Pig is ' + myName;
      }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Little Cute Pig is " + storedName;
}

myButton.onclick = function () {
    setUserName();
  };
  