function Index(){
	'use strict'

	this.fileContents = [];
	this.invertedIndex = {};
	this.searchResults = [];

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
		// fetch('/books.json').then(function(data){
		// 	data.json();
		// }).then(function(books){
		// 	JSON.parse(books);
		// 	console.log(books);
		// });

		for(var i = 0; i<arr.length; i++){
		
			var str = '';
			var obj = arr[i];
			Object.keys(obj).map(function(key){
				str += ' ' + (obj[key]);
			});
			this.formatContent(str,i);
			
		}
		
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

		var doc = content.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/gi, '').replace(re, '').replace(/\s{2,}/gi, "").trim().toLowerCase().split(' ');
		//replace(/\s(?=\s)/gi, "")
		this.fileContents.push(doc);

		for(var i=0; i<doc.length ;i++){
			if(this.invertedIndex[doc[i]]) {
				if(this.invertedIndex[doc[i]].indexOf(index) === -1) {
					this.invertedIndex[doc[i]].push(index);
				}
			} else {
				this.invertedIndex[doc[i]] = [index];
			}
		}
	}

	this.getIndex = function(){
		console.log(this.invertedIndex);		
	}

	this.searchIndex = function(searchItems){
		
		var results = [];
		
		for (var i=0; i<searchItems.length; i++){
			Object.keys(this.invertedIndex).map(function(key){
				if(searchItems[i] ==key){
					results.push(key);
				}
			})
		}
		
		if (results.length>0){
			console.log("Match: " + results + " is in the document");
		} else{
			console.log("Try harder");
			//return -1;
		} 

	}
}

var indexObj = new Index();
indexObj.createIndex();
indexObj.getIndex();
//indexObj.searchIndex(["alice", "governor", "wonderland", "lord", "rings"]);

