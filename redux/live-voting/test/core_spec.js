import { List, Map } from 'immutable';
import { expect } from 'chai';

import { setEntries, next, vote } from '../src/core';

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

  describe('vote', () => {
    it('creates a tally for the voted entry', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Waterzonic', 'S2O Festival')
        }),
        entries: List()
      });

      const nextState = vote(state, 'Waterzonic');

      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Waterzonic', 'S2O Festival'),
          tally: Map({
            'Waterzonic': 1
          })
        }),
        entries: List()
      }));
    });

    it('adds to existing tally for the voted tally', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Waterzonic', 'S2O Festival'),
          tally: Map({
            'Waterzonic': 1,
            'S2O Festival': 2
          })
        }),
        entries: List()
      });

      const nextState = vote(state, 'S2O Festival');

      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Waterzonic', 'S2O Festival'),
          tally: Map({
            'Waterzonic': 1,
            'S2O Festival': 3
          })
        }),
        entries: List()
      }));
    });
  });
});
