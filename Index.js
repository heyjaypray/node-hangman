const randomWords = require("./randomWords.js");
const wordConstructor = require("./word.js");
const letterCons = require("./letter.js");
const inquirer = require("inquirer");
const randomWord = randomWords.randomWord;


let letterGuessed;
let myWord = new wordConstructor.wordConstructor(randomWords.randomWord);
let totalGuesses = 15;

function guess(){

	console.log(myWord.toString());
	if (myWord.lettersGuess.length >= totalGuesses){
		console.log('YOU LOSE. TRY AGAIN! ');
	return; 
    }
    

	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(str){
            var aToZ = new RegExp("^[a-zA-Z\s]{1,1}$");
            
			return aToZ.test(str);
				}
		}]).then(function(letterInput){ 

                var letter = letterInput.letter; 
                
                myWord.findLetter(letter); 
                
					if(!myWord.done()){ 
                        console.log("keep going")
					}else {
                        console.log('Congratulations!!! the word was ' + myWord.toString() + '!');
                        return; 
                    }


				console.log('--------------------------------\n'); 
                console.log('You only have ' + (totalGuesses - myWord.lettersGuess.length) + ' guesses left.')
                
				guess(); 
				}
  );
}

guess(); 