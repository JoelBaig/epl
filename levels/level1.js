/**
 * Represents the first level of the game.
 * 
 * @type {Level}
 */
const level1 = new Level(
    [
        new BackgroundObject('../assets/img/5_background/layers/air.png', -719, 0),
        new BackgroundObject('../assets/img/5_background/layers/2_second_layer/2.png', -719, 0),
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/2.png', -719, 0),
        new BackgroundObject('../assets/img/5_background/layers/1_first_layer/2.png', -719, 0),

        new BackgroundObject('../assets/img/5_background/layers/air.png', 0),
        new BackgroundObject('../assets/img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('../assets/img/5_background/layers/1_first_layer/1.png', 0),

        new BackgroundObject('../assets/img/5_background/layers/air.png', 719, 0),
        new BackgroundObject('../assets/img/5_background/layers/2_second_layer/2.png', 719, 0),
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/2.png', 719, 0),
        new BackgroundObject('../assets/img/5_background/layers/1_first_layer/2.png', 719, 0),

        new BackgroundObject('../assets/img/5_background/layers/air.png', 719 * 2, 0),
        new BackgroundObject('../assets/img/5_background/layers/2_second_layer/1.png', 719 * 2, 0),
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/1.png', 719 * 2, 0),
        new BackgroundObject('../assets/img/5_background/layers/1_first_layer/1.png', 719 * 2, 0),

        new BackgroundObject('../assets/img/5_background/layers/air.png', 719 * 3, 0),
        new BackgroundObject('../assets/img/5_background/layers/2_second_layer/2.png', 719 * 3, 0),
        new BackgroundObject('../assets/img/5_background/layers/3_third_layer/2.png', 719 * 3, 0),
        new BackgroundObject('../assets/img/5_background/layers/1_first_layer/2.png', 719 * 3, 0)
    ],
    [
        new Cloud('../assets/img/5_background/layers/4_clouds/1.png', 100, 100),
        new Cloud('../assets/img/5_background/layers/4_clouds/2.png', 300, 100),
        new Cloud('../assets/img/5_background/layers/4_clouds/1.png', 500, 100),
        new Cloud('../assets/img/5_background/layers/4_clouds/2.png', 700, 100),
        new Cloud('../assets/img/5_background/layers/4_clouds/1.png', 900, 100)
    ],
    [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()
    ],
    [
        new BottleLeft(),
        new BottleLeft(),
        new BottleLeft()
    ],
    [
        new BottleRight(),
        new BottleRight()
    ],
    [
        new ChickenBig(),
        new ChickenBig(),
        new ChickenBig(),

        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(),

        new ChickenBoss()
    ]
);

