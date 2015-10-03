(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  };

  View.prototype.bindEvents = function () {
    var that = this;
    this.$el.on('click', function (e) {
      var $banner = $('h1');
      that.makeMove(e.target);
      $banner.text(that.game.currentPlayer + "'s turn.");


      if(that.game.isOver() && that.game.winner() !== null){
        $banner.text(that.game.winner() + " wins!");
        var $winner = $("li:contains(" + that.game.winner() + ")");
        $winner.css({
          'background': 'green',
          'color': 'white'
        });
        var $loser = $("li:contains(" + that.game.currentPlayer + ")");
        $loser.css({
          'color': 'red'
        });
      }else if(that.game.isOver()){
        $banner.text("Cat's Game!");
      }
    });
  };

  function pos($square){
    var id = parseInt($($square).attr('id'));
    return [Math.floor(id / 3), id % 3];
  }

  View.prototype.makeMove = function ($square) {
    $square = $($square);
    $square.css('background', '#fff');
    this.game.playMove(pos($square));
    $square.text(this.game.currentPlayer);
    this.game.swapTurn();
  };

  View.prototype.setupBoard = function () {
    this.$board = $(this.$el).append('<ul class="clearfix"></ul>').find('ul');
    for(var i = 0; i < 9; i++){
      this.$board.append('<li id='+i+'></li>');
    }
  };
})();
