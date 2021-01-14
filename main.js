var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/smoke.jpg') {
      myImage.setAttribute ('src','images/DAY1.jpg');
    } else {
      myImage.setAttribute ('src','images/smoke.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
   let myName = prompt('Please enter your name.');
   if(!myName || myName === null) {
    setUserName();
   } else {
     localStorage.setItem('name', myName);
     myHeading.innerHTML = 'This is my 365 days poster challenge☺, ' + myName;
   }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'This is my 365 days poster challenge☺, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}