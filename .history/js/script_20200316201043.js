window.onload = function() {
  const canvas = document.querySelector("my-canvas");
  const game = new Game(canvas);

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    game.start();
  }

};
