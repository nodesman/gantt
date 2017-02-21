import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['gantt-container'],
  didRender() {
    let instance = gantt.init(this.$().get(0));
    this.set("instance", instance);
  }
});
