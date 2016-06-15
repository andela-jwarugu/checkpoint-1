describe('indexObj', function(){
	var testObj = new Index(), filepath = "/jasmine/books.json";



	beforeEach(function(done){
    testObj.createIndex(filepath).then(function(data){
			testObj.arr = data;
      done();
    });
	});

	describe('createIndex', function(){

		it('reads json file and asserts file is not empty', function(){
			expect(testObj.arr.length).not.toBe(0);
		});
	});

 describe('getIndex', function(){

 	it('returns an object of file contents',function(){
 		expect(typeof testObj.getIndex()).toBe('object');
 	});

});
// indexObj.searchIndex(["alice", "governor", "wonderland", "lord", "rings"]);

})
