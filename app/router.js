import EmberRouter from '@ember/routing/router';
import config from 'ember-gpx/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('runs');
  this.route('walks');
  this.route('swims');
});
