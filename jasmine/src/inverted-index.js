function Index(){
  'use strict'

  this.invertedIndex = {};
  this.searchResults = [];

  this.createIndex = function(filepath){
    /*

      createIndex method reads the contents of a file whose path is passed as an
      argument in the method. The method returns a promise.

    */
  return fetch(filepath).then(function(response){
      return response.text();
      var self = this;
  	}).then(function(data){
      self.arr = JSON.parse(data);
      return self.arr;
  	});
  };

	this.formatContent = function(content){
    /*

      This method removes stop words and punctuation marks and returns an array
      of words. Stop words from http://www.ranks.nl/stopwords

    */
		var stopWords = ["a","about","above","after","again","against","all","am",
            "an","and","any","are","aren\'t", "as","at","be","because","been",
            "before","being","below","between","both","but","by","can\'t",
            "cannot","could","couldn\'t","did","didn\'t","do","does","doesn\'t",
            "doing","don\'t","down","during","each","few","for","from",
            "further","had","hadn\'t","has","hasn\'t","have","haven\'t",
            "having","he","he\'d","he\'ll","he\'s","her","here","here\'s",
            "hers","herself","him","himself","his","how","how\'s","i","i\'d",
            "i\'ll","i\'m","i\'ve","if","in","into","is","isn\'t","it","it\'s",
            "its","itself","let\'s","me","more","most","mustn\'t","my","myself",
            "no","nor","not","of","off","on","once","only","or","other","ought",
            "our","ours","ourselves","out","over","own","same","shan\'t","she",
            "she\'d","she\'ll","she\'s","should","shouldn\'t","so","some",
            "such","than","that","that\'s","the","their","theirs","them",
            "themselves","then","there","there\'s","these","they","they\'d",
            "they\'ll","they\'re","they\'ve","this","those","through","to",
            "too","under","until","up","very","was","wasn\'t","we","we\'d",
            "we\'ll","we\'re","we\'ve","were","weren\'t","what","what\'s",
            "when","when\'s","where","where\'s","which","while","who","who\'s",
            "whom","why","why\'s","with","won\'t","would","wouldn\'t","you",
            "you\'d","you'll","you're","you\'ve","your","yours","yourself",
            "yourselves"];

		var stopString = "\\b" + stopWords.toString()
            .replace(/\,/gi,"\\b|\\b") + "\\b";
		var re = new RegExp(stopString,"gi");
		var doc = content.replace(/W/gi, '').replace(re, '')
            .replace(/\s(?=\s)/gi, "").trim().toLowerCase().split(' ');
    return doc;
  };

	this.getIndex = function(){

    for(var index=0; index<this.arr.length; index++){

  		var str = '';
  		var obj = this.arr[index];

  		Object.keys(obj).map(function(key){
  			str += ' ' + (obj[key]);
  		});

      var doc = this.formatContent(str);

      for(var i=0; i<doc.length ;i++){
        if(this.invertedIndex[doc[i]]){
          if(this.invertedIndex[doc[i]].indexOf(index) === -1) {
            this.invertedIndex[doc[i]].push(index);
          }
        } else {
          this.invertedIndex[doc[i]] = [index];
        }
      }
    }
    	return this.invertedIndex;
  	};

	this.searchIndex = function(searchItems){
    /*

      When a search item is passed into the method it returns an array of that
      identifies the document in which the words are contained or lack thereof.

    */

		var results = [];
    var self = this;
    if (Array.isArray(searchItems)){

      for (var i=0; i<searchItems.length; i++){
  			Object.keys(this.invertedIndex).map(function(key){

  				if (searchItems[i] === key){
            if (self.invertedIndex[searchItems[i]].length === 1){
                results.push(self.invertedIndex[key][0]);
            }else{
              results.push(self.invertedIndex[key]);
            }
            }
  				});
  		}
  	}
    else if (typeof searchItems === 'string'){
      console.log(arguments);
      var arg = arguments;
      for(var i=0; i<arg.length; i++){

        var notfound = true;
        Object.keys(this.invertedIndex).map(function(key){
            console.log(arg[i]);
            if (arg[i] === key){
              notfound = false;
              if (self.invertedIndex[arg[i]].length === 1){
                	results.push(self.invertedIndex[key][0]);
              }else{
                results.push(self.invertedIndex[key]);
              }
            }
        });
        if (notfound) {
          results.push(-1);
        }
      }
    }
    else{
      results.push(-1);
    }
    console.log(results);
    return results;
  };

}
