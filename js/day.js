
var Day = function(options) {
  this._init(options);
}

Day.prototype = new function() {
  
  this._init = function(options) {
    this.index = options.index;
    this.limit = options.limit;
    this.accumulated = 0;
    this.expenses = [];
    this.el = this._createEle();
  }
  
  this.totalExpenses  =function() {
    var amount = 0;
    
    for (var i = this.expenses.length - 1; i >= 0; --i) {
      amount += this.expenses[i].amount;
    }
    
    return amount;
  }
  
  this._createEle = function() {
    var li = document.createElement("li");
    li.classList.add("day");
    
    return li;
  }
  
  this.animateEntrance = function() {
    this.el.classList.add("animated");
    this.el.classList.add("bounceInLeft");
  }
}