//Control whether or not a letter appears as a "_" or as itself on-screen

function letter(value) {
	this.value = value;
	this.showLetters = false;
	if (this.value == ' ') 
		this.showLetters = true;
}

letter.prototype.printInfo = function() {
    
	if (this.showLetters) {
		return this.value;
	}
	return "_ ";
}

exports.letter = letter;
