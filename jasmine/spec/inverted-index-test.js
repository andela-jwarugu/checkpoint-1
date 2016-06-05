describe('indexObj', function(){
	var indexObj = new Index;
	describe('createIndex', function(){
		// indexObj.getIndex();
		it('fileContents should be empty before calling createIndex()', function(){
			var keys = Object.keys(indexObj.fileContents);
			expect(keys.length).toBe(0);
		})
		it('reads json file and asserts file is not empty', function(){
			indexObj.createIndex();
			//console.log(indexObj.fileContents);
			var arr = indexObj.fileContents;
			expect(arr.length).not.toBe(0);
			expect(arr.indexOf("joy")).toBe(-1);
		})
	})
	// describe('getIndex',function(){
	// 	it('returns a stirng of file contents',function(){
	// 		expect(indexObj.getIndex().toBe(typeof(String)));
	// 	})
	// })
})


