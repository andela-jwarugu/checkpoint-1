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

		for(var i = 0; i<arr.length; i++){
		
			var str = '';
			var obj = arr[i];
			Object.keys(obj).map(function(key){
				str += ' ' + (obj[key]);
			});

			this.formatContent(str,i);
		}
		console.log(str);
		
	}

	this.formatContent = function(content, index){
		this.fileContents = content.trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase().split(' ');

		for(var i=0; i<this.fileContents.length ;i++){
			if(this.invertedIndex[this.fileContents[i]]) {
				this.invertedIndex[this.fileContents[i]].push(index);
			} else {
				this.invertedIndex[this.fileContents[i]] = [index];
			}
		}
	}

	this.getIndex = function(){
		//console.log(this.fileContents);
		console.log(this.invertedIndex);
		
	}
}

var indexObj = new Index();
indexObj.createIndex();
indexObj.getIndex();

