var Wallet = function(options) {
  this._init(options);
}

Wallet.prototype = new function() {
  
  this._init = function(options) {
    this.days = [];
    this.goal = options.goal;
    this.created = moment();
    this.accumulate = options.accumulate || true;

    for (var i = 0; i < options.duration; i++) {
      this.days.push(new Day({ index: i, limit: this.goal }))
    }
    
  }
  
  this.addExpenseToday = function(amount) {
    var day = this._getToday()
      , expense = new Expense(amount);
      
    day.expenses.push(expense);
    
    if (this.accumulate) {
      var tomorrow = this._getTomorrow()
        , balance = day.limit - amount;
      
      if (tomorrow) tomorrow.limit += balance;
    }
  }
  
  this._getToday = function() {
    var today = this._getCurrentIndex();
    return this._getDay(today);
  }
  
  this._getTomorrow = function() {
    var tomorrow = this._getCurrentIndex() + 1;
    return this._getDay(tomorrow);
  }
  
  this._getDay = function(index) {
    return index >= this.days.length ? null : this.days[index];
  }
  
  this._getCurrentIndex = function() {
    var now = moment()
      , difference = now.diff(this.created, "days");
    
    return difference;
  }
  
  
  /*
  Object.setProperty(this, "current", {
    get: function() {
      var now = moment()
        , difference = now.diff(this.created, "days");
      
      return difference >= this.days.length ? null : this.days[difference];
    },
    set: function(val) {}
  })*/
}
