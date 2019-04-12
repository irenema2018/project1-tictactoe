console.log("tic tac toe");

var cell11 = document.querySelector('#cell11');
var cell12 = document.querySelector('#cell12');
var cell13 = document.querySelector('#cell13');

var cell21 = document.querySelector('#cell21');
var cell22 = document.querySelector('#cell22');
var cell23 = document.querySelector('#cell23');

var cell31 = document.querySelector('#cell31');
var cell32 = document.querySelector('#cell32');
var cell33 = document.querySelector('#cell33');

// var winnerMessage = document.querySelector('.alert');
var resetbtn = document.querySelector('#reset-btn');

var player1 = true;

var handleReset = function() {
  cell11.innerHTML = '';
  cell12.innerHTML = '';
  cell13.innerHTML = '';
  cell21.innerHTML = '';
  cell22.innerHTML = '';
  cell23.innerHTML = '';
  cell31.innerHTML = '';
  cell32.innerHTML = '';
  cell33.innerHTML = ''; 

  cell11.dataset.token = '';
  cell12.dataset.token = '';
  cell13.dataset.token = '';
  cell21.dataset.token = '';
  cell22.dataset.token = '';
  cell23.dataset.token = '';
  cell31.dataset.token = '';
  cell32.dataset.token = '';
  cell33.dataset.token = '';
}


var checkWinner = function() {
  
  // console.log("11Token: " + cell11.dataset.token);
  // console.log("12Token: " + cell12.dataset.token);
  // console.log("13Token: " + cell13.dataset.token);

var gameOver = false;

  if (cell11.dataset.token != '' && cell11.dataset.token == cell12.dataset.token && cell12.dataset.token == cell13.dataset.token) {
    cell11.classList.add('flash');
    cell12.classList.add('flash');
    cell13.classList.add('flash');
    gameOver = true;
  }

  if (cell21.dataset.token != '' && cell21.dataset.token == cell22.dataset.token && cell22.dataset.token == cell23.dataset.token) {
    cell21.classList.add('flash');
    cell22.classList.add('flash');
    cell23.classList.add('flash');
    gameOver = true;
  }

  if (cell31.dataset.token != '' && cell31.dataset.token == cell32.dataset.token && cell32.dataset.token == cell33.dataset.token) {
    cell31.classList.add('flash');
    cell32.classList.add('flash');
    cell33.classList.add('flash');
    gameOver = true;
  }
    
  if (cell11.dataset.token != '' && cell11.dataset.token == cell21.dataset.token && cell21.dataset.token == cell31.dataset.token) {
    cell11.classList.add('flash');
    cell21.classList.add('flash');
    cell31.classList.add('flash');
    gameOver = true;
  }
    
  if (cell12.dataset.token != '' && cell12.dataset.token == cell22.dataset.token && cell22.dataset.token == cell32.dataset.token) {
    cell12.classList.add('flash');
    cell22.classList.add('flash');
    cell32.classList.add('flash');
    gameOver = true;
  }
    
  if (cell13.dataset.token != '' && cell13.dataset.token == cell23.dataset.token && cell23.dataset.token == cell33.dataset.token) {
    cell13.classList.add('flash');
    cell23.classList.add('flash');
    cell33.classList.add('flash');
    gameOver = true;
  }

  if (cell11.dataset.token != '' && cell11.dataset.token == cell22.dataset.token && cell22.dataset.token == cell33.dataset.token) {
    cell11.classList.add('flash');
    cell22.classList.add('flash');
    cell33.classList.add('flash');
    gameOver = true;
  }
    
  if (cell13.dataset.token != '' && cell13.dataset.token == cell22.dataset.token && cell22.dataset.token == cell31.dataset.token) {
    cell13.classList.add('flash');
    cell22.classList.add('flash');
    cell31.classList.add('flash');
    gameOver = true;
  }

  if (gameOver) {
    console.log('Winner');
    return true;
  } else {
    return false;
  }  
   
}


var handleClick = function(event) {
  console.log('Someone clicked on id:[' + event.target.id + ']');
  // console.log('Someone clicked on class: [' + event.target.classList + ']');
  // console.log('Someone clicked on tag [' + event.target.tagName + ']');

  if (checkWinner()) {//check if someone wins, cannot click to change background color
    // alert('The game is over.'); 
    return;
  }

  
  if (player1) {
    event.target.innerHTML = "<img class='greensword' src='https://i.imgur.com/ZQmaQV4.png'/>";
    event.target.dataset.token = "x";
    if (checkWinner()) {
      return;
    }
    player1 = false;
  
  } else {
    event.target.innerHTML = "<img class='whitesword' src='https://i.imgur.com/Olp853s.png'/>";
    event.target.dataset.token = "o";
    if (checkWinner()) {
      return;
    }
    player1 = true; 
  }
}

cell11.addEventListener('click', handleClick);
cell12.addEventListener('click', handleClick);
cell13.addEventListener('click', handleClick);

cell21.addEventListener('click', handleClick);
cell22.addEventListener('click', handleClick);
cell23.addEventListener('click', handleClick);

cell31.addEventListener('click', handleClick);
cell32.addEventListener('click', handleClick);
cell33.addEventListener('click', handleClick);

resetbtn.addEventListener('click', handleReset);



