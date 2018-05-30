import { assert } from 'chai';
import swapCase from './swapCase';

describe(`swapCase()`, function() {
	it(`should return "hELLO wORLD" when passed "Hello World"`, function() {
		assert.equal(swapCase("Hello World"), "hELLO wORLD")
	})
	it(`should return "are you serius?" when passed "ARE YOU SERIUS?"`, function() {
		assert.equal(swapCase("ARE YOU SERIUS?"), "are you serius?")
	})
	it(`should return "bRO, lEbRON jAMES IS 33 YEARS OLD AND HE'S STILL PLAYING LIKE WHEN HE WAS IN HIS PRIME, LOL!" when passed "Bro, LeBron James is 33 years old and he's still playing like when he was in his prime, lol!"`, function() {
		assert.equal(swapCase("Bro, LeBron James is 33 years old and he's still playing like when he was in his prime, lol!"), "bRO, lEbRON jAMES IS 33 YEARS OLD AND HE'S STILL PLAYING LIKE WHEN HE WAS IN HIS PRIME, LOL!")
	})
})