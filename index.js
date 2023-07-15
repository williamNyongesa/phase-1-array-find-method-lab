// code your solution here
function superbowlWin(array) {
    const winningGame = array.find(game => game.result === "W");
    if (winningGame) {
      return winningGame.year;
    }else
    return undefined;
  }