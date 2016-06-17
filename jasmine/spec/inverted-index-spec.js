
'use strict'
var testObj = new Index(), path = '/jasmine/books.json';

beforeEach(function(done){
  testObj.readIndex(path).then(function(data){
		testObj.arr = data;
    done();
  });
});

describe('createIndex', function(){

	it('reads json file and asserts file is not empty', function(){

		expect(testObj.arr.length).not.toBe(0);
		//expect()
	});
});

describe('getIndex', function(){

 	it('returns an object of file contents',function(){
 		expect(typeof testObj.getIndex()).toBe('object');
		//expect(testObj.invertedIndex[])
 	});
});

// describe('searchIndex', function(){
//
// 	it('returns the correct results when searched', function(){
// 		expect(testObj.searchIndex(['alice']).toBe())
// 	})
// })

// indexObj.searchIndex(["alice", "governor", "wonderland", "lord", "rings"]);
