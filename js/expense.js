var Expense = function(amount) {
  this._init(amount);
}

Expense.prototype = new function () {
  
  this._init = function(amount) {
    this.amount = amount;
  }   
}