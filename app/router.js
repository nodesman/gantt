import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('gantts', function() {
    this.route('view', {
      path: '/view/:gantt_id'
    });
  });
});

export default Router;
