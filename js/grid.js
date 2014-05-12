var Grid = function(container) {
  this._init(container);
}

Grid.prototype = new function () {
  
  var OFFSET_WIDTH = 70
    , OFFSET_HEIGHT = 50
    , MATRIX_X_SIZE = 7;
  
  this._init = function(container) {
    this.container = container;
    this.matrix = [], this.row = 0, this.col = 0;
    this.matrix.push([]);
  }
  
  this.placeItem = function(item) {
    
    if (this.col >= MATRIX_X_SIZE) {
        this.matrix.push([]);
        this.row++;
        this.col = 0;
    }
    
    this.container.appendChild(item.el);
    
    item.x = (item.width + OFFSET_WIDTH) * this.col;
    item.y = (item.height + OFFSET_HEIGHT) * this.row ;
    item.animateEntrance();
    
    this.matrix[this.row][this.col] = item;
    
    this.col++;
  }
}
  