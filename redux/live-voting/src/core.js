import { List } from 'immutable';

export function setEntries (state, entries) {
  return state.set('entries', List(entries));
}

export function next (state) {
  const entries = state.get('entries');

  return state.merge({
    vote: {
      pair: entries.take(2)
    },
    entries: entries.skip(2)
  })
}
