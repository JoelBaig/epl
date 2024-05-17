class Coin extends MovableObject {
    width = 150;
    height = 150;
    x = 100;
    y = 100;
    IMAGES_COIN = [
        '../assets/img/8_coin/coin_1.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_COIN[0]);
        this.x = 200 + Math.random() * 1800;
        this.y = 100 + Math.random() * 200;
    }
}