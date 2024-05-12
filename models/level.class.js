class Level {
    backgroundObjects;
    clouds;
    enemies;
    coins;
    level_end_x = 2200;

    constructor(backgroundObjects, clouds, enemies) {
        this.backgroundObjects = backgroundObjects;
        this.clouds = clouds;
        this.enemies = enemies;
        this.coins = coins;
    }
}