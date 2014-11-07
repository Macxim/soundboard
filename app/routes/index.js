  import Ember from 'ember';

  export default Ember.Route.extend({
    model: function(params) {
      return this.store.find('sound', { fileName: params.fileName });
    },
    serialize: function(model) {
      return { fileName: model.fileName };
    }
  });
