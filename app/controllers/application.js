import Ember from 'ember';

export default Ember.Controller.extend({
  title: null,
  observe: Ember.observer("currentRouteName",function() {
      this.set("isHome", this.get("currentRouteName") === "index");
  }),
  photoUrl: Ember.computed({
    get() {
      return this.get("session.currentUser.photoURL");
    }
  }),
  actions: {
    createGantt() {
      var record = this.store.createRecord("gantt-chart", {
        title: this.get("title"),
        timestamp: new Date()
      });
      record.save();
    }
  }
});
