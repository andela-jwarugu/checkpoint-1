function Index(){
	'use strict'

	this.fileContents = {};
	//this.index = {};

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
		var len = arr.length;
		var str = '';
		for(var i = 0; i<len; i++){
			var obj = arr[i];
			var keys = Object.keys(obj);
			for(var j = 0; j < keys.length; j++) {
				str += obj[keys[j]] + ' ';
			}
		}
		// this.fileContents = JSON.stringify(arr).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase().split(' ');
		this.fileContents = str.trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase().split(' ');
	}

	this.getIndex = function(){
		console.log(this.fileContents);
		
	}
}

var indexObj = new Index();
indexObj.createIndex();
indexObj.getIndex();

