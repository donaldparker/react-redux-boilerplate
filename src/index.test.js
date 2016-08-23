import expect from 'expect';

/* es2017 async example */
async function getResult() {
	var foo = await new Promise((resolve, reject) => { resolve(true); });
	return foo;
}


describe('Just a blank test', () => {
	it('should pass', () => {
		let result = getResult();
		console.log('Result Loaded'. result);
		expect(result).toEqual(true);
	});
});
