import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findRecord(params.hand_id);
  }
});
