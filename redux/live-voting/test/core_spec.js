import { List, Map } from 'immutable';
import { expect } from 'chai';

import { setEntries, next } from '../src/core';

describe('application logic', () => {
  describe('setEntries', () => {
    it('adds the entries to the state', () => {
      const state = Map();
      const entries = ['Waterzonic', 'S2O Festival'];
      const nextState = setEntries(state, entries);

      expect(nextState).to.equal(Map({
        entries: List.of('Waterzonic', 'S2O Festival')
      }));
    });
  });

  describe('next', () => {
    it('takes next 2 entries under vode', () => {
      const state = Map({
        entries: List.of('Waterzonic', 'S2O Festival', 'Take That')
      });
      const nextState = next(state);

      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Waterzonic', 'S2O Festival')
        }),
        entries: List.of('Take That')
      }));
    });
  });
});
