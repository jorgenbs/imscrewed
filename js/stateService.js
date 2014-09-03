var StateService;

StateService = {

  load: function() {
    //use localstorage before we get db-state
    return window.localStorage.state || null;
  },

  saveWallet: function(wallet, callback) {
    var state;
    if (!window.localStorage.state) state = window.localStorage.state = {};
    state.wallet = wallet;
    
    callback();
  }
}
