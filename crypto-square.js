// creat our crytpo class
// it takes a string as an agrument
//store the string for use elsewhere 
// make classes with objects within (class = university, object= JMU, method = normalizeplaintext)
// crypto = class 
// new (in .js), refers to a new instance within the class, crypto
var crypto = function(text){
	this.text = text; 
};

crypto.prototype.normalizePlaintext = function() {       //   
	return this.text.replace(/\W/g, '').toLowerCase();  //    \W means non word class /g means global
};

crypto.prototype.size = function() {
	var length = this.normalizePlaintext().length;
	return Math.ceil(Math.sqrt(length));				// math.ceil = round up 
};

crypto.prototype.plaintextSegments = function() {
	var npt = this.normalizePlaintext(),
		size = this.size(),
		segs = []; // empty array 

	for (var i = 0; i < npt.length; i += size) {
		segs.push(npt.slice(i, i + size));
	}

	return segs;

crypto.prototype.ciphertext = function () {
	var ct = "",
		size = this.size()
		segs = this.plaintextSegments();

	for (var i = 0; i < size; i += 1) {				//columns
		for (var j = 0; j < segs.length; j += 1) {	//rows
			ct +=  segs[j].charAt(i);						// character at a specific location

		}
	}											//nested loop 

	return ct; 

};
 
module.exports = crypto;   
