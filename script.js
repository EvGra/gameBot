'use strict';

let input = prompt("Угадай число от 1 до 100");
let count = 0;
let atempts;

const isNumber = function(num){

  return num !== null ;
}

function game(i) {

  count++;
  atempts = 10 - count;

  console.log(input, typeof input)
  if (atempts === 0){       
    return alert("Попытки закончились, хотите сыграть еще?");

  }else if (input === null){       
    return alert("Игра окончена");

  }else if (i === parseFloat(input)) {  
    input = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
    if (input === true) {
      input = prompt("Угадай число от 1 до 100");
      count = 0;
      return game(i);
    }

  } else if (i > parseFloat(input)){
    input = prompt("Загаданное число больше, осталось попыток " + atempts)     
    return game(i);

  } else if (i < parseFloat(input)){
    input = prompt("Загаданное число меньше, осталось попыток " + atempts)     
    return game(i);

  } else if (isNumber(input)){
    input = prompt("Введи число!")    
    return game(i);

  } 
}
game(5);