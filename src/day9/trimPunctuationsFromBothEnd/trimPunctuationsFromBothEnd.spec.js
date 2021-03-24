import { assert } from 'chai';
import trimPunctuationsFromBothEnd from './trimPunctuationsFromBothEnd';

describe('trimPunctuationsFromBothEnd()', () => {
  it('should return "All" when passed "All"', () => {
    assert.equal(trimPunctuationsFromBothEnd('All'), 'All');
  });
  it('should return "All" when passed "All,"', () => {
    assert.equal(trimPunctuationsFromBothEnd('All,'), 'All');
  });
  it('should return "All" when passed "!All"', () => {
    assert.equal(trimPunctuationsFromBothEnd('!All'), 'All');
  });
  it('should return "All" when passed ",All!"', () => {
    assert.equal(trimPunctuationsFromBothEnd(',All!'), 'All');
  });
});
