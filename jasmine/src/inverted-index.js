var fs = require('fs');

function Index(){
	'use strict'
	
	this.createIndex = function(filePath){
		fs.readFile(filePath , function doneReading(err, fileContents){
			
			console.log(fileContents.toString());
		})
	}
}

var indexObj =new Index();
indexObj.createIndex('../books.json');
