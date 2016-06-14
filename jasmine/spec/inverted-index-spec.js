describe('indexObj', function(){
	var indexObj = new Index;

  beforeEach(function(done){
    indexObj.createIndex.done(function(data){
      done();
    });
  })
	describe('createIndex', function(){

		it('reads json file and asserts file is not empty', function(){
			expect(arr.length).not.toBe(0);
			expect(arr.indexOf("joy")).toBe(-1);
		})
	})

	// describe('getIndex',function(){
 //    indexObj.createIndex();

	// 	it('returns an object of file contents',function(){
	// 		expect(typeof indexObj.getIndex().toBe('string'));
	// 	})

// indexObj.searchIndex(["alice", "governor", "wonderland", "lord", "rings"]);


  })
})
