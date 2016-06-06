function Index(){
	'use strict'

	this.fileContents = [];
	this.invertedIndex = {};
	//this.position = [];

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
			var obj = arr[i];
			var keys = Object.keys(obj).map(function(key){
				str += (obj[key]);
			});
			
		this.formatContent(str);
		//console.log(str);
		}
		
	}

	this.formatContent = function(content){
		this.fileContents = content.trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase().split(' ');

		for(var i=0; i<this.fileContents.length ;i++){
			this.invertedIndex[this.fileContents[i]] = "";
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

