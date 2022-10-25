function draw() {
  switch (gameState) {
    case 'start':
      gameStart()
      break;
    case 'controls':
      gameControls()
      break;
    case 'selection':
      gameSelection()
      break;
    case 'play':
      gamePlay()

      break;
    case 'playYellow':
      gamePlayYellow()

      break;
    case 'playBlue':
      gamePlayBlue()

      break;
    case 'end':
      gameEnd()
      break;
    case 'credits':
      gameCredits()
      break;
  }
