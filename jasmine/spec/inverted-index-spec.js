var Index = require('../src/inverted-index');


describe('indexObj', function(){
	var indexObj = new Index;
	describe('createIndex', function(){
		it('fileContents should be empty before calling createIndex()', function(){
			var keys = Object.keys(indexObj.fileContents);
			expect(keys.length).toBe(0);
		})

		it('reads json file and asserts file is not empty', function(){
			indexObj.createIndex();
			var arr = indexObj.fileContents;
			expect(arr.length).not.toBe(0);
			expect(arr.indexOf("joy")).toBe(-1);
		})
	})
	// describe('getIndex',function(){
	// 	it('returns a stirng of file contents',function(){
	// 		expect(indexObj.getIndex().toBe(typeof(String)));
	// 	})
// 	// })
// 	// var indexObj = new Index();
// 	// indexObj.getBookData('../books.json');
// 	// indexObj.createIndex();
// 	// indexObj.getIndex();
// 	// indexObj.searchIndex(["alice", "governor", "wonderland", "lord", "rings"]);
// })


// var index = new Index();

// describe("Test", function(){
// 	it("checks whether json is empty", function(){
// 		expect (index.fileContents).toBe(null)
// 	});
});
