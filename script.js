'use strict';

let input = prompt("Угадай число от 1 до 100");

const isNumber = function(num){

  return num !== null ;
}

function game(i) {

  if (input === null){       
    return alert("Игра окончена");

  }else if (i === parseFloat(input)) {  
    return confirm("Поздравляю, Вы угадали!!!");

  } else if (i > parseFloat(input)){
    input = prompt("Загаданное число больше, введите новое")     
    return game(i);

  } else if (i < parseFloat(input)){
    input = prompt("Загаданное число меньше, введите новое")     
    return game(i);

  } else if (isNumber(input)){
    input = prompt("Введи число!")    
    return game(i);

  } 
}
game(5);