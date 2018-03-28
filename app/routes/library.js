import Route from '@ember/routing/route';

export default Route.extend({

  queryParams: {
    query: { refreshModel: true },
    active: { refreshModel: true }
  },

  actions: {
    search(query){
      this.controller.set('query', query);
    },
    reset(){
      this.controller.set('query', null);
    }
  },

  // you get access to the query params on the model
  model(params){
    return {
      query: params.query,
      active: params.active
    };
  }

});
