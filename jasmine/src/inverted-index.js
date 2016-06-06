function Index(){
	'use strict'

	this.fileContents = [];
	this.invertedIndex = {};

	this.createIndex = function(){
		//read file contents and convert JSON to string then change case and split into words
		var arr = [
		{
		"title": "Alice in Wonderland",
		"text": "Alice falls into a rabbit hole and enters a world full of imagination."
		},

		{
		"title": "The Lord of the Rings: The Fellowship of the Ring.",
		"text": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."
		}
		];

		var str = '';
		for(var i = 0; i<arr.length; i++){
			//console.log(i);
			var obj = arr[i];
			var keys = Object.keys(obj);
			//console.log(keys);
			
			for(var j = 0; j < keys.length; j++) {
				//console.log(j + ': ' + obj[keys[j]]);
				str += obj[keys[j]] + ' ';
			}
		this.formatContent(str);
		//console.log(str);
		}
		
	}

	this.formatContent = function(content){
		// console.log(this.fileContents);
		// console.log(this.invertedIndex);
		this.fileContents = content.trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase().split(' ');
		for(var i=0; i<this.fileContents.length ;i++){
			//console.log(this.invertedIndex);
			this.invertedIndex[this.fileContents[i]] = "";
		}
		// this.fileContents.forEach(function(item){
		// 	console.log(this.invertedIndex);
		// 	this.invertedIndex[item] = "";
		// });
		// return this.fileContents;

	}

	this.getIndex = function(){
		//console.log(this.fileContents);
		console.log(this.invertedIndex);
		
	}
}

var indexObj = new Index();
indexObj.createIndex();
indexObj.getIndex();

