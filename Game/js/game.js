var game = new Phaser.Game(1000, 800, Phaser.CANVAS, 'game-world');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('level', levelState);
// remember to add in additional levels as they are made
game.state.add('gameover', gameoverState);

game.global = {

  variables
  var background
  var player
  var
   // set variables that travel between the states here
   // eg score = 0;
   // access using game.global
   // eg game.gloabl.score
};

game.state.start('boot');
//Bruh
