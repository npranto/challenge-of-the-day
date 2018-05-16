import assert from 'assert';
import kaprekarsConstant from './kaprekarsConstant';

describe(`kaprekarsConstant()`, function() {
	it(`should return 5 when input is 2111`, function() {
		assert.equal(kaprekarsConstant(2111), 5);
	});
	it(`should return 7 when input is 9831`, function() {
		assert.equal(kaprekarsConstant(9831), 7);
	});
});