# Inverted Index
## Checkpoint-1

This is an inverted index object that takes a JSON array of text objects and creates an index from the array. The index allows a user to search for text blocks in the array that contain a specified collection of words.

## Index functions

### createIndex(filepath)

This method returns a promise. It reads the contents of the file specified in the filepath and returns to the promise this data in a variable dubbed `arr`.

### getIndex()

This method simply returns an inverted index object. It takes calls the data from createIndex method and loops through it, calls the formatContent method to format this data and then assigns formatted text into an object. The keys of this object being the strings that make up the file content and the values being the position of the individual string in the inverted index.

### searchIndex(searchItems)

This method searches for the searchItems passed as an argument and returns an array of numbers. The numbers indicate the position of each item in the file.

The searchItems could be an array or a string(s).
