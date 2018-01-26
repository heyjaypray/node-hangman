var letterCons = require("./letter.js");

function word(value){

	this.value = value;
	this.letters = [];
    this.lettersGuess = "";
    
	for(var i = 0; i < this.value.length; i++) {
		this.letters.push(new letterCons.letter(this.value[i]));
    }
    
};

word.prototype.done = function(){

	for(var i = 0; i < this.letters.length; i++){
		if(!this.letters[i].showLetters) return false;
    }
    
	return true;
}


word.prototype.findLetter = function(letter){

    var lowerLetter = letter.toLowerCase();
    
	if (this.lettersGuess.indexOf(lowerLetter) != -1) {
		return "Duplicate";
    } 
    
    this.lettersGuess += lowerLetter; 
    
	for(var i=0; i<this.letters.length;i++){
		if(this.letters[i].value.toLowerCase() == lowerLetter){
		this.letters[i].showLetters = true;
		}
	}
};

word.prototype.toString = function(){

    var output = "";

    for(var i=0; i<this.letters.length; i++){
    output += this.letters[i].printInfo();
    }

    return output;
  }


exports.wordConstructor = word;