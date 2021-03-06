import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('hands', function() {
    this.route('hand', { path: '/:hand_id' });
  });
});

export default Router;
