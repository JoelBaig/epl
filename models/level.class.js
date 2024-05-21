/**
 * Represents a level in the game.
 * 
 */
class Level {
    backgroundObjects;
    clouds;
    coins;
    bottleLeft;
    bottleRight;
    enemies;
    level_end_x = 2200;

    /**
     * Creates an instance of Level.
     * 
     * @param {BackgroundObject[]} backgroundObjects - The background objects of the level.
     * @param {Cloud[]} clouds - The cloud objects of the level.
     * @param {Enemy[]} enemies - The enemy objects of the level.
     * @param {Coin[]} coins - The coin objects of the level.
     * @param {Bottle[]} bottles - The bottle objects of the level.
     */
    constructor(backgroundObjects, clouds, coins, bottleLeft, bottleRight, enemies) {
        this.backgroundObjects = backgroundObjects;
        this.clouds = clouds;
        this.coins = coins;
        this.bottleLeft = bottleLeft;
        this.bottleRight = bottleRight;
        this.enemies = enemies;
    }
}