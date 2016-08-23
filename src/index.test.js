import expect from 'expect';

/* es2017 async example */
/* const getResult = async function() {
	var foo = await new Promise((resolve, reject) => { resolve(true); });
	return foo;
} */

const getResults = () => {
  return true;
}


describe('Just a blank test', () => {
	it('should pass', () => {
		let result = getResults();
		console.log('Result Loaded'. result);
		expect(result).toEqual(true);
	});
});
