(function () {
  if (typeof window.Hanoi === "undefined") {
    window.Hanoi = {};
  }
  var Hanoi = window.Hanoi;

  var View = Hanoi.View = function (game, $el) {
    this.game = game;
    this.$el = $el;

    this.fromTower = null;
    this.bindEvents();

    this.setupTowers();
    this.render();
  };

  View.prototype.setupTowers = function () {
    for (var i = 0; i < 3; i++) {
      this.$el.append("<ul id=" + i + "></ul>");
    }

    for (var j =0; j < 3; j++){
      var $tower = $('ul#' + j);
      $tower.append("<div class='tower' value='" + j + "'></div>");
    }

    var $pile = $($("ul")[0]);
    for(var k = 0; k < 3; k++){
      $pile.append("<li id='tower-level" + k + "'></li>");
    }
  };

  View.prototype.bindEvents = function () {
    this.$el.on('click', 'ul', function (event) {
      this.clickTower(event);
    }.bind(this));
  };

  View.prototype.clickTower = function(event){
    var clickedTower = $(event.target).val();

    if(this.fromTower === null){
      this.fromTower = clickedTower;
    }else{
      this.game.move(this.fromTower, clickedTower);
      this.fromTower = null;
    }
    this.render();

    if(this.game.isWon()){
      console.log("You won!");
    }
  };

  View.prototype.render = function(){
    var towers = this.game.towers;
    for(var i = 0; i < 3; i++){
      if(towers[i].length === 1){

      }
    }
  };

})();
