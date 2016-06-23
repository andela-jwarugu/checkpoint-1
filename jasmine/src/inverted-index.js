function Index() {
	'use strict';

	this.invertedIndex = {};

	this.createIndex = function(filepath) {
		/*

		  createIndex method reads the contents of a file whose path is passed as an
		  argument in the method. The method returns a promise.

		*/
		return fetch(filepath).then(function(response) {
			return response.text();
		}).then(function(data) {
			var jsonObject = JSON.parse(data);
			return jsonObject;
		});
	};

	this.formatContent = function(content) {
		/*

		  This method removes stop words and punctuation marks and returns an array
		  of words. Stop words from http://www.ranks.nl/stopwords

		*/
		var stopWords = ['a', 'about', 'above', 'after', 'again', 'against',
			'all', 'am', 'an', 'and', 'any', 'are', 'aren\'t', 'as', 'at', 'be',
			'because', 'been', 'before', 'being', 'below', 'between', 'both',
			'but', 'by', 'can\'t', 'cannot', 'could', 'couldn\'t', 'did',
			'didn\'t', 'do', 'does', 'doesn\'t', 'doing', 'don\'t', 'down',
			'during', 'each', 'few', 'for', 'from', 'further', 'had', 'hadn\'t',
			'has', 'hasn\'t', 'have', 'haven\'t', 'having', 'he', 'he\'d',
			'he\'ll', 'he\'s', 'her', 'here', 'here\'s', 'hers', 'herself', 'him',
			'himself', 'his', 'how', 'how\'s', 'i', 'i\'d', 'i\'ll', 'i\'m',
			'i\'ve', 'if', 'in', 'into', 'is', 'isn\'t', 'it', 'it\'s',
			'its', 'itself', 'let\'s', 'me', 'more', 'most', 'mustn\'t', 'my',
			'myself', 'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only',
			'or', 'other', 'ought', 'our', 'ours', 'ourselves', 'out', 'over',
			'own', 'same', 'shan\'t', 'she', 'she\'d', 'she\'ll', 'she\'s',
			'should', 'shouldn\'t', 'so', 'some',
			'such', 'than', 'that', 'that\'s', 'the', 'their', 'theirs', 'them',
			'themselves', 'then', 'there', 'there\'s', 'these', 'they', 'they\'d',
			'they\'ll', 'they\'re', 'they\'ve', 'this', 'those', 'through', 'to',
			'too', 'under', 'until', 'up', 'very', 'was', 'wasn\'t', 'we', 'we\'d',
			'we\'ll', 'we\'re', 'we\'ve', 'were', 'weren\'t', 'what', 'what\'s',
			'when', 'when\'s', 'where', 'where\'s', 'which', 'while', 'who', 'who\'s',
			'whom', 'why', 'why\'s', 'with', 'won\'t', 'would', 'wouldn\'t', 'you',
			'you\'d', 'you\'ll', 'you\'re', 'you\'ve', 'your', 'yours', 'yourself',
			'yourselves'
		];

		var stopString = '\\b' + stopWords.toString()
			.replace(/\,/gi, '\\b|\\b') + '\\b';
		var re = new RegExp(stopString, 'gi');

		/*
			Replaces punctuaion marks and the regExp containing stopwords with a
			single space and splits the string by spaces returning an array of words.

		*/
		var doc = content.replace(/\W+/gi, ' ').replace(re, ' ')
			.trim().toLowerCase().split(' ');
		return doc;
	};

	this.getIndex = function() {

		function getValues(obj) {
			var str = '';

			Object.keys(obj).map(function(key) {
				str += ' ' + obj[key];
			});

			return str;
		}

		var indexObj = this.invertedIndex;
		for (var index = 0; index < this.arr.length; index++) {


			var fileContents = getValues(this.arr[index]);

			var doc = this.formatContent(fileContents);

			for (var i = 0; i < doc.length; i++) {
				var exist = indexObj.hasOwnProperty(doc[i]);

				if (!exist) {
					indexObj[doc[i]] = [index];
				}

				if (exist && !indexObj[doc[i]].includes(index)) {
					indexObj[doc[i]].push(index);
				}
			}
		}
		return indexObj;
	};

	this.searchIndex = function(searchItems) {
		/*

		  When a search item is passed into the method it returns an array of that
		  identifies the document in which the words are contained or lack thereof.

		*/

		var results = [];
		var terms = [];

		if (!Array.isArray(searchItems) && typeof searchItems !== 'string') {
			return 'Invalid Input';
		}

		if (!Array.isArray(searchItems)) {
			for (var key in arguments) {
				terms.push(arguments[key]);
			}
		} else {
			terms = searchItems;
		}

		for (var i = 0; i < terms.length; i++) {

			if (!this.invertedIndex.hasOwnProperty(terms[i])) {
				results.push([-1]);
			} else {
				results.push(this.invertedIndex[terms[i]]);
			}
		}

		return results;

	};

}
