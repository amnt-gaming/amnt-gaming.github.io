window.App = {};

App.Model = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    note: '',
    bought: false
  }
});

App.Collection = Backbone.Collection.extend({
  model: App.Model,
  url: '/api/home'
});

App.collection = new App.Collection;
