import DS from 'ember-data';

export default DS.FixtureAdapter.extend({});

// The following does not work.
// export default DS.FixtureAdapter.extend({
//   queryFixtures: function(fixtures, query) {
//     var key = Ember.keys(query)[0];
//     return fixtures.filterBy(key, query[key]);
//   }
// });