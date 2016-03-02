import { expect } from 'chai';
import { List, Map } from 'immutable';

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

  describe('Array', () => {
    let append = (currentState, item) => [...currentState, item]

    it('is immutable', () => {
      let state = [1];
      let nextState = append(state, 2);

      expect(nextState).to.eql([1, 2]);
      expect(state).to.eql([1]);
    });
  });

  describe('Immutable.js List', () => {
    let addMovie = (currentState, movie) => currentState.push(movie)

    it('is immutable', () => {
      let state = List.of("Trainspotting", "28 Days Later");
      let nextState = addMovie(state, "Sunshine");

      expect(nextState).to.equal(List.of("Trainspotting", "28 Days Later", "Sunshine"));
      expect(state).to.equal(List.of("Trainspotting", "28 Days Later"));
    })
  });

  describe('Tree (Map)', () => {
    let addMovie = (currentState, movie) => {
      // return currentState.set('movies', currentState.get('movies').push(movie));

      // Shorter
      return currentState.update('movies', movies => movies.push(movie));
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of("Trainspotting", "28 Days Later")
      });
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(Map({
        movies: List.of("Trainspotting", "28 Days Later", "Sunshine")
      }));

      expect(state).to.equal(Map({
        movies: List.of("Trainspotting", "28 Days Later")
      }));
    })
  });
});
