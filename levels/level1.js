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
        new CloudTypeOne(),

        new CloudTypeTwo()
    ],
    [
        new ChickenBig(),
        new ChickenBig(),
        new ChickenBig(),

        new ChickenSmall(),
        new ChickenSmall(),
        new ChickenSmall(), 

        new ChickenBoss()
    ],
    [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()
    ]
);

