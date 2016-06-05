//var fs = require('fs');

function Index(){
	'use strict'
	this.fileContents = {};
	this.createIndex = function(filePath){
		// var results = fs.readFile(filePath , 'utf8', function doneReading(err, fileContents){
		// console.log(fileContents.split(' '));
		// })
		this.fileContents = require(filePath);
		return this.fileContents;
	}

	this.getIndex = function(){
		console.log(this.fileContents);
		
	}
}

var indexObj =new Index();
indexObj.createIndex('../books.json');
indexObj.getIndex();
