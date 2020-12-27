const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
  }

  print() {
      this.field.forEach(i => {
        const cleanField = i.join('');
        console.log(cleanField);
      })
  }

  userInput() {
    let current = 0;
    // Get Input
    const input = prompt('Which way? ');
    if (input === 'd' || input === 'r' || input === 'u' || input === 'l') {
            current = input;
        } else {
            console.log('Invalid input, please use d for Down, r for Right, u for Up, or l for Left');
        };

    // Find Star
    console.log(findUser());
  }

  findUser() {
      this.field.forEach(i => {
        const star = '*';
        let index = i.length - 1;
        for (; index >= 0; index--) {
            if (i[index] === star) {
                console.log(i.indexOf(star));   
              }
              break;
            }
            
        })
    }
  


  updateField(input) {
    if(userInput() === 'd') {
        
    }
  }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '*'],
    ['░', '^', '░'],
  ]);

myField.print();
myField.userInput();
myField.findUser();