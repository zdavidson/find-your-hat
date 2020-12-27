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
    let location = 0;
    let array = 0;
    const star = '*';

    // Get Input
    const input = prompt('Which way? ');
    if (input === 'd' || input === 'r' || input === 'u' || input === 'l') {
            current = input;
        } else {
            console.log('Invalid input, please use d for Down, r for Right, u for Up, or l for Left');
        };

    // Find Last Star
    this.field.forEach(i => {
        let index = i.length - 1;
        for (; index >= 0; index--) {
            if (i[index] === star) {
                location = i.indexOf(star);
                array = this.field.indexOf(i);
                console.log(location);
                console.log(array);
              }
              break;
            }
        })
 
    // Left
    if (current === 'l' && array < this.field.length - 1) {
        let line = array + 1;
        this.field[line].splice(location, 1, star);
        }

    // Up
    if (current === 'u' && location < this.field[array].length - 1) {
        location++;
        this.field[array].splice(location, 1, star);
        }

    // Down
    if (current === 'd' && location > 0) {
        location = 0;
        this.field[array].splice(location, 1, star);
        }

    // Right
    if (current === 'r' && array < this.field.length - 1) {
        let line = array - 1;
        this.field[line].splice(location, 1, star);
        }

    this.print();
    this.userInput();
    }


  updateField(input) {
    if(userInput() === 'd') {
        
    }
  }
}

const myField = new Field([
    ['░', '░', '░'],
    ['░', '*', '░'],
    ['░', '░', '░'],
  ]);

myField.print();
myField.userInput();
