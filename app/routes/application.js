import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    return this.get('session').fetch();
  },
  model() {
    return this.store.findAll("gantt-chart");
  },
  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', {
        provider: provider
      }).then(()=> {
        this.refresh();
      });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
