
'use strict'
var testObj = new Index(), path = '/jasmine/books.json';

beforeEach(function(done){
  testObj.createIndex(path).then(function(data){
		testObj.arr = data;
    done();
  });
});

describe('Read book data', function(){

	it('reads json file and asserts file is not empty', function(){
		expect(testObj.arr.length).not.toBe(0);
	});
});

describe('Populate index', function(){

 	it('ensures that an index object is created',function(){
 		expect(typeof testObj.getIndex()).toBe('object');
 	});

	it('ensures that index created is correct', function(){
		expect(testObj.invertedIndex['alice']).toEqual([0]);
		expect(testObj.invertedIndex['lord']).toEqual([1]);
		expect(testObj.invertedIndex['joy']).toBe(-1);
	});
});

// describe('searchIndex', function(){
//
// 	it('returns the correct results when searched', function(){
// 		expect(testObj.searchIndex(['alice']).toBe())
// 	})
// })

// indexObj.searchIndex(["alice", "governor", "wonderland", "lord", "rings"]);
