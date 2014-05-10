
var Day = function(options) {
  this._init(options);
}

Day.prototype = new function() {
  
  this._init = function(options) {
    this.index = options.index;
    this.limit = options.limit;
    this.accumulated = 0;
    this.expenses = [];
  }
  
  this.totalExpenses  =function() {
    var amount = 0;
    
    for (var i = this.expenses.length - 1; i >= 0; --i) {
      amount += this.expenses[i].amount;
    }
    
    return amount;
  }
}