import { expect } from 'chai';

describe('immutability', () => {
  describe('a number', () => {
    let increment = (currentState) => currentState + 1;

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });
  });
});
