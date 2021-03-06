import { assert } from 'chai';
import thirdGreatest from './thirdGreatest';

describe('thirdGreatest()', () => {
  it('should return "world" when passed (["hello", "world", "before", "all"], 3)', () => {
    assert.equal(
      thirdGreatest(['hello', 'world', 'before', 'all'], 3),
      'world',
    );
  });
  it('should return "one" when passed (["one", "two", "three", "four"], 3)', () => {
    assert.equal(thirdGreatest(['one', 'two', 'three', 'four'], 3), 'four');
  });
});
