class Boss extends Opponent {
  /**
   * @param game {Game} La instancia del juego al que pertenece el oponente
   */
  constructor(game) {
    const height = (JEFE_HEIGHT * game.height) / 100,
      width = (JEFE_WIDTH * game.width) / 100,
      x = getRandomNumber(game.width - width / 2),
      y = 0,
      speed = JEFE_SPEED,
      myImage = JEFE_PICTURE,
      myImageDead = JEFE_PICTURE_DEAD;

    super(game, width, height, x, y, speed, myImage, myImageDead);

    this.image.src = JEFE_PICTURE;
    this.speed = JEFE_SPEED;
  }
}
