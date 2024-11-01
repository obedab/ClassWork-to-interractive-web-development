function hello(){
  document.getElementById("output").innerHTML="hello guys this is javascript!. How are you?";
}

function btn(button) {
  if (button == '1') {
    document.getElementById('image').src = 'media/natur.png';
  } else if (button == '2') {
    document.getElementById('image').src = 'media/hare.jpg';
  } else if (button == '3') {
    document.getElementById('image').src = 'media/sheep.jpg';
  } else if (button == '4') {
    
    alert('Hello, How are you?');
  }
}




let X = 10;
let y = 7;
let z = 5;
let a = 6;
let b = 2;

a = X - y;
c = y + z;
document.getElementById('display').innerHTML = `

X = ${X},
y = ${y},
z = ${z},
a = ${a},
b = ${b},

`;