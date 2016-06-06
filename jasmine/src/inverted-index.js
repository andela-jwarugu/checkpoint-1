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
		//Stop words from http://www.ranks.nl/stopwords
		var stopWords = ["a","about","above","after","again","against","all","am","an","and","any","are","aren\'t",
						"as","at","be","because","been","before","being","below","between","both","but","by","can\'t",
						"cannot","could","couldn\'t","did","didn\'t","do","does","doesn\'t","doing","don\'t","down",
						"during","each","few","for","from","further","had","hadn\'t","has","hasn\'t","have","haven\'t",
						"having","he","he\'d","he\'ll","he\'s","her","here","here\'s","hers","herself","him","himself",
						"his","how","how\'s","i","i\'d","i\'ll","i\'m","i\'ve","if","in","into","is","isn\'t","it",
						"it\'s","its","itself","let\'s","me","more","most","mustn\'t","my","myself","no","nor","not",
						"of","off","on","once","only","or","other","ought","our","ours","ourselves","out","over","own",
						"same","shan\'t","she","she\'d","she\'ll","she\'s","should","shouldn\'t","so","some","such",
						"than","that","that\'s","the","their","theirs","them","themselves","then","there","there\'s",
						"these","they","they\'d","they\'ll","they\'re","they\'ve","this","those","through","to","too",
						"under","until","up","very","was","wasn\'t","we","we\'d","we\'ll","we\'re","we\'ve","were",
						"weren\'t","what","what\'s","when","when\'s","where","where\'s","which","while","who","who\'s",
						"whom","why","why\'s","with","won\'t","would","wouldn\'t","you","you\'d","you'll","you're",
						"you\'ve","your","yours","yourself","yourselves"];

		var stopString = "\\b" + stopWords.toString().replace(/\,/gi,"\\b|\\b") + "\\b";
		var re = new RegExp(stopString,"gi");

		this.fileContents = content.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/gi, '').replace(re, '').replace(/\s(?=\s)/gi, "").trim().toLowerCase().split(' ');

		for(var i=0; i<this.fileContents.length ;i++){
			if(this.invertedIndex[this.fileContents[i]]) {
				this.invertedIndex[this.fileContents[i]].push(index);
			} else {
				this.invertedIndex[this.fileContents[i]] = [index];
			}
		}
	}

	this.getIndex = function(){
		console.log(this.invertedIndex);		
	}
}

var indexObj = new Index();
indexObj.createIndex();
indexObj.getIndex();

