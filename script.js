'use strict';

const isNumber = function(num){

  return num !== null ;
}

const game = function () {
  
    let randomResult = Math.ceil(Math.random() * 100);
    let input = prompt("Угадай число от 1 до 100");
    let count = 0;
    let atempts;

    console.log(randomResult);

    const repeat = function () {

      count++;
      atempts = 10 - count;
    
      switch (true) {

        case atempts === 0:
          alert("Попытки закончились, хотите сыграть еще?");
          break

        case input === null:
          alert("Игра окончена");
          break

        case parseFloat(input) > randomResult:
          input = prompt("Загаданное число меньше, осталось попыток " + atempts)
          repeat();
          break

        case parseFloat(input) < randomResult:
          input = prompt("Загаданное число больше, осталось попыток " + atempts) 
          repeat();
          break

        case parseFloat(input) === randomResult:
          input = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
          if (input === true) {
            input = prompt("Угадай число от 1 до 100");
            count = 0;
            repeat();}
          break

        case (isNumber(input)):
          input = prompt("Введи число!");
          repeat();
          break

      }

    }

    repeat(); 
  }

  game();